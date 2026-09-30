let sum = 0;
let bigGrade = 0;
let smallGrade = 0;

biggestGrade = 1;
let student = +prompt("How many students you have?")
while(student < 1 || isNaN(student)) {
    student = +prompt('Enter your number');
}


for (i = 0; i < student; i++) {
    grade = +prompt(`Enter student #${i+1} grade`);
    while(grade < 1 || grade >12 || isNaN(grade)) {
        grade = +prompt(`Error. Enter student #${i+1} grade`)
    }
    if (grade>7){
        bigGrade++;
    }
    else{
        smallGrade++;
    }
    if (grade>biggestGrade){
        biggestGrade = grade
    }
    sum += grade;
}
alert(`Sum: ${sum}, avarage: ${sum/student}, bigGrade: ${bigGrade}, smallGrade: ${smallGrade}, biggestGrade: ${biggestGrade}`);