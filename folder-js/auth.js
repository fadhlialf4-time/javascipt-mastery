import { getUsers, saveUsers } from "./db.js";

export function register(username, password) {
    let users = getUsers();

    if (users.find(u => u.username === username)) {
        return { success: false, msg: "Username sudah digunakan" };
    }

    users.push({ username, password });
    saveUsers(users);

    return { success: true };
}

export function login(username, password) {
    let users = getUsers();

    let found = users.find(u =>
        u.username === username && u.password === password
    );

    if (!found) return { success: false, msg: "Login gagal!" };

    localStorage.setItem("session", username);
    return { success: true, user: username };
}

export function logout() {
    localStorage.removeItem("session");
}

export function getSession() {
    return localStorage.getItem("session");
}
