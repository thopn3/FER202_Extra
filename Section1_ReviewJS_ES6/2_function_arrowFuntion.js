function getName(fullname){
    console.log("Fullname is: " + fullname);
}

function getInformation(name, age){
    return "Name: " + name + ", Age: "+ age
}

// Goi ham
getName("Pham Ngoc Tho");
console.log(getInformation("Chau", 7));

// Ham mui ten - Su dung cu pham Lamda Expression
const cong = (num1, num2) => { // Ham an (khong co ten) - Anonymous function
    
    return num1 + num2;
}

console.log("10 + 20 = "+cong(10,20));
console.log("10 + 20 = "+cong(10,"20"));

const cong1 = (num1, num2) => num1 + num2;
console.log("5 + 10 = " + cong1(5, 10));

