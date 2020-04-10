//Bài 1:
// let userInput1 = prompt("nhap vao so n bat ky");
// const n = Number(userInput1);
// let result1=0;
// for(let i=0; i<=n; i=i+2){
//     result1=result1+i;
// }
// console.log(result1);
// let result2=0;
// for(let i=1; i<=n; i=i+2){
//     result2=result2+i;
// }
// console.log(result2);
// let result3=0;
// for(let i=1; i<=n; i=i+1){
//     result3=result3+1/i;
// }
// console.log(result3);
// let result4=0;
// for(let i=2; i<=n; i=i+1){
//     result4=result4+1/(i*(i-1));
// }
// console.log(result4);
// let result5=0;
// for(let i=1; i<=n; i=i+1){
//     result5=result5+i/(i+1);
// }
// console.log(result5);


//Bài 2
// let userInput1 = prompt("nhap vao so n bat ky");
// const n = Number(userInput1);
// let loop = true;
// if(n<2){
//     loop = false;
// }else if(n===2){
//     loop = true;
// }else if(n>2){
//     for(let i=3; i<n; i=i+1){
//         if(n%i==0){
//             loop = false;
//             break;
//         }
//     }
// }
// if(loop==false){
//     console.log("n khong phai la so nguyen to");
// }else if(loop==true){
//     console.log("n la so nguyen to");
// }

//Bài 3
// let userInput1 = prompt("nhap vao so n bat ky lon hon 2");
// const n = Number(userInput1);
// let a=3;
// let loop = true;
// console.log(2);
// while(a<n){
//     for(let i=2; i<a; i=i+1){
//         if(a%i==0){
//             loop = false;
//             break;
//         }else{
//             loop = true;
//         }
//     }
//     if(loop==true){
//         console.log(a);
//     }
//     a=a+1;
// }

//Bài 4
// let userInput1 = prompt("nhap vao so n bat ky");
// const n = Number(userInput1);
// let fib = [];
// let tempt;
// fib[0]=0;
// fib[1]=1;
// for(let i=2; i<=n; i=i+1){
//     fib[i]=fib[i-2]+fib[i-1];
//     tempt=fib[i];
// }
// console.log(tempt);

//Bài 5
// let loop=true;
// let tong=[];
// let i=0;
// let result=0;
// while(loop){
//     let a = Number(prompt("nhap vao so bat ky"));
//     if(a<0){
//         console.log(a)
//         loop=false;
//         break;
//     }else if(a>=0){
//         result=result + a;
//         }
//     }
// }

//Bài 6
// let loop=true;
// let userInput1 = prompt("nhap vao doan bat ky");
// for(let i=0; i<(userInput1.length/2); i=i+1){
//     if(userInput1[userInput1.length-1-i]==userInput1[i]){
//     }else{
//         loop=false;
//         console.log('false');
//         break;
//     }
// }
// if(loop==true){
//     console.log('true');
// }

//Bài 7
// let M = Number(prompt('Enter M: '));
// let N = Number(prompt('Enter N: '));
// let row = '';

// for (let i = 0; i < M; i++) {
//     for (let j = 0; j < N; j++) {
//         row += '*';
//     }
//     document.write(`${row}<br>`);
//     console.log(row);
//     row = '';
// }

//Bài 8
// let userInput1 = prompt("nhap vao tong so con");
// let a = Number(userInput1);
// let userInput2 = prompt("nhap vao so chan");
// let b = Number(userInput2);
// let cho=(b-a*2)/2;
// let ga=a-cho;
// console.log(cho);
// console.log(ga);



