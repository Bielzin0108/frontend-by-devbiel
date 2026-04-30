// Um pequeno aplicativo de tarefas persistente usando armazenamento local.
const todoForm = document.querySelector("#todoForm");
const todoInput = document.querySelector("#todoInput");
const todoList = document.querySelector("#todoList");
const emptyState = document.querySelector("#emptyState");
const filterButtons = document.querySelectorAll("[data-filter]");
const dateLabel = document.querySelector("#dateLabel");

let todos = JSON.parse(localStorage.getItem("todos")) || [];
let activeFilter = "all";

dateLabel.textContent = new Intl.DateTimeFormat("pt-BR", {
  weekday: "long",
  month: "long",
  day: "numeric"
}).format(new Date());

function saveTodos() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

function filteredTodos() {
  if (activeFilter === "active") {
    return todos.filter((todo) => !todo.completed);
  }

  if (activeFilter === "completed") {
    return todos.filter((todo) => todo.completed);
  }

  return todos;
}

function renderTodos() {
  const visibleTodos = filteredTodos();
  todoList.innerHTML = "";

  visibleTodos.forEach((todo) => {
    const item = document.createElement("li");
    const checkbox = document.createElement("input");
    const label = document.createElement("span");
    const deleteButton = document.createElement("button");

    item.className = `todo-item ${todo.completed ? "completed" : ""}`;

    checkbox.type = "checkbox";
    checkbox.checked = todo.completed;
    checkbox.setAttribute("aria-label", "Marcar tarefa como concluída");

    label.textContent = todo.text;

    deleteButton.className = "delete-button";
    deleteButton.type = "button";
    deleteButton.setAttribute("aria-label", "Excluir tarefa");
    deleteButton.textContent = "x";

    checkbox.addEventListener("change", () => {
      todo.completed = !todo.completed;
      saveTodos();
      renderTodos();
    });

    deleteButton.addEventListener("click", () => {
      todos = todos.filter((savedTodo) => savedTodo.id !== todo.id);
      saveTodos();
      renderTodos();
    });

    item.append(checkbox, label, deleteButton);
    todoList.append(item);
  });

  emptyState.classList.toggle("hidden", visibleTodos.length > 0);
}

todoForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const text = todoInput.value.trim();

  if (!text) {
    todoInput.focus();
    return;
  }

  todos.unshift({
    id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
    text,
    completed: false
  });

  todoInput.value = "";
  saveTodos();
  renderTodos();
});

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activeFilter = button.dataset.filter;

    filterButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    renderTodos();
  });
});

renderTodos();
