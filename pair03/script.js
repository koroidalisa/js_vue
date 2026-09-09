// let age = Number('Enter your age');
// let registration = confirm('are you registrated');
// if (registration === true && age >= 18) {
//     alert("Dostup dozvoleno")
// }
// else{
//     alert("Dostup ne dozvoleno")
// }

// let accessLevel = prompt("What is your access level?");
// if (accessLevel === 'admin' || accessLevel === 'teacher') {
//     alert('Welcome admin!')
//
// }
// else{
//     alert("no.")
// }

// let registration = confirm('are you registrated');
// if (registration === true) {
//     let age = Number('Enter your age');
//     if (age >= 18) {
//         alert("You in")
//     }
//     else{
//         alert("You not in")
//     }
// }
// else{
//     alert("You not in")
// }





// 90-100 відмінно 89-70 - добре 60-69 - задовільно, 0-60 незадовільно
// let grade = +prompt('Enter your grade');
// if (grade >= 90) {
//     alert("Відмінно")
//
//
// }
// else if (grade >= 70) {
//     alert("добре")
// }
// else if (grade >= 60) {
//     alert("задовільно")
// }
// else{
//     alert("незадовільно")
// }


// //ролі доступу - teacher student
// let role = prompt("What is your role?");
// let sub, block
// if (role === "teacher") {
//     block = confirm("Are you blocked?");
//     if (block) {
//         alert("You're not in.");
//     }
//     else{
//         alert("Welcome teacher")
//     }
// }
// else if (role === "student") {
//     block = confirm("Are you blocked?");
//     if (block) {
//         alert("You're not in.");
//
//     }
//     else{
//         sub = prompt("Do you have sub?");
//         if (!sub) {
//             alert("You have demo version.");
//         }
//         else{
//             alert("Welcome student")
//         }
//
//     }
// }
// else{
//     alert("You are not in")
// }

//назва, кількість, вартість
//знижка при - користувач зареєстрованй, сума покупки 1000 і більше і у користувача є промокод(sale) або віп статус
const sale = 'sale'
const discount = 0.1
let name = prompt("What is product name");
let number = +prompt("How many products?");
let price = +prompt("What price?");
let all = namber * price;
let register = confirm("Ar you registrated?");
if (register === true && all>= 1000 && (prompt("Enter promocode") === sale || confirm("Are you a vip")) ) {
    alert("You have a discount" + (all-(all*discount)))

}
else{
    alert('her is the price' + all)
}
