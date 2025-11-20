const BASE_URL = 'https://api.myquran.com/v2/';

async function handleFetch(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`HTTP ${res.status} - ${res.statusText}`);
  return res.json();
}

export async function searchCity(keyword) {
  if (!keyword) return { status: false, data: [] };
  return handleFetch(`${BASE_URL}sholat/kota/cari/${encodeURIComponent(keyword)}`);
}

export async function getCityById(id) {
  // kadang endpoint menerima id dengan trailing slash
  return handleFetch(`${BASE_URL}sholat/jadwal/${id}/`);
}

export async function getDailySchedule(cityId, dateString) {
  return handleFetch(`${BASE_URL}sholat/jadwal/${cityId}/${dateString}`);
}

export async function getMonthlySchedule(cityId, year, month) {
  return handleFetch(`${BASE_URL}sholat/jadwal/${cityId}/${year}/${month}`);
}

export async function getRandomAyat() {
  return handleFetch(`${BASE_URL}quran/random`);
}

export async function getRandomHaditsArbain() {
  return handleFetch(`${BASE_URL}hadits/arbain/random`);
}

export async function getRandomDoa() {
  return handleFetch(`${BASE_URL}doa/random`);
}

export async function getRandomAsmaulHusna() {
  return handleFetch(`${BASE_URL}asmaulhusna/random`);
}
