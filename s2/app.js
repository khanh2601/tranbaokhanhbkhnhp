console.log("Hello world");

//Câu điều kiện rẽ nhánh

// if (condition) {
//     do something
// } else {
//     do something else
// }

//kiểu dữ liệu boolean (true/ false)

// const randomBoolean = true;

//Các phép so sánh

//==, >, <..
// ===,!== (Kiểu so sánh này đánh giá cả giá trị và kiểu dữ liệu)

// const x=5;
// console.log(x > 10);
// console.log(x=== '5');

// //&& (AND), || (OR), ! (OPPOSITE)

// const x=5;
// const y =9;

// (y >9) || (x===5)

// // || cần 1 trong 2 true =>true
// x<10 && x===5
// //&& cần cả 2 đều là true

// //!(x===y)//true

// const x=10;
// const y="a";

// y === "b" || x >=10;
// // !(x == "3" || x ==y) && !(y != 8 && x<= y);

// if () {
//     // do something
// }else if (){
//     //do something
// }else{
//     //do something
// }

// cho nguoi dung nhap tuoi
// tuoi < 18:you cannot enter the bar
//
//
//

// let userInput1 = prompt("nhap vao do tuoi");
// let tuoi = userInput1;
// if (tuoi<18) {
//     console.log(`you cannot enter the bar`);
// }else if ((tuoi>18)&&(tuoi<21)){
//     console.log(`you can enter but you cannot drink`);
// }else{
//     console.log(`you can drink`);  
// }

//cho nguoi dung nhap tuoi
//tuoi < 0 => invalid age
// tuoi == 21 => happy birthday
// tuoi la so le => your age is odd
// tuoi la 1 so co the can bac 2 => perfect square

// let userInput1 = prompt("nhap vao do tuoi");
// let tuoi = Number(userInput1);
// if (tuoi<0) {
//     console.log(`invalid age`);
// }else if (tuoi===21){
//     console.log(`happy birthday`);
// }else if (tuoi%2==1){
//     console.log(`your age is odd`);
// }else if ((Math.sqrt(tuoi))%2==1||(Math.sqrt(tuoi))%2==0){
//     console.log("perfect square"); 
// }

//while loops

//while(condition){
    //hanh dong lap
//}
// let i=1;

// while (i<5){
//     console.log(i);
//     i=i+1
// }

//lap lien tiep in ra 1,2,3,4
//cho nguoi dung nhap vao mot so bat ky tu 1 den 10
//so ket qua la random 1-10
//neu input > result: too high
//neu input < result: too low
//neu input === result: correct ket thuc chuong trinh


// const resultNumber = Math.ceil(Math.random()*10);
// console.log(resultNumber);

// let loop=true;
// while (loop) {
//     const userInput1 = Number(prompt("nhap vao mot so bat ky"));
//     if(userInput1 < resultNumber){
//         console.log(`too low`);
//     }else if (userInput1 > resultNumber){
//         console.log(`too high`);
//     }else {
//         console.log(`correct`);
//         // loop = false;
//         break;
//     }
// }
// function randomNumber(min, max) {  
//     min = Math.ceil(min); 
//     max = Math.floor(max); 
//     return Math.floor(Math.random() * (max - min + 1)) + min; 
// }    
// document.write("Random Number between 1 and 10: ")  
// document.write( randomNumber(1, 10) );  

//sử dụng vòng lặp while
//1. in ra màn hình từ 1-10
//2. in ra các số chia hết cho 4 từ 0-20
//3. in ra các số lẻ từ 30-40
//4. in ra các số chia hết cho 3 vừa chia hết cho 5 từ 5-50

// let i=1
// while (i<=10){
//     console.log(i);
//     i=i+1
// }
// let i=0
// while (i<=20){
//     if (i%4==0)
//     console.log(i);
//     i=i+1
// }
// let i=30
// while (i<=40){
//     if (i%2==1)
//     console.log(i);
//     i=i+1
// }
// let i=5
// while (i<=50){
//     if (i%3==0&&i%5==0){
//         console.log(i);
//     }
//     i+=1;
// }

// i=i+1 
// i+=1
// i++

// for (condition){
//     //hành động lặp
// }

//sử dụng vòng lặp for

// for(let i=1; i<=5; i++){
//     console.log(i);    
// }


// let i=1;
// while (i<=5){
//     console.log(i);
//     i++;
// }

//nhớ hỏi let ở for liên quan while

//Sử dụng vòng lặp for tính tổng từ 1-10
//in số từ 1-20 cách nhau 3 đơn vị

// for(let i=1; i<=20; i=i+3){
//     console.log(i);    
// }
// let result = 0;
// for(let i=1; i<=10; i=i+1){
//      result = result + i;   
// }
// console.log(result);

// let userInput1 = prompt("nhap vao can nang theo kg");
// let weight = Number(userInput1);
// console.log(weight);
// let userInput2 = prompt("nhap vao chieu cao theo m");
// let height = Number(userInput2);
// console.log(height);
// let bmi=weight/(height*height);
// let bmi1=`chi so bmi la ` + bmi;
// console.log(bmi1);

// if (bmi<16){
//     console.log("Severely underweight");
// }else if(16<=bmi&&bmi<18.5){
//     console.log("Underweigh");
// }else if(18.5<=bmi&&bmi<25){
//     console.log("Normal");
// }else if(25<=bmi&&bmi<30){
//     console.log("Overweight");
// }else if(30<=bmi){
//     console.log("Obese");
// }


// let userInput1 = prompt("nhap vao so n");
// let n = Number(userInput1);
// console.log(n);
// let result = 1;
// for(let i=1; i<=n; i=i+1){
//      result = result * i;   
// }
// let result1= `tich so tu 1 den n la ` + result;
// console.log(result1);

//Bài 1
// let userInput1 = prompt("nhap vao so bat ky");
// const n = Number(userInput1);
// console.log(n);
// if (n<0){
//     console.log("invalid input");
// }else if (n===0){
//     console.log(n);
// }else {
//     let result = 1;
//     for(let i=1; i<=n; i++){
//         result = result *i;
//     }
//     console.log(result);  
// }

//Bài 2
// let userInput1 = prompt("nhap ten cua ban")
// console.log(userInput1);
// let userInput2 = prompt("nhap tuoi cua ban")
// const n=Number(userInput2)
// console.log(n);
// if (n<18){
//     console.log("ban chua du tuoi vao web");    
// }else{
//     let userInput3 = prompt(userInput1 +' '+'co muon dang nhap web khong')
//     if (userInput3 === 'yes'){
//         let hienthi1= userInput1+' '+`ban da truy cap thanh cong`
//         console.log(hienthi1);
//     }else if(userInput3 === 'no'){
//         let hienthi2= userInput1+' '+`ban da roi khoi web`
//         console.log(hienthi2);
//     }
// }

//Bài 3
// let username2="khanh";
// let password2="1234";
// let userInput1 = prompt("nhap so username");
// console.log(userInput1);
// let userInput2 = prompt("nhap so password");
// console.log(userInput2);
// if ((userInput1==username2)&&(userInput2==password2)){
//     console.log("Dang nhap thanh cong");
// }else if(userInput1!=username2||userInput2!=password2){
//     if(userInput1 != username2){
//         console.log("username sai");
//     }else if(userInput2 != password2) {
//         console.log("password sai");  
//     }
// }

//Bài 4
// let userInput1 = Number(prompt("nhap thang sinh"));
// let userInput2 = prompt("nhap ten nguoi");
// switch(userInput1)
// {
//     case 1:{
//         let hien=userInput2 + " sinh vao mua xuan" ;
//         console.log(hien);
//         break;
//     }
//     case 2:{
//         let hien=userInput2 + " sinh vao mua xuan" ;
//         console.log(hien);
//         break;
//     }
//     case 3:{
//         let hien=userInput2 + " sinh vao mua xuan" ;
//         console.log(hien);
//         break;
//     }
//     case 4:{
//         let hien=userInput2 + " sinh vao mua he" ;
//         console.log(hien);
//         break;
//     }
//     case 5:{
//         let hien=userInput2 + " sinh vao mua he" ;
//         console.log(hien);
//         break;
//     }
//     case 6:{
//         let hien=userInput2 + " sinh vao mua he" ;
//         console.log(hien);
//         break;
//     }
//     case 7:{
//         let hien=userInput2 + " sinh vao mua thu" ;
//         console.log(hien);
//         break;
//     }
//     case 8:{
//         let hien=userInput2 + " sinh vao mua thu" ;
//         console.log(hien);
//         break;
//     }
//     case 9:{
//         let hien=userInput2 + " sinh vao mua thu" ;
//         console.log(hien);
//         break;
//     }
//     case 10:{
//         let hien=userInput2 + " sinh vao mua dong" ;
//         console.log(hien);
//         break;
//     }
//     case 11:{
//         let hien=userInput2 + " sinh vao mua dong" ;
//         console.log(hien);
//         break;
//     }
//     case 12:{
//         let hien=userInput2 + " sinh vao mua dong" ;
//         console.log(hien);
//         break
//     }
//     default:{
//         console.log("Nhap sai");
//     }
// }

//Bài 5
// console.log('a*x^2+b*x+c=0');
// let loop=true;
// while(loop){
//     let userInput1 = prompt("nhap so a");
//     let a = Number(userInput1);
//     console.log(a);
//     let userInput2 = prompt("nhap so b");
//     let b = Number(userInput2);
//     console.log(b);
//     let userInput3 = prompt("nhap so c");
//     let c = Number(userInput3);
//     console.log(c);
//     let delta=b*b-4*a*c;
//     let hiendelta='so delta la '+delta;
//     console.log(hiendelta);
//     if(delta<0){
//         console.log('phuong trinh vo nghiem');
//     }else if(delta === 0){
//         let x=-b/(2*a);
//         let hienx='phuong trinh co nghiem kep '+ x;
//         console.log(hienx);
//     }else if(delta>0){
//         let delta1=Math.sqrt(delta);
//         let x1=(-b+delta1)/(2*a);
//         let x2=(-b-delta1)/(2*a);
//         let hienx='phuong trinh co 2 nghiem '+x1+';'+x2;
//         console.log(hienx);
//     }
//     let userInput = prompt('ban co muon thuc hien tiep khong');
//     if(userInput === "yes"){
//     }else if(userInput === "no"){
//         loop=false;
//     }
// }


//Bài 6
// let loop=true;
// while(loop){
//     let userInput1 = prompt("Nhap chuoi bat ky");
//     for(let i=0; i<=(userInput1.length-1); i=i+1){
//         console.log(userInput1[userInput1.length - 1 - i]);
//     }
//     let userInput = prompt('ban co muon thuc hien tiep khong');
//     if(userInput === "yes"){
//     }else if(userInput === "no"){
//         loop=false;
//     }    
// }