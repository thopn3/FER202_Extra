// Cac kieu du lieu cua JS: String, Number, Date, Array, Object
// Co khong gian su dung trong pham vi (block-scope) ma no dc khai bao
// Vi du: { block scope }
let x = 10; // x: Number
const PI = 3.14; // PI: constant - Hang so

// Thao tac voi bien
x = 20;
// PI = 3.15; // Loi: Do PI la 1 hang so -> Khong thay doi dc gia tri

console.log("x = " + x);
console.log("PI = " + PI);

// Khai bao mang
const scores = [5, 6.5];
// Them phan tu vao mang
scores.push(10);
scores.push(8.5);
scores.push("bay");
scores.push(true);
// In mang scores
console.log(scores);

// Khai bao doi tuong
const student = {fName: "Tho", lName: "Pham Ngoc"}; // Anonymous object
console.log(student);
console.log("First name: "+ student.fName);
console.log("Last name: "+ student.lName);