import { formatFullDate } from './prayerSchedule.js';

function qs(selector, root = document) { return root.querySelector(selector); }
function qsa(selector, root = document) { return Array.from(root.querySelectorAll(selector)); }

export function setHeaderDateAndLocation(dateText, locationText) {
  const dateEl = qs('.today-info .date');
  const locEl = qs('.today-info .location strong');
  if (dateEl) dateEl.textContent = dateText;
  if (locEl) locEl.textContent = locationText;
}

export function setPrayerHeaderDate(dateStr, cityName, provinceName) {
  const main = qs('.prayer-header .prayer-header-main');
  const sub = qs('.prayer-header .prayer-header-sub');
  if (main) main.textContent = `Hari ini • ${dateStr}`;
  if (sub) sub.textContent = `${cityName} — ${provinceName} • Jadwal harian`;
}

export function renderPrayerList(jadwal) {
  // jadwal: object dengan key seperti subuh,dzuhur,...
  const items = qsa('.prayer-list .prayer-item');
  items.forEach(item => {
    const labelEl = qs('.prayer-label', item);
    const timeEl = qs('.prayer-time', item);
    const extraEl = qs('.prayer-extra', item);
    if (!labelEl || !timeEl) return;
    const label = labelEl.textContent.trim().toLowerCase();

    // map label ke key jadwal
    const mapping = {
      'imsak': 'imsak',
      'subuh': 'subuh',
      'terbit': 'terbit',
      'dhuha': 'dhuha',
      'dzuhur': 'dzuhur',
      'ashar': 'ashar',
      'maghrib': 'maghrib',
      'isya': 'isya'
    };

    const key = mapping[label];
    if (key && jadwal[key]) {
      timeEl.textContent = jadwal[key];
    } else {
      timeEl.textContent = '—';
    }
  });
}

export function highlightNextPrayer(prayerKey) {
  const items = Array.from(document.querySelectorAll('.prayer-list .prayer-item'));
  items.forEach(item => item.classList.remove('highlight'));
  const found = items.find(item => {
    const label = item.querySelector('.prayer-label')?.textContent?.trim().toLowerCase();
    return label === (prayerKey || '').toLowerCase();
  });
  if (found) found.classList.add('highlight');
}

export function setNextPrayerPill(text) {
  const pill = document.querySelector('.prayer-header .pill h2');
  if (pill) pill.textContent = text;
}

export function renderMonthlySchedule(rows) {
  // rows: array of objects {date: 'YYYY-MM-DD', imsak, subuh, dzuhur, ashar, maghrib, isya}
  const container = document.querySelector('.month-list');
  if (!container) return;

  // Remove existing non-header rows
  const header = container.querySelector('.month-row.header');
  container.innerHTML = '';
  if (header) container.appendChild(header);

  // create rows
  rows.forEach(r => {
    const dateObj = new Date(r.tanggal || r.date || r.date_key || r);

    const d = new Date(r.tanggal || r.date || (r.date_key ? r.date_key : r));
    const dayName = d.toLocaleDateString('id-ID', { weekday: 'short' });
    const dayNum = d.getDate();
    const months = d.toLocaleDateString('id-ID', { month: 'short' });
    const displayDate = `${dayName}, ${dayNum} ${months}`;

    const row = document.createElement('div');
    row.className = 'month-row';
    row.innerHTML = `
      <div class="month-date">${displayDate}</div>
      <div class="month-time">${r.subuh ?? r.fajr ?? '—'}</div>
      <div class="month-time">${r.dzuhur ?? r.dhuhr ?? '—'}</div>
      <div class="month-time">${r.ashar ?? r.asr ?? '—'}</div>
      <div class="month-time">${r.maghrib ?? '—'}</div>
      <div class="month-time">${r.isya ?? r.isha ?? '—'}</div>
    `;
    container.appendChild(row);
  });
}

export function renderAyatCard(ayatData) {

  const card = document.querySelector('.cards-grid article.card-accent-indigo');
  if (!card || !ayatData) return;
  const title = `${ayatData.data.surah?.nama || ayatData.data.surah?.englishName || ''} • ${ayatData.data.ayat?.number ?? ''}`;
  const arab = ayatData.data.ar ?? ayatData.data.text ?? '';
  const id = ayatData.data.id ?? ayatData.data.translation ?? '';
  card.querySelector('.card-title').textContent = title;
  card.querySelector('.card-arabic').textContent = arab;
  card.querySelector('.card-content').textContent = id;
  const meta = card.querySelector('.card-meta');
  if (meta) meta.textContent = 'Source: /quran/ayat/acak';
}

export function renderHaditsCard(haditsData) {
  const card = document.querySelector('.cards-grid article.card-accent-amber');
  if (!card || !haditsData) return;
  // structure depends on API; using common fields
  const title = haditsData.data?.judul ?? `Hadits • ${haditsData.data?.number ?? ''}`;
  const arab = haditsData.data?.arab ?? haditsData.data?.text ?? '';
  const id = haditsData.data?.id ?? haditsData.data?.terjemah ?? '';
  card.querySelector('.card-title').textContent = title;
  card.querySelector('.card-arabic').textContent = arab;
  card.querySelector('.card-content').textContent = id;
  const meta = card.querySelector('.card-meta');
  if (meta) meta.textContent = 'Source: /hadits/arbain/acak';
}

export function renderDoaCard(doaData) {
  const card = document.querySelector('.cards-grid article.card-accent-green');
  if (!card || !doaData) return;
  const title = doaData.data?.nama ?? doaData.data?.title ?? 'Doa';
  const arab = doaData.data?.arab ?? doaData.data?.text ?? '';
  const id = doaData.data?.id ?? doaData.data?.translation ?? '';
  card.querySelector('.card-title').textContent = title;
  card.querySelector('.card-arabic').textContent = arab;
  card.querySelector('.card-content').textContent = id;
  const meta = card.querySelector('.card-meta');
  if (meta) meta.textContent = 'Source: /doa/acak';
}

export function renderAsmaulHusnaCard(husnaData) {
  const card = document.querySelector('.cards-grid article:not(.card-accent-indigo):not(.card-accent-amber):not(.card-accent-green)');
  if (!card || !husnaData) return;
  const arab = husnaData.data?.arab ?? husnaData.data?.name ?? '';
  const latin = husnaData.data?.latin ?? husnaData.data?.transliteration ?? '';
  const arti = husnaData.data?.arti ?? husnaData.data?.meaning ?? '';
  card.querySelector('.card-title').textContent = `${arab} • ${latin}`;
  card.querySelector('.card-arabic').textContent = arab;
  card.querySelector('.card-content').textContent = arti;
  const meta = card.querySelector('.card-meta');
  if (meta) meta.textContent = 'Source: /asmaulhusna/acak';
}

export function showToast(message) {
  alert(message);
}
