// app.js
import * as API from './api.js';
import * as UI from './utils.js';
import { getNextPrayer, toDateKey, formatFullDate } from './prayerSchedule.js';

const cityInput = document.querySelector('.search-row .input-group input');
const pickBtn = document.querySelector('.search-row .btn');
const refreshInspirationBtn = (function(){

  const panels = Array.from(document.querySelectorAll('.panel'));
  if (panels.length < 2) return document.querySelectorAll('.panel .btn')[1] ?? document.querySelector('.panel .btn');
  return panels[1].querySelector('.btn');
})();

let currentCity = { id: null, nama: 'KOTA SAYA', provinsi: 'PROVINSI SAYA' };
let nextPrayerTimer = null;

document.addEventListener('DOMContentLoaded', async () => {
  UI.setHeaderDateAndLocation(formatFullDate(), currentCity.nama);
  const todayKey = toDateKey();
  UI.setPrayerHeaderDate(todayKey, currentCity.nama, currentCity.provinsi);

  await loadInspirations();
});

pickBtn?.addEventListener('click', async () => {
  const keyword = cityInput?.value?.trim();
  if (!keyword) {
    UI.showToast('Masukkan nama kota untuk mencari (contoh: Kediri)');
    return;
  }

  try {
    const result = await API.searchCity(keyword);
    if (!result || !result.data || result.data.length === 0) {
      UI.showToast('Kota tidak ditemukan.');
      return;
    }

    const city = result.data[0];

    currentCity = {
      id: city.id ?? city.kota_id ?? city.kabupaten_id ?? city.city_id,
      nama: city.lokasi ?? city.kota ?? city.nama ?? city.city ?? keyword,
      provinsi: city.provinsi ?? city.province ?? ''
    };

    UI.setHeaderDateAndLocation(formatFullDate(), currentCity.nama);
    await loadDailyAndMonthly(currentCity.id);

  } catch (err) {
    console.error(err);
    UI.showToast('Gagal mencari kota: ' + (err.message || err));
  }
});

refreshInspirationBtn?.addEventListener('click', async () => {
  await loadInspirations();
});

async function loadDailyAndMonthly(cityId) {
  if (!cityId) {
    UI.showToast('ID kota tidak tersedia.');
    return;
  }

  const today = toDateKey();
  try {
    const dailyRes = await API.getDailySchedule(cityId, today);
    if (dailyRes && dailyRes.status && dailyRes.data && dailyRes.data.jadwal) {
      const jadwal = dailyRes.data.jadwal;

      UI.setPrayerHeaderDate(today, currentCity.nama, currentCity.provinsi);
      // render list
      UI.renderPrayerList(jadwal);

      const next = getNextPrayer(jadwal);
      if (next) {
        startNextPrayerCountdown(next);
        UI.highlightNextPrayer(next.key);
        UI.setNextPrayerPill(`${next.name} dalam --:--:--`);
      }
    } else {
      UI.showToast('Gagal mengambil jadwal harian.');
    }

    const dateObj = new Date();
    const year = dateObj.getFullYear();
    const month = dateObj.getMonth() + 1;
    const monthlyRes = await API.getMonthlySchedule(cityId, year, month);
    if (monthlyRes && monthlyRes.status && monthlyRes.data && monthlyRes.data.jadwal) {
      // monthlyRes.data.jadwal biasanya array of {tanggal, imsak, subuh, dzuhur, ...}
      UI.renderMonthlySchedule(monthlyRes.data.jadwal);
    } else {

      if (monthlyRes && monthlyRes.data) {
        UI.renderMonthlySchedule(monthlyRes.data);
      }
    }
  } catch (err) {
    console.error(err);
    UI.showToast('Gagal memuat jadwal: ' + (err.message || err));
  }
}

async function loadInspirations() {
  try {
    const [ayat, hadits, doa, husna] = await Promise.all([
      API.getRandomAyat().catch(e => { console.warn(e); return null; }),
      API.getRandomHaditsArbain().catch(e => { console.warn(e); return null; }),
      API.getRandomDoa().catch(e => { console.warn(e); return null; }),
      API.getRandomAsmaulHusna().catch(e => { console.warn(e); return null; })
    ]);

    if (ayat) UI.renderAyatCard(ayat);
    if (hadits) UI.renderHaditsCard(hadits);
    if (doa) UI.renderDoaCard(doa);
    if (husna) UI.renderAsmaulHusnaCard(husna);
  } catch (err) {
    console.error(err);
  }
}

function startNextPrayerCountdown(next) {
  if (!next || !next.dateObj) return;
  clearInterval(nextPrayerTimer);

  function tick() {
    const now = new Date();
    let diff = next.dateObj - now;
    const name = next.name;

    if (diff <= 0) {

      clearInterval(nextPrayerTimer);

      if (currentCity.id) loadDailyAndMonthly(currentCity.id);
      return;
    }

    const hours = String(Math.floor(diff / (1000 * 60 * 60))).padStart(2, '0');
    diff -= hours * 3600 * 1000;
    const minutes = String(Math.floor(diff / (1000 * 60))).padStart(2, '0');
    diff -= minutes * 60 * 1000;
    const seconds = String(Math.floor(diff / 1000)).padStart(2, '0');

    UI.setNextPrayerPill(`${name} dalam ${hours}:${minutes}:${seconds}`);
  }

  tick();
  nextPrayerTimer = setInterval(tick, 1000);
}
