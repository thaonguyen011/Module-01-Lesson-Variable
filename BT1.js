// Bài 1: Điểm trung bình
let inputPhysics = prompt("Enter Physics grade:");
let inputChemistry = prompt("Enter Chemistry score:");
let inputBiology = prompt("Enter Biology score:");
let Average = (Number(inputPhysics)+ Number(inputChemistry)+ Number(inputBiology))/3;
document.write("Bai1_Average is: " + Average);
document.write("<br/>");

//Bài 2: Chuyển độ C thành độ F
let inputCelsius = prompt(` 'Enter Celsius: ' "`);
let fahrenheit = 9*(Number(inputCelsius))/5 + 32;
document.write("Bai2_Fahrenhetit is: " + fahrenheit);
document.write("<br/>");

// Bài 3: Diện tích hình tròn
let inputRadius = prompt("Enter radius:");
let radius = Number(inputRadius);
const PI = 3.14;
let area= radius * radius * PI;
document.write("Bai3_Area is: " + area);
document.write("<br/>");

// //Bài 4: Chu vi hình tròn
let inputRadius2 = prompt("Enter radius2:" );
let perimeter = Number(inputRadius2)*2*PI;
document.write("Bai4_Perimeter is: " + perimeter);
