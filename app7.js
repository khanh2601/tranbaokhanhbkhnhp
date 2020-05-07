//Bai 1
// let a = 5;
// let b = 6;
// console.log(a, b);
//Cach 1
// [a, b] = [b,a]
// console.log(a, b);
//Cach 2
// a = a + b
// b = a - b
// a = a - b
// console.log(a, b);

//Bai 2
// let s = "Hello beauty there";
// let a = Array(s);
// console.log(a);
// console.log(s);

// let b = s.split(" ");
// let c = Array(b);
// console.log(c);

//Bai 3
// const a = [4, 5, 7, -8];
// console.log(...a);

//Bai 4
// const shop = ["Jeans", "T-shirt", "Socks"];
// let loop = true;
// while (loop){
//     console.log("The current items are: ");
//     let input1 = prompt("Hi, welcome to shop admin panel, what do you want (C, R, U, D)").toLowerCase();
//     if (input1 === "r"){
//         for (i=0; i <= shop.length-1; i++){
//             let a = i+1 + "." + " " + shop[i];
//             console.log(a);
//         }
//     }else if (input1 === "c"){
//         let input2 = prompt("Nhap vao item moi");
//         shop.push(input2);
//         for (i=0; i <= shop.length-1; i++){
//             let a = i+1 + "." + " " + shop[i];
//             console.log(a);
//         }
//     }else if (input1 === 'u'){   
//         let x = prompt ("Muon update phan tu bao nhieu");
//         let input3 = prompt("Nhap vao todo list muon update");
//         shop[x-1] = input3;
//         for (i=0; i <= shop.length-1; i++){
//             let a = i+1 + "." + " " + shop[i];
//             console.log(a);
//         }
//     }else if(input1 === 'd'){
//         let y = prompt ("Muon xoa phan tu bao nhieu");
//         y = Number (y);
//         shop.splice(y-1,1);
//         for (i=0; i <= shop.length-1; i++){
//             let a = i+1 + "." + " " + shop[i];
//             console.log(a);
//         }
//     }else if(input1 === 'e'){
//         loop=false;
//     }
// }

////Bai 5+6+7
// let input1 = prompt("Nhập vào dãy số");
// let arr = input1.split(",");
// for (let i = 0; i < arr.length; i++) {
//   arr[i]= Number(arr[i]);
// }
// console.log(arr);
// alert(arr)
//Bai 5
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//     sum= sum + arr[i];
//   }
// alert(`The sum of them is ${sum}`);
//Bai 6
// let sonhonhat = arr[0];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i]<arr[i+1]){
//         arr[i] = arr[i+1];
//     }else {
//     }
//   }
// alert(`The smallest number is ${sonhonhat}`);
//Bai 7
// let input1 = prompt("Nhập vào dãy số");
// let arr = input1.split(",");
// for (let i = 0; i < arr.length; i++) {
//   arr[i]= Number(arr[i]);
// }
// console.log(arr);
// alert(arr)
// let input2 = prompt("Nhập vào một số");
// let a = 0;
// if (input1.includes(input2)){
//     for (let i=0; i < arr.length; i++){
//         if (input2 === arr[i]){
//             a = i;
//         }else{
//         }
//     }
//     alert(`${input2} is FOUND in my array at index ${a}`);
// }else{
//     alert(`${input2} is not FOUND in my array`)
// }

//Bai8
let input = prompt("Hello, my name is Phuong Nam and here is my sheep sizes:");
let arr = input.split(" ");
let arr1 = [];
for(let i=0; i<arr.length; i++){
    arr1.push(Number(arr[i]));
}
console.log("Hello, my name is Phuong Nam and here is my sheep sizes:\n" + arr1);
console.log('Now my biggest sheep has size ' + Math.max(...arr1) + ', Let shave it');
let big = Math.max(...arr1);
arr1[arr1.indexOf(big)] = 10;
console.log(arr1);


//Bai 9

//Bai 10
// let input1 = prompt("Enter sequence of name");
// let arr = input1.split(",");
// let arr1 = []
// for (let i=0; i < arr.length; i++){
//     let input2 = "<" + arr[i] + ">";
//     arr1.push(input2);
// }
// console.log(arr1);
// alert(arr + "=>" + arr1)

//Other method
// let map1 = arr.map(x => '<' + x + '>');
// console.log(map1);
// alert(arr + "=>" + map1)

//Bai 11
// let input1 = prompt("Enter sequence of number");
// let arr = input1.split(",");
// let arr1 = []
// for (let i=0; i < arr.length; i++){
//     arr[i] = Number(arr[i]);
//     if (arr[i]%2 != 0){
//         arr1.push(arr[i])
//     }else{     
//     }
// }
// console.log(arr1);
// alert(arr + "=>" + arr1)

//Other method
// let odds = arr.filter(x => x % 2 != 0)
// alert(arr + "=>" + odds)


