// Nomor 1
  const countEl = document.getElementById("count");
  const btn = document.getElementById("btn-plus");
  const msg = document.getElementById("msg");
  let count = 0;

  btn.addEventListener("click", () => {
    count++;
    countEl.textContent = count;

    if (count % 10 === 0) {
      msg.textContent = "Wow, kamu konsisten banget";
    }
    // kalau >=10 tapi bukan kelipatan 10
    else if (count >= 10) {
      msg.textContent = "Wah, rajin juga! 🔥";
    } else {
      msg.textContent = "";
    }

    if (count > 30) {
      countEl.style.color = "red";
    } else {
      countEl.style.color = "black";
    }
  });

// Nomor 2
  const input = document.getElementById("todo-input");
  const addBtn = document.getElementById("todo-add");
  const list1 = document.getElementById("todo-list");
  const totalEl = document.getElementById("total");
  const doneEl = document.getElementById("done");

  function updateStats() {
    const items = list.querySelectorAll("li");
    const done = list.querySelectorAll("li.done");
    totalEl.textContent = items.length;
    doneEl.textContent = done.length;
  }

  function createTodoItem(text) {
    const li = document.createElement("li");

    const span = document.createElement("span");
    span.className = "todo-text";
    span.textContent = text;

    const delBtn = document.createElement("button");
    delBtn.className = "del-btn";
    delBtn.textContent = "Hapus";
    delBtn.setAttribute("aria-label", `Hapus ${text}`);

    li.appendChild(span);
    li.appendChild(delBtn);

    return li;
  }

  function addTodo() {
    const text = input.value.trim();
    if (!text) return;
    const li = createTodoItem(text);
    list1.appendChild(li);
    input.value = "";
    input.focus();
    updateStats();
  }

  addBtn.addEventListener("click", addTodo);

  // tekan Enter di input untuk tambah
  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") addTodo();
  });

  list1.addEventListener("click", (e) => {
    // jika yang diklik tombol Hapus
    if (e.target.matches("button.del-btn")) {
      const li = e.target.closest("li");
      if (li) {
        li.remove();
        updateStats();
      }
      return;
    }

    const li = e.target.closest("li");
    if (li) {
      li.classList.toggle("done");
      updateStats();
    }
  });

  updateStats();
