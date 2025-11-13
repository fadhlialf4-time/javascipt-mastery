export function judul(teks) {
    return teks
    .split(" ")
    .map(kata => kata.charAt(0).toUpperCase() + kata.slice(1).toLowerCase())
    .join(" ");
}