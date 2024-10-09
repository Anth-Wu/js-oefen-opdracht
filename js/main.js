let myName = "Anthony"
let myAge = 17
let mySchool = "ROC Mondriaan"
let myCourse = "Software Developer"
let myClass = "B1J"
let myTeacher = "Mr. de Lange"

function showDetails(){
    console.log("Hallo Wereld!" + " Ik ben " + myName +" en ik ben " + myAge +" jaar oud.")

}
//showDetails()

function showSchoolDetails(){
    console.log("Ik volg de opleiding " + myCourse + " op " + mySchool +". "+ "Ik zit in de klas " + myClass + " en mijn docent is " + myTeacher +".")
}
//showSchoolDetails()

function showFullDescription(){
    showDetails();
    showSchoolDetails();

}
showFullDescription()

function Add(a, b){
    return a + b;
}

function Subtract (a, b){
    return a - b;
}
function Multiply(a, b){
    return a * b;
}
function Divide(a, b){
    return a / b;
}

console.log(Add(3, 5));
console.log(Subtract(7, 2));
console.log(Divide(20, 5));
console.log(Multiply(8, 4));
console.log(Add(19, 42));
console.log(Divide(18, 3));
console.log(Subtract(17, 7));
console.log(Add(18, 22));
console.log(Multiply(Divide(Multiply(Add(18, 22), Subtract(19, 2)), 34), 3));