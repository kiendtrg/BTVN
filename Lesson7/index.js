//bai 1
// let i=1;
// do{
//   console.log(i);
//   i++;
// }while(i<=500)


//bai 2
// let i = 1;
// while(i<=300){
//     if(i%2==0&&i%3==0){
//         console.log(i);
//         i++;
//     }
//     else{
//         i++;
//     }
// }


//bai 3
// let sum = 0;
// for(let i = -30;i<=50; i++){
//     if(i%2==0){
//         sum=sum+i;
//     }
// }
// console.log(sum);


//bai 4
// let n = Number(prompt('nhap n'));
// gt = 1;
// while((n<0)){
//     n = Number(prompt('khong co giai thua am, nhap lai n'))
// }
// if(n==0){
//     console.log(gt);
// }
// else{
//     for(let i = 1; i<=n; i++){
//         gt=gt*i;
//     }
//     console.log(gt);  
// }


//bai 5
// let x= Number(prompt('nhap x'));
// let a= Number(prompt('nhap a'));
// let b= Number(prompt('nhap b'));
// while((a>b)||(x>b)||(a<0)||(b<=0)||(x<=0)){
//     x = Number(prompt('nhap lai x'));
//     a= Number(prompt('nhap lai a'));
//     b= Number(prompt('nhap lai b'));
// }
// for(let i=a;i<=b;i++){
//     if(i%x==0){
//         console.log(i);
//         break;
//     }
// }


// bai 6
// let n = Number(prompt('nhap n'));
// let S = 0;
// while(n<2){
//     n = Number(prompt('nhap lai n'));
// }
// for(let i =1;i<n;i++){
//     S = S + (1/(i*(i+1)));
// }
// console.log(S);


// //bai 7
// let n = Number(prompt('nhap n'));
// while(n<=0){
//        n = Number(prompt('nhap lai n'));
//      }
// for(i=1;i<=n;i++){
//        if(n%i==0){
//         console.log(i);
//        }
// }


// //bai 8
// let n = Number(prompt('nhap n'));
// if(n<2){
//            console.log('n khong phai so nguyen to');
//          }
//   for(let i = 2;i<=(n/2);i++){
//       if(n%i==0){
//         console.log('n khong la so nguyen to');
//         break
//       }
//       else{
//         console.log('n la so nguyen to');
//       }
//   }

// //bai 9
// let s = prompt('nhap chuoi s');
// let l = Number(prompt('nhap so l'));
// while(s.length<l){
//     s= '0'+s;
// }
// console.log(s);


// //bai 10
// let n = Number(prompt('nhap n'));
// let m = Number(prompt('nhap m'));
// while((n<=0)||(m<=0)){
//     n = Number(prompt('nhap lai n'));
//     m = Number(prompt('nhap lai m'));
// }
// for(let i = 2;i<=(m*n);i++){
//     if((m%i==0)&&(m%i==0)){
//           console.log('UCLN la',i);
//           break
//     }
// }


// //bai 11
// let n = Number(prompt('nhap n'));
// let m = Number(prompt('nhap m'));
// while((n<=0)||(m<=0)){
//     n = Number(prompt('nhap lai n'));
//     m = Number(prompt('nhap lai m'));
// }
// for(let i = 1;i<=(m*n);i++){
//     if((i%m==0)&&(i%n==0)){
//           console.log('BCNN la',i);
//           break
//     }
// }


// //bai 12
// let correct = Math.floor(Math.random()*20)+1;
// let n = Number(prompt('nhap n'));
// for(let i=1;i<=5;i++){
//     if(n==correct){
//         console.log('Doan dung');
//     }
//     else if(n!=correct&&i<5){
//         n = Number(prompt('nhap lai n'));
//     }
//     else if(n!=correct&&i==5){
//         console.log('Ban da thua cuoc');
//     }
// }
// console.log('Dap an la',correct);


// //bai 13
// let n = Number(prompt('nhap n'));
// while((n<2)||(n>10)){
//          n = Number(prompt('nhap lai n'));
//     }
// for(let i=1;i<=10;i++){
//     console.log(n+' x '+i+" = "+n*i);
// }


// //BAI 14
// let n = Number(prompt('nhap n'));
// while(n<2){
//     n = Number(prompt('nhap lai n'));
// }
// for(let i=1;i<=n;i++){
//     let s='';

//     for(let j=1;j<=n;j++){
//         s= s+'*';
//     }
//     console.log(s);
// }


//bai 15
// let m = Number(prompt('nhap chieu dai'));
// let n = Number(prompt('nhap chieu rong'));

// while(m<2||n<2){
//     m = Number(prompt('nhap lai chieu dai'));
//     n = Number(prompt('nhap lai chieu rong'));

// }
// for(let i=1;i<=m;i++){
//     let s='';

//     for(let j=1;j<=n;j++){
//         s= s+'*';
//     }
//     console.log(s);
// }


//bai 16
// let n = Number(prompt("Nhap n"));
// while (n<3) {
//    n = Number(prompt("Nhap lai n"));
// } 
// for(let i=1;i<=n;i++){
//     let s= ' ';
//     for( let j=1;j<=i;j++){
//         s=s+' * ';
//     }
//     console.log(s);
// }



//bai 17
// let w = Number(prompt("Nhap can nang"));
// let h = Number(prompt("Nhap chieu cao"));
// BMI =  w/(h*h);
// if(BMI<18.5){
//     console.log('Nhe can');
// }
// else if(BMI>=18.5&&BMI<23){
//     console.log('Binh thuong');
// }
// if(BMI>=23.5&&BMI<25){
//     console.log('Thua can');
// }
// if(BMI>25){
//     console.log('Beo phi');
// }
