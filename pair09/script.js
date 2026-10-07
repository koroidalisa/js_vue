// let price = [12, 5, 7.8, 'my']
// const price2 = [12, 2, 7.8, 'my']
//
// console.log(price2[2])
//
// price2[2] = 30
//
// console.log(price2)
//
// console.log(price.length)
// for (let i = 0; i < price.length; i++) {
//     console.log(price[i])
// }

// let suma = 0
// for (let i = 0; i < price.length; i++) {
//     suma += price[i]
//     if (price[i] % 2 ===0){
//         console.log(price[i])
//     }
// }
// console.log(suma)

// function countLimit(prices, limit){
//     let count = 0;
//     for (let i = 0; i < prices.length; i++) {
//         if(prices[i] > limit){
//             count++;
//         }
//     }
//     return count;
// }
//
// let prices = [5, 145, 30, 100, 55]
// let limit = 50
// console.log(countLimit(prices, limit))
///////////////////////////////////////////////////////////


// function avarage(prices){
//     let suma =0
//     for (let i = 0; i < prices.length; i++) {
//     suma += prices[i]
//     }
//     av = suma/prices.length
//     return av
// }
//
// let prices = [5, 145, 30, 100, 55]
// console.log(avarage(prices))

/////////////////////////////////////////////////////////////
function suma() {
    let count = +prompt("How many numbers do you want?");
    let sum = 0;
    for (let i = 0; i < count; i++) {
        let num = +prompt(`Enter number # ${i + 1}: `);
        sum += num;
    }
    return sum;
}

console.log(suma());