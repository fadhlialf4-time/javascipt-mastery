// ui.js
export function padZero(n) {
  return n < 10 ? `0${n}` : `${n}`;
}

export function getTodayForApi() {
  const today = new Date();
  const y = today.getFullYear();
  const m = padZero(today.getMonth() + 1);
  const d = padZero(today.getDate());
  return `${y}-${m}-${d}`;
}

export function getTodayForDisplay() {
  const hariList = [
    "Minggu", "Senin", "Selasa", "Rabu",
    "Kamis", "Jumat", "Sabtu"
  ];

  const today = new Date();
  const hari = hariList[today.getDay()];
  const tgl = padZero(today.getDate());
  const bln = padZero(today.getMonth() + 1);
  const thn = today.getFullYear();

  return `${hari}, ${tgl}/${bln}/${thn}`;
}

export function getNextPrayer(jadwal, now = new Date()) {
  const order = ["subuh", "dzuhur", "ashar", "maghrib", "isya"];

  const nowMinutes = now.getHours() * 60 + now.getMinutes();

  for (const sholat of order) {
    const [h, m] = jadwal[sholat].split(":").map(Number);
    const sholatMinutes = h * 60 + m;

    if (sholatMinutes > nowMinutes) {
      return sholat;
    }
  }
  
  return "subuh";
}
