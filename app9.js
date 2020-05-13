//Bài 1
// let input = prompt("Nhap vao mot day so, cach nhau boi dau ','");
// let arr = input.split(",");
// for(i=0; i<arr.length; i++){
//     arr[i] = Number(arr[i]);
// }
// let maximum = arr[0];
// for (i=0; i<arr.length-1; i++){
//     if (maximum < arr[i+1]){
//         maximum = arr[i+1];
//     }
// }
// let index = arr.indexOf(maximum); 
// arr.splice(index, 1);
// let arr1 = arr;
// let maximum1 = arr1[0];
// for (i=0; i<arr1.length-1; i++){
//     if (maximum1 < arr1[i+1]){
//         maximum1 = arr1[i+1];
//     }
// }
// console.log("Sô lớn thứ 2 trong dãy là " + maximum1);

//Bài 2
// let input = prompt("Nhap vao mot day so, cach nhau boi dau ','");
// let arr = input.split(",");
// for(i=0; i<arr.length; i++){
//     arr[i] = Number(arr[i]);
// }
// let minimum = arr[0];
// for (i=0; i<arr.length-1; i++){
//     if (minimum > arr[i+1]){
//         minimum = arr[i+1];
//     }
// }
// let index = arr.indexOf(minimum); 
// arr.splice(index, 1);
// let arr1 = arr;
// let minimum1 = arr1[0];
// for (i=0; i<arr1.length-1; i++){
//     if (minimum1 > arr1[i+1]){
//         minimum1 = arr1[i+1];
//     }
// }
// console.log("Sô nhỏ thứ 2 trong dãy là " + minimum1);

//Bài 3
// let input = prompt("Nhap vao mot day so, cach nhau boi dau ','");
// let arr = input.split(",");
// console.log(arr);
// let arr2 = [];
// let result = true;
// for(i=0; i<arr.length; i++){
//     for(j=0; j<(arr[i].length)/2; j++){
//         if (arr[i][j] != arr[i][arr[i].length - 1 - j]){
//             result = false;
//             break
//         }
//     }if (result == true){
//         arr2.push(i)
//     }
//     result = true;
// }
// console.log("Các tập đối xứng ở vị trí " + arr2 );


//Bài 4
input = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9]
];
console.log(input);
for(i=0; i<input.length; i++){
    console.log(input[i]);
}
for(i=0; i<input.length; i++){
    let tonghang = 0;
    for(j=0; j< input[i].length; j++){
        tonghang = tonghang + input[i][j];
    }console.log(`Tong hang ${i+1} la \n` + tonghang);
}
for(i=0; i<input.length; i++){
    let tongcot = 0;
    for(j=0; j< input[i].length; j++){
        tongcot = tongcot + input[j][i];
    }
console.log(`Tong cot ${i+1} la \n` + tongcot);
}
arr1 = []
arr2 = []
for(i=0; i<input.length; i++){
    for(j=0; j< input[i].length; j++){    
        if (i===j){
            arr1.push(input[i][j])
        }
    }
    for(j=0; j< input[i].length; j++){    
        if (i===(input[i].length-1-j)){
            arr2.push(input[i][j])
        }
    }
}console.log(arr1);
console.log(arr2);
console.log(arr1.reduce((a,b)=>a+b,0) + arr2.reduce((a,b)=>a+b,0) );




