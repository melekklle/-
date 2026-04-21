const input = document.getElementById("taskInput");
const button = document.getElementById("addBtn");
const list = document.getElementById("taskList");

button.addEventListener("click", addTask);

function addTask() {

    if (input.value.trim() === "") {
        alert("Boş görev eklenemez!");
        return;
    }

    const li = document.createElement("li");

    //  checkbox oluştur
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    // görev yazısı
    const span = document.createElement("span");
    span.textContent = input.value;

    // tik atılınca
    checkbox.addEventListener("change", function () {
        if (checkbox.checked) {
            span.style.color = "green";
        } else {
            span.style.color = "black";
        }
    });

    // sil butonu
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Sil";

    deleteBtn.addEventListener("click", function () {
        list.removeChild(li);
    });

    // elemanları sırayla ekle
    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteBtn);

    list.appendChild(li);

    input.value = "";
}