let students = [
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

// 1. In danh sách các studentd theo cau truc bang - R
console.table(students);

// 2. Thêm 1 đối tượng student vào mảng students - C
const newStudent = {"id": 4, "name": "Tien Giang", "age": 24};
students.push(newStudent);
console.table(students);

// 3. Loại bỏ 1 đối tượng từ mảng - D
// Loại phần tử cuối cùng
// students.pop();

// Loại phần tử đầu tiên
// students.shift();

// Loai bo 1 student co id = 3 cho truoc
    // C1: Lọc ra các student có id khác với id của sinh viên cần loại bỏ
    // let filterResult = students?.filter(s => s.id != 3);
    // console.table(filterResult);

    // C2: Tìm ra student có id = 2 và loại bỏ chính nó và student kế tiếp
    students?.map(s => {
        if(s.id == 2){
            let index = students.indexOf(s);
            students.splice(index, 2);
        }
    });
    console.table(students);

// 4. Sửa thông tin cua student - U

// 5. Tìm 1 student theo ten hoac tuoi - R

// 6. Sap xep danh sach students tang dan theo name (hoac ket hop) - R
