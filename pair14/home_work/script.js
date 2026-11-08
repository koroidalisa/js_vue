let enrollBtn = document.querySelector('#enrollBtn');
let status = document.querySelector('#status');
enrollBtn.addEventListener("click", function () {
    status.textContent = 'Профіль змінено!';
    status.classList.add('success');
    enrollBtn.textContent = 'Відбулися зміни.';
})

let studentsName = document.querySelector('#studentsName');
let welcome = document.querySelector('#welcome');

studentsName.addEventListener("input", function () {
    let name = studentsName.value.trim();
    if (name === ".") {
        welcome.textContent = "Вітаємо, гостю!"

    }
    else {
        welcome.textContent = "Вітаємо, " +name;
    }
})



let detailBtn = document.querySelector('#detailBtn');
let details = document.querySelector('#details');

detailBtn.addEventListener("click", function () {
    details.classList.toggle('hidden');
    if (details.classList.contains('hidden')) {
        detailBtn.textContent = 'Показати додаткову інформацію'

    }
    else {
        detailBtn.textContent = 'Приховати додаткову інформацію';
    }
})



let format = document.querySelector('#format');
let price = document.querySelector('#price');
let card = document.querySelector('#card');

format.addEventListener("change", function () {
    price.textContent = format.value;
    if (format.value === "темна") {
        card.classList.add('dark');
    } else {
        card.classList.remove('dark');
    }
})


