const right = 2026;
let i = 1;

while(i<=3){
    let pin = +prompt("Pin: ")
    if(pin === right){
        alert("Доступ дозволено");
        break;
    }

    alert(`You have ${3-i} pins left`);
    i++;
}