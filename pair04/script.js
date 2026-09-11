// for (let i = 1; i<=10; i++) {
//     console.log(i);
// }
//
// for (let i = 1; i<=10; i+=2) {
//     console.log(i);
// }

// for (let i = 20; i>=0; i--) {
//     console.log(i);
// }
// let count = 0
// for (let i = 20; i>=0; i--) {
//     count += i;
//     console.log(count);
// }

// let sum = 0;
// for(let i = 0; i <= 50; i++){
//     if(i%2 === 0){
//         sum += i
//     }
// }
// console.log(sum);

//_____________________#1
// let sum = 0;
// for (let i = 0; i <= 100; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log(i)
//     }
// }

//_____________________#2
// for(let i = 0; i <= 100; i++) {
//     if (i > 25 && i% 4 === 0 && i% 6 === 0) {
//         console.log(i)
//         break
//     }
// }

// for(let i = 1; i <= 30; i++){
//     if (i%5 === 0){
//         continue;
//     }
//     console.log(i);
// }

// let student = +prompt("How many students?");
// let sum = 0, goodGrade = 0, badGrade = 0, maxGrade = 1, minGrade = 12;
// for(let i = 0; i <= student; i++) {
//     let grade = +prompt("What grade has student #" + i);
//     if (!(grade >= 1 && grade<=12)){
//         alert("Please enter a valid number");
//         i--;
//         continue;
//     }
//
//     sum += grade;
//     if(i>=7){
//         goodGrade ++;
//     }
//     else{
//         badGrade ++;
//     }
//     if (grade > maxGrade){
//         maxGrade = grade;
//     }
//     if (grade < minGrade){
//         minGrade = grade;
//     }
//
// }
// console.log(sum);
// console.log(goodGrade);
// console.log(badGrade);
let avarage, firsthundred;
let student = +prompt("How many students?");
let sum = 0, excellentGrade = 0, goodGrade = 0, badGrade = 0, maxGrade = 1, minGrade = 100;
for(let i = 1; i <= student; i++) {
    let grade = +prompt("What grade has student #" + i);
    if (!(grade > 0 && grade<=100)){
        alert("Please enter a valid number");
        i--;
        continue;
    }

    sum += grade;

    if(grade>=90){
        excellentGrade ++;
    }
    else if(grade>90 && grade>=60){
        goodGrade ++;
    }
    else{
        badGrade ++;
    }
    if (grade > maxGrade){
        maxGrade = grade;
    }
    if (grade < minGrade){
        minGrade = grade;
    }
    if (grade === 100){
        firsthundred=i
    }

}
avarage= sum / student;
console.log(avarage);

console.log(firsthundred);
console.log(excellentGrade);

console.log(goodGrade);
console.log(badGrade);