// Bài 1
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
let loop=true;
while(loop){
    let userInput1 = prompt("Nhap chuoi bat ky");
    for(let i=0; i<=(userInput1.length-1); i=i+1){
        console.log(userInput1[userInput1.length - 1 - i]);
    }
    let userInput = prompt('ban co muon thuc hien tiep khong');
    if(userInput === "yes"){
    }else if(userInput === "no"){
        loop=false;
    }    
}