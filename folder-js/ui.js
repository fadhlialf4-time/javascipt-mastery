import { getNotes, saveNotes } from "./db.js";

// RENDER LIST CATATAN
export function renderNotes(username) {
    const list = document.getElementById("notes-list");
    list.innerHTML = "";

    const notes = getNotes(username);

    notes.forEach((note, index) => {
        const div = document.createElement("div");
        div.className = "note-item";

        div.innerHTML = `
            <h4>${note.title}</h4>
            <p>${note.content}</p>

            <div class="note-actions">
                <button onclick="editNote(${index})">Edit</button>
                <button onclick="deleteNote(${index})">Delete</button>
            </div>
        `;

        list.appendChild(div);
    });
}

export function initDarkMode() {
    const btn = document.getElementById("btnDarkMode");
    if(!btn) return;

    const saved = localStorage.getItem("darkMode");
    if(saved === "on") document.body.classList.add("dark");

    btn.addEventListener("click", () => {
        document.body.classList.toggle("dark");

        const isDark = document.body.classList.contains("dark");
        localStorage.setItem("darkMode", isDark ? "on" : "off");
    });
}

// GLOBAL untuk akses inline onclick()
window.editNote = (i) => {
    const username = localStorage.getItem("session");
    const notes = getNotes(username);

    const newTitle = prompt("Edit Judul:", notes[i].title);
    const newContent = prompt("Edit Isi:", notes[i].content);

    notes[i].title = newTitle;
    notes[i].content = newContent;

    saveNotes(username, notes);
    renderNotes(username);
};

window.deleteNote = (i) => {
    const username = localStorage.getItem("session");
    const notes = getNotes(username);

    notes.splice(i, 1);
    saveNotes(username, notes);

    renderNotes(username);
};
