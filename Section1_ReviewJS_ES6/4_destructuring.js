const students = [
    {
        "id": 1,
        "name": "Nguyen Tuan Anh",
        "age": 30
    },
    {
        "id": 2,
        "name": "Pham Hoang Nguyen",
        "age": 25
    },
    {
        "id": 3,
        "name": "Tran Hong Hanh",
        "age": 21
    }
];

for (let { name, age } of students) {
    console.log(`Name: ${name} - Age: ${age}`);
}