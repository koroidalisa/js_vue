//names = ["Ivan", "Mark", "Miroslava", "Oleksandra", "Emiliia"];
// console.log(names);
// console.log(names[-1]);
// console.log(names.length);
//
// names2 = [];
// names2.push("Vlada");
// names2.push("Miroslava");
//
// names2.pop();
// names2.unshift("Miroslava", "Miroslava");
//
// names2.shift();
//
// names.slice(1, 4);
// console.log(names);
// console.log(names2);
// let deleted = names.splice(2, 1);
// names.splice(1, 0, "Bohdan");
// names.splice(0, 1, "Mariia", "Ksu");
//
// console.log(deleted);
// console.log(names);
//
// function register(name) {
//     if (name.trim().length === 0) {
//         alert("Please enter a name");
//         return;
//     }
//     let duplicate = false;
//     for (let i = 0; i < names.length; i++) {
//         if (names[i] === name) {
//             duplicate = true;
//         }
//     }
//     if (duplicate) {
//         alert(`Таке ім'я вже є ${name}`);
//         return;
//     }
//     names.push(name);
//     alert(`Учасник ${name} доданий`)
// }
//
// function deleted(name) {
//     let index = -1;
//     for (let i = 1; i < names.length; i++) {
//         if (names[i] === name) {
//             index = i;
//             break;
//         }
//     }
//     if (index === -1) {
//         alert("Такого учасника немає")
//     }
//     else {
//         names.splice(index, 1);
//         alert(`Учаник з іменем ${name} видалений`)
//     }
// }
//
// function count() {
//     alert(`Кількість учасників ${names.length}`);
// }
// names = ["Ivan", "Mark", "Miroslava", "Oleksandra", "Emiliia"];
//
// register("Mykyta");
// register("Ivan");
// register("   ");
// deleted("Ivan");
// deleted("Mykyta");
// count();

names = ["Ivan", "Mark", "Miroslava", "Oleksandra", "Emiliia"];
// for (let i =0; i < names.length; i++) {
//     console.log(names[i]);
// }

// for (let name of names) {
//     console.log(name);
// }

// names.forEach(function(name, index) {
//     console.log(name, index);
// })

//_________________________________________
let queue = ["Микита", "Олександра", "Влад", "Іван"];

queue.push("Влад");
console.log(queue);

queue.unshift("Аліса");
console.log(queue);

let deleted = queue.pop();
console.log(`Видалено ${deleted}`);

queue.splice(2, 1, "Мирослава");
console.log(queue);

for (let i = 0; i < queue.length; i++) {
    console.log(`${i + 1}. ${queue[i]}`);
}

for (let name of queue) {
    console.log(name);
}

queue.forEach(function(name) {
    console.log(`${name}: ${name.length}`);
});
//_____________________________________________--

//_____________________________________
const prices = [120, 250, 180, 300, 150, 400];

let sum = 0;
let count = 0;

for (let i = 0; i < prices.length; i++) {
    sum += prices[i];

    if (prices[i] >= 200) {
        count++;
    }
}

let avg = sum / prices.length

console.log("Сума:", sum);
console.log("Кількість більше 200:", count);
console.log("Середня ціна:", avg);


sum = 0;
count = 0;

for (let price of prices) {
    sum += price;

    if (price >= 200) {
        count++;
    }
}

console.log("Сума:", sum);
console.log("Кількість більше 200:", count);