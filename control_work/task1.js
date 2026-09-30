let baseCost = 0;
let age = +prompt("What is your age?");
while (Number.isNaN(age) || age < 0 ) {
    age = +prompt("Error. Enter your age:");
}

let day = +prompt("Please enter: 1 - not weekend; 2 - weekend");
while (day !== 1 && day !== 2) {
    alert("Помилка: неправильний тип дня");
}
if (day === 1){
    baseCost = 200;
}
else if (day === 2){
    baseCost = 250;
}

if (age <= 7){
    baseCost = 0
}
else if(age >= 8 && age <= 17){
    baseCost *= 0.5;
}
else if (age >= 60){
    baseCost *= 0.6;
}
alert(baseCost);