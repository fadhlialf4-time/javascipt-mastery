// helpers.js
import { searchCity, getDailySchedule } from './api.js';
import { getTodayForApi, getTodayForDisplay, getNextPrayer } from './utils.js';

let currentCityId = null;
let currentCityName = null;

// Element UI (harus sesuai dengan HTML kamu)
const inputCity = document.getElementById("inputCity");
const btnPilihLokasi = document.getElementById("btnPilihLokasi");
const statusInfo = document.getElementById("statusInfo");

const txtTanggal = document.getElementById("txtTanggal");
const txtLokasi = document.getElementById("txtLokasi");

const times = {
  imsak: document.getElementById("timeImsak"),
  subuh: document.getElementById("timeSubuh"),
  terbit: document.getElementById("timeTerbit"),
  dhuha: document.getElementById("timeDhuha"),
  dzuhur: document.getElementById("timeDzuhur"),
  ashar: document.getElementById("timeAshar"),
  maghrib: document.getElementById("timeMaghrib"),
  isya: document.getElementById("timeIsya")
};

const nextPrayerText = document.getElementById("nextPrayerText");

// =============================
// 1. HANDLE PILIH LOKASI
// =============================
btnPilihLokasi.addEventListener("click", handleChooseLocation);

async function handleChooseLocation() {
  const keyword = inputCity.value.trim();

  if (!keyword) {
    showError("Silakan masukkan nama kota.");
    return;
  }

  showStatus("Mencari kota…");

  try {
    // 1. Cari kota
    const result = await searchCity(keyword);

    if (!result.data || result.data.length === 0) {
      showError("Kota tidak ditemukan!");
      return;
    }

    const kota = result.data[0];
    currentCityId = kota.id;
    currentCityName = `${kota.lokasi} — ${kota.daerah}`;

    showStatus("Mengambil jadwal sholat…");

    const todayApi = getTodayForApi();
    const jadwalRes = await getDailySchedule(currentCityId, todayApi);
    const jadwal = jadwalRes.data.jadwal;

    updateDailyCard(jadwal, kota);

    updateNextSholat(jadwal);

    clearStatus();

  } catch (err) {
    console.error(err);
    showError("Terjadi kesalahan: " + err.message);
  }
}

function updateDailyCard(jadwal, kota) {
  txtTanggal.textContent = getTodayForDisplay();

  txtLokasi.textContent = `${kota.lokasi} — ${kota.daerah}`;

  // Jam sholat
  times.imsak.textContent   = jadwal.imsak;
  times.subuh.textContent   = jadwal.subuh;
  times.terbit.textContent  = jadwal.terbit;
  times.dhuha.textContent   = jadwal.dhuha;
  times.dzuhur.textContent  = jadwal.dzuhur;
  times.ashar.textContent   = jadwal.ashar;
  times.maghrib.textContent = jadwal.maghrib;
  times.isya.textContent    = jadwal.isya;
}

// =============================
// 3. UPDATE NEXT SHOLAT
// =============================
function updateNextSholat(jadwal) {
  const next = getNextPrayer(jadwal, new Date());

  nextPrayerText.textContent = `Sholat berikutnya: ${capitalize(next)}`;
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// =============================
// 4. UX: STATUS & ERROR
// =============================
function showStatus(msg) {
  statusInfo.textContent = msg;
  statusInfo.style.color = "black";
}

function showError(msg) {
  statusInfo.textContent = msg;
  statusInfo.style.color = "red";
}

function clearStatus() {
  statusInfo.textContent = "";
}
