import { register, login, logout, getSession } from "./auth.js";
import { getNotes, saveNotes } from "./db.js";
import { renderNotes, initDarkMode } from "./ui.js";

document.addEventListener("DOMContentLoaded", () => {

    initDarkMode ();

    const loginUsername = document.getElementById("login-username");
    const loginPassword = document.getElementById("login-password");

    const regUsername = document.getElementById("reg-username");
    const regPassword = document.getElementById("reg-password");

    const btnLogout = document.getElementById("btn-logout");
    const btnAddNote = document.getElementById("btn-add-note");

    const noteTitle = document.getElementById("note-title");
    const noteContent = document.getElementById("note-content");

    const session = getSession();
    if (session) showDashboard();
    else showAuth();

    // ========== NAVIGATION (Login ↔ Register) ==========
    document.getElementById("go-register").onclick = () => {
        document.getElementById("login-box").style.display = "none";
        document.getElementById("register-box").style.display = "block";
    };

    document.getElementById("go-login").onclick = () => {
        document.getElementById("register-box").style.display = "none";
        document.getElementById("login-box").style.display = "block";
    };

    // ================= LOGIN =================
    document.getElementById("btn-login").onclick = () => {
        const u = loginUsername.value;
        const p = loginPassword.value;

        const result = login(u, p);
        if (!result.success) return alert(result.msg);

        showDashboard();
    };

    // ================= REGISTER =================
    document.getElementById("btn-register").onclick = () => {
        const u = regUsername.value;
        const p = regPassword.value;

        const result = register(u, p);
        if (!result.success) return alert(result.msg);

        alert("Pendaftaran berhasil!");
        document.getElementById("go-login").click();
    };

    // ================= LOGOUT =================
    btnLogout.onclick = () => {
        logout();
        showAuth();
    };

    // ================= ADD NOTE =================
    btnAddNote.onclick = () => {
        const username = getSession();
        const notes = getNotes(username);

        const title = noteTitle.value;
        const content = noteContent.value;

        if (!title || !content) return alert("Judul dan isi wajib diisi!");

        notes.push({ title, content });
        saveNotes(username, notes);

        renderNotes(username);

        noteTitle.value = "";
        noteContent.value = "";
    };
});

// ================= FUNCTIONS =================

function showAuth() {
    document.getElementById("auth-section").style.display = "block";
    document.getElementById("dashboard").style.display = "none";
}

function showDashboard() {
    const username = getSession();

    document.getElementById("auth-section").style.display = "none";
    document.getElementById("dashboard").style.display = "block";

    renderNotes(username);
    loadQuote();
}

// FETCH API — Random Quotes
function loadQuote() {
    fetch("https://dummyjson.com/quotes/random")
        .then(res => res.json())
        .then(data => {
            document.getElementById("quote-box").textContent =
                `"${data.quote}" — ${data.author}`;
        })
        .catch(() => {
            document.getElementById("quote-box").textContent =
                "Gagal mengambil quotes...";
        });
}
