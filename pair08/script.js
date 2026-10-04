// function name(аргументи){
//     код
// }

// function hello(){
//     alert("Hello world!");
// }
//
// hello();
// hello();
// hello();
//
// function showInfo(name, price = "Немає у наявності", count){
//     console.log("Магазин у Сані");
//     console.log("Графік роботи: 8:00 - 21:00");
//     console.log(`Товар: ${name}, ціна: ${price}`);
//     console.log(`Сума до оплати: ${count * price}`);
//
// }
//
//
// showInfo('Зелений чай', 1000000, 4);


// function calculateTotal(price, count) {
//     let suma = price * count;
//     if (suma >= 5000){
//         suma *= 0.9
//     }
//     return suma;
//
// }
// let total = calculateTotal(2500, 3);
// console.log(total);

// function showInfo(){
//     console.log("Магазин у Сані");
//     console.log("Графік роботи: 8:00 - 21:00");
//
//
// }
//
// function getProductTotal(price, count){
//     return price * count;
// }
// function getDiscountPercent(total){
//     if (total >= 10000){
//         return 15
//     }
//     else if (total >= 5000){
//         return 10
//     }
//     else if (total >= 2000){
//         return 5
//     }
//     else{
//         return 0
//     }
//
// }
// function getDiscountValue(total, percent){
//     return total * percent/100;
//
// }
// function getFinalPrice(total, discount){
//     return total - discount;
// }
// let productName = prompt("Введіть назву товару:")
// let productPrice = +prompt("Введіть вартість товару:")
// let productCount = +prompt("Введіть кількість товару:")
//
// let productTotal = getProductTotal(productPrice, productCount);
// let discountPercent = getDiscountPercent(productTotal);
// let discountValue = getDiscountValue(productTotal, discountPercent);
// let finalPrice = getFinalPrice(productTotal, discountValue);
//
// showInfo(productName, productPrice, productCount);
// console.log(`Товар ${productName}`);
// console.log(`Ціна ${productPrice}грн`);
// console.log(`Кількість ${productCount}шт`);
// console.log(`Сума ${productTotal}грн`);
// console.log(`Знижка ${discountPercent}%`);
// console.log(`Сума знижки ${discountValue}грн`);
// console.log(`До сплати ${finalPrice}грн`);

//__________________________________________________________________________-

// function calculateTickets(price, count){
//     return price * count;
// }
//
// function getTicketDiscount(total){
//     if (total >= 1500){
//         return 15;
//     }
//     else if (total >= 1000){
//         return 10;
//     }
//     else if (total >= 500){
//         return 5;
//     }
//     else{
//         return 0;
//     }
// }
//
// function calculateTicketDiscount(total, percent){
//     return total * percent / 100;
// }
//
// function calculateTicketFinalPrice(total, discount){
//     return total - discount;
// }
//
// let ticketPrice = +prompt("Введіть ціну одного квитка:");
// let ticketCount = +prompt("Введіть кількість квитків:");
//
// let total = calculateTickets(ticketPrice, ticketCount);
// let discountPercent = getTicketDiscount(total);
// let discountValue = calculateTicketDiscount(total, discountPercent);
// let finalPrice = calculateTicketFinalPrice(total, discountValue);
//
// console.log(`Ціна квитка: ${ticketPrice}грн`);
// console.log(`Кількість квитків: ${ticketCount}шт`);
// console.log(`Загальна сума: ${total}грн`);
// console.log(`Знижка: ${discountPercent}%`);
// console.log(`Сума знижки: ${discountValue}грн`);
// console.log(`До сплати: ${finalPrice}грн`);

//___________________________________________________________________
let correctLogin = "me";
let correctPassword = "1234";

function register() {
    let newLogin = prompt("Введіть новий логін:");
    let newPassword = prompt("Введіть новий пароль:");
    correctLogin = newLogin;
    correctPassword = newPassword;


    alert("Реєстрація успішна!");
}

function login() {
    let attempts = 3;

    while (attempts > 0) {
        let enteredLogin = prompt(`Введіть логін, залишилось спроб - ${attempts} `);
        let enteredPassword = prompt("Введіть пароль:");

        if (enteredLogin === correctLogin && enteredPassword === correctPassword) {
            alert("Вхід успішний");
            return;
        } else {
            attempts -= 1;
            if (attempts > 0) {
                alert(`Невірний логін або пароль. Залишилося спроб - ${attempts}`);
            } else {
                alert("Ви вичерпали всі спроби");

            }
        }
    }
}

let choice = +prompt("Оберіть: 1 - реєстрація, 2 - вхід, 0 - закрити");

if (choice === 1) {
    register();
} else if (choice === 2) {
    login();
} else if (choice === 0) {
    alert("Програму закрито.");
} else {
    alert("Невірний вибір.");
}