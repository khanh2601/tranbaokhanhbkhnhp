// Array = List

// let mon1 = 'Com';
// let mon2 = 'Bun';
// let mon3 = 'Pho';

// index, value, length
// let menu = ['com', 'bun', 'pho', 'my'];

// for (i=0; i< menu.length; i++){
//     console.log(menu[i]);
// }


// Địa chỉ liên quan array và object
// const a = [];
// const b = [];
// console.log(a === b);

// const books = ['random 1', 'random 2', 'random 3'];
// //C, R, U, D - Create, Read, Update, Delete.
// //Read one => 
// console.log(books[0]);
// //Read all =>
// for (i=0; i <= books.length-1; i++){
//     console.log(books[i]);
// }
// //Update
// books[0] = 'update 1'
// console.log(books);

// //Create
// //Append Last, Append First
// books.unshift('random 0')
// console.log(books);

// books.push('random 4')
// console.log(books);

// //Delete
// //Delete Last, Delete First
// books.pop()
// console.log(books);

// books.shift()
// console.log(books);

// //Delete paticular element
// books.splice(1, 1);
// console.log(books);

// books.splice(1, 0, 'random 2');
// console.log(books);

//To do list
const todolist = ['Go to work at 8 am'];
console.log(todolist);


//Bai 1
//C: Cho nguoi dung nhap vao todolist moi va them vao cuoi cung
//R: In ra toan bo list hien co
//U: Hoi nguoi dung muon update phan tu so may
//Sau day cho nguoi dung nhap lai noi dung muon update
//D: Hoi nguoi dung muon xoa vao phan tu so may

//Sau moi CRUD in ra toan bo to do list hien co

//Bai 2
//Khi nguoi dung nhap vao E => Ket thuc chuong trinh
//Con lai cac truong hop khac van tiep tuc
// let i1 = prompt ("Nhap vao ky tu");
// if (i1 === 'C'){
//     let input1 = prompt("Nhap vao todo list moi");
//     todolist.push(input1);
//     console.log(todolist);
// }else if (i1 === 'R'){
//     console.log(todolist);
// }else if (i1 === 'U'){   
//     let x = prompt ("Muon update phan tu bao nhieu");
//     let input2 = prompt("Nhap vao todo list muon update");
//     todolist[x] = input2;
//     console.log(todolist);
// }else if(i1 === 'D'){
//     let y = prompt ("Muon xoa phan tu bao nhieu");
//     y = Number (y);
//     todolist.splice(y,1);
//     console.log(todolist);
// }

// let loop = true;
// while (loop){
//     let input3 = prompt ("Nhap vao ky tu");
//     if (input3 === 'E'){
//         loop = false;
//         break;
//     }else{
//         let input1 = prompt("Nhap vao todo list moi");
//         todolist.push(input1);
//         console.log(todolist);

//         let x = prompt ("Muon update phan tu bao nhieu");
//         let input2 = prompt("Nhap vao todo list muon update");
//         todolist[x] = input2;
//         console.log(todolist);

//         let y = prompt ("Muon xoa phan tu bao nhieu");
//         y = Number (y);
//         todolist.splice(y,1);
//         console.log(todolist);
//     }
// }

let loop = true;
while (loop){
    let input3 = prompt("Nhap vao ky tu tiep tuc hoac huy chuong trinh").toLowerCase();
    if (input3 === 'e'){
        loop=false;
    }else{
        let i1 = prompt("Nhap vao ky tu chay chuong trinh").toLowerCase();
        if (i1 === 'c'){
            let input1 = prompt("Nhap vao todo list moi");
            todolist.push(input1);
            console.log(todolist);
        }else if (i1 === 'r'){
            console.log(todolist);
        }else if (i1 === 'u'){   
            let x = prompt ("Muon update phan tu bao nhieu");
            let input2 = prompt("Nhap vao todo list muon update");
            todolist[x] = input2;
            console.log(todolist);
        }else if(i1 === 'd'){
            let y = prompt ("Muon xoa phan tu bao nhieu");
            y = Number (y);
            todolist.splice(y,1);
            console.log(todolist);
        }
    }
}