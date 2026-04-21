//kullanıcı görev ekleyebilecek 
// üzerine tıklayarak tamamlandı olarak işaretleyebilcek 
// isterse sil butonuna baasarak görevi silebilecek bir yapılacaklar listesi tasarlayın

//hmtldeki bir elemana erişim için document.getElementById(...);
//event mantığı butona tıklayınca action : button.addEventListener("click".addTask);
//dinamik eleman oluşturma : document.createElement("li");
//listeye eleman ekleme list.appendChild(li);

const input = document.getElementById("taskInput");
const button = document.getElementById("addBtn");
const list = document.getElementById("taskList");

// Butona tıklanınca görev ekle
button.addEventListener("click", addTask);

function addTask() {

    if (input.value.trim() === "") {
        alert("Boş görev eklenemez!");
        return;
    }

    // li oluştur
    const li = document.createElement("li");
    li.textContent = input.value;

    // Tamamlandı işaretleme (tıklayınca)
    li.addEventListener("click", function () {
        li.classList.toggle("completed");
    });

    // Sil butonu oluştur
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Sil";

    // Silme işlemi
    deleteBtn.addEventListener("click", function (e) {
        e.stopPropagation(); // li click çalışmasın
        list.removeChild(li);
    });

    li.appendChild(deleteBtn);
    list.appendChild(li);

    input.value = ""; // input temizle
}