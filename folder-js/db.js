// SAVE DATA
export function save(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

// LOAD DATA
export function load(key) {
    return JSON.parse(localStorage.getItem(key));
}

// USERS
export function getUsers() {
    return load("users") || [];
}

export function saveUsers(users) {
    save("users", users);
}

// NOTES
export function getNotes(username) {
    const all = load("notes") || {};
    return all[username] || [];
}

export function saveNotes(username, notes) {
    let all = load("notes") || {};
    all[username] = notes;
    save("notes", all);
}
