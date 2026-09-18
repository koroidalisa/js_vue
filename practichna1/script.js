
let basePrice = 0;
let processedTickets = 0;
let freeTickets = 0;
let discountedTickets = 0;
let fullPrice = 0;
let totalSum = 0;

let eventType = +prompt("Оберіть тип події:\n" +
    "1 - кіно\n" +
    "2 - театр\n" +
    "3 - концерт");

while (eventType !== 1 && eventType !== 2 && eventType !== 3) {
    eventType = +prompt("Неправильний вибір. Оберіть тип події:\n" +
        "1 - кіно\n" +
        "2 - театр\n" +
        "3  концерт");
}


switch (eventType) {
    case 1:
        basePrice = 150;
        break;
    case 2:
        basePrice = 220;
        break;
    case 3:
        basePrice = 350;
        break;
}

let dayType = +prompt("Оберіть тип дня:\n" +
    "1 - будній\n" +
    "2 - вихідний");

while (dayType !== 1 && dayType !== 2) {
    dayType = +prompt("Неправильний вибір. Оберіть тип дня:\n" +
        "1 - будній\n" +
        "2 - вихідний");
}

if (dayType === 2) {
    basePrice = basePrice * 1.15;
}

let ticketCount = +prompt("Введіть кількість квитків (від 1 до 6):");

while (ticketCount < 1 || ticketCount > 6) {
    ticketCount = +prompt("Некоректна кількість. Введіть кількість квитків (від 1 до 6):");
}



for (let i = 0; i < ticketCount; i++) {
    let age = +prompt(`Введіть вік для квитка #${i + 1} (-1 для завершення оформлення):`);

    while (age < -1) {
        age = +prompt(`Некоректний вік. Введіть вік для квитка #${i + 1} (-1 для завершення оформлення):`);
    }

    if (age === -1) {
        break;
    }

    processedTickets++;

    if (age >= 0 && age <= 5) {
        freeTickets++;
        continue;
    }

    let currentPrice = basePrice;
    let hasDiscount = false;

    if (age >= 6 && age <= 12) {
        currentPrice *= 0.50;
        hasDiscount = true;
    } else if (age >= 13 && age <= 17) {
        currentPrice *= 0.80;
        hasDiscount = true;
    } else if (age >= 60) {
        currentPrice *= 0.75;
        hasDiscount = true;
    } else if (age >= 18 && age <= 25) {
        let isStudent = prompt("Чи є студентський квиток?\n" +
            "так або ні");
        if (isStudent === "так") {
            currentPrice *= 0.90;
            hasDiscount = true;
        }
    }

    if (hasDiscount) {
        discountedTickets++;
    } else {
        fullPrice++;
    }

    totalSum += currentPrice;
}

if (totalSum > 1000) {
    totalSum = totalSum* 0.95;
}

console.log(`Кількість оброблених квитків: ${processedTickets}`);
console.log(`Безкоштовні квитки: ${freeTickets}`);
console.log(`Квитки зі знижкою: ${discountedTickets}`);
console.log(`Квитки за повною ціною: ${fullPrice}`);
console.log(`Загальна сума: ${totalSum} грн`);