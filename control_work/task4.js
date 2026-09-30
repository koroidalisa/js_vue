let totalCars = 0;
let electroCars = 0;
let totalCost = 0;
let maxCost = 0;

for (let i = 0; i < 7; i++) {
    let hours = +prompt(`Enter hours for car #${i + 1}:`);

    if (hours === 0) {
        break;
    }
    if (hours < 0 || hours > 12) {
        continue;
    }

    let carType = +prompt(`Enter car #${i + 1} type: 1 - regular, 2 - electric`);

    let price = 0;
    if (carType === 1) {
        price = 40;
    }
    else if (carType === 2) {
        price = 30;
        electroCars++;
    }
    else {
        alert("Error: wrong car type");
        continue;
    }

    let cost = hours * price;

    if (hours > 5) {
        cost *= 0.8;
    }

    totalCars++;
    totalCost += cost;

    if (cost > maxCost) {
        maxCost = cost;
    }
}

alert(`Total cars: ${totalCars}, electro cars count: ${electroCars}, total cost: ${totalCost}, max cost: ${maxCost}`);