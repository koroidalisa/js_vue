// let num = 1;
// while(num<=5){
//     console.log(num);
//     num ++;
// }

// let userNumber = prompt("Enter your number")
// while (userNumber < 1 || userNumber >= 10) {
//     userNumber = prompt("Error. Enter your number")
//     console.log('error')
// }

// console.log(Number("7"))
// console.log(Number("hello"))

// let age = +prompt('Enter your age');
// while(Number.isNaN(age || age<0 || age>=100)){
//     age = +prompt('Error. Enter your age');
// }
// console.log(age);

// const correctPin = 1234;
// let userPin = +prompt("Enter a valid pin");
// let attempts = 1
// while(correcrtPin !== userPin && attempts < 3){
//     userPin = +prompt("Error. Enter a valid pin");
//     attempts++;
// }
// if (userPin === correctPin){
//     console.log("WELCOME!");
// }
// else{
//     console.log("Blocked");
// }

// const correctPin = 1234
// let attempts = 1
// while (attempts <= 3){
//     let userPin = +prompt("Enter a valid pin");
//     if (userPin === correctPin){
//         console.log("WELCOME!");
//         break;
//     }
//     console.log('error pin');
//     attempts++;
//
// }

// let menuChoice;
//
// do{
//     menuChoice = prompt(`What is your choice?\n
//     1 = profile\n
//     2 = settings\n
//     3 = statistics\n
//     0 = exit`);
//     if (menuChoice === 1){
//         console.log("You clicked the menu");
//     }
//     else if (menuChoice === 2){
//         console.log("You clicked the settings");
//     }
//     else if (menuChoice === 3){
//         console.log("You clicked the statistics");
//     }
//     else if (menuChoice === 0){
//         console.log("Exit");
//     }
//     else{
//         console.log("We don't know what you clicked");
//     }
//
// } while(menuChoice !== "0");

//let menuChoice;
// do {
//     menuChoice = prompt(`What is your choice?\n
//     1 = profile\n
//     2 = settings\n
//     3 = statistics\n
//     0 = exit`);
//     switch (menuChoice) {
//         case 1:
//             console.log("You clicked the menu");
//             break;
//         case 2:
//             console.log("You clicked the settings");
//             break;
//         case 3:
//             console.log("You clicked the statistics");
//             break;
//         case 0:
//             console.log("Exit");
//             break;
//         default:
//             console.log("We don't know what you clicked");
//             break;
//     }
// } while (menuChoice !== "0");

// let count = 0;
// let sum = 0;
// while (count <5){
//     let grade = +prompt(`Enter your grade # ${count+1}`);
//     if(Number.isNaN(grade) || grade>1 || grade>12){
//         alert("Please enter your grade once more");
//         continue;
//     }
//     sum += grade;
//     count++;
//
// }
// console.log(sum);
// console.log(sum/5);


// let questionNumber = 1, score = 0;
// while(questionNumber <= 5) {
//     let questions = '', correctAnswer = '';
//     switch (questionNumber) {
//         case 1:
//             questions = "/////(write let)";
//             correctAnswer = 'let';
//             break;
//             case 2:
//                 questions = "///(write &&)";
//                 correctAnswer = '&&';
//                 break;
//                 case 3:
//                     questions = "///(write ||)";
//                     correctAnswer = '||';
//                     break;
//                     case 4:
//                         questions = "///(write break)";
//                         correctAnswer = 'break';
//                         break;
//                         case 5:
//                             questions = "///(write ===)";
//                             correctAnswer = '===';
//                             break;
//     }
//     let answer = prompt(`Question #${questionNumber} from 5\n
//     ${questions}`);
//     if (answer === "") {
//         alert(`you have to answer`);
//         continue
//     }
//     if (answer === correctAnswer) {
//         score++;
//         alert("You're right!!")
//     }
//     else{
//         alert("you're not right...")
//     }
//     questionNumber++;
// }
// if (score === 5){
//     console.log(`You're amazing!`);
// }
// else if (score >=3) {
//     console.log(`It's okay`);
// }
// else {
//     console.log(`You need to study more`);
// }


//___________________________________________


let age = +prompt("Enter your age:");
while (Number.isNaN(age) || age < 12 || age > 90) {
    age = +prompt("Error. Enter your age (12-90):");
}
const correctPassword = 4321;
let password = +prompt("Enter a valid password:");
let attempt = 1;

while (password !== correctPassword && attempt < 3) {
    password = +prompt("Enter a valid password:");
    attempt++;
}

if (password === correctPassword) {
    console.log("Access allowed");
    let menuChoice;
    do {
        menuChoice = prompt(`What is your choice?\n
    1 = profile\n
    2 = settings\n
    3 = statistics\n
    0 = exit`);
        switch (menuChoice) {
            case 1:
                console.log("You clicked the menu");
                break;
            case 2:
                console.log("You clicked the settings");
                break;
            case 3:
                console.log("You clicked the statistics");
                break;
            case 0:
                console.log("Exit");
                break;
            default:
                console.log("We don't know what you clicked");
                break;
        }
    } while (menuChoice !== "0");
}
else {
    console.log("You're not logged in!");
}