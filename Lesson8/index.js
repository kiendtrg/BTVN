// let arr = [1,2,3];
// console.log(arr[1]);

// let arr1 = ['a','b','c'];
// let arr2 = ['a','b','c'];

// console.log(typeof arr1);

// arr3 = arr1+arr2;
// console.log(arr3);
//  if(arr1==arr2){
//     console.log(true);
//  }
//  else{
//     console.log(false);

//  }

// let arr1 = [1,2,3,23,1000];
// console.log(arr1[0]);
// arr1[3] = 10;
// console.log(arr1[3]);
// console.log(arr1.length);


// let arr = [1,2,3,4,5,7];
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// } 

// let arr = [43,true,87,'alo'];
// console.log(arr[0]);
// console.log(arr[3]);
// console.log(arr[1]+arr[2]);
// let x = arr[1];
// arr[1] = arr[3];
// arr[3] = x;
// console.log(arr[1]);
// console.log(arr[3]);

// let arr = [34,65,32,78,41,22,17];

//  for(let i = 0; i<arr.length; i++){
//     if(arr[i]%2 == 0){
//         console.log(arr[i]);
//     }
//  }

// let sum = 0;
//  for(let i = 0; i<arr.length; i++){
//     sum = sum +arr[i];
//  }
//  console.log(sum);

// let smallest = arr[0];
//  for(let i = 0; i < arr.length; i++){
//     if(arr[i] < smallest){
//         smallest = arr[i];
//     }
//  }
//  console.log(smallest);

// for(let a of arr){
//     console.log(a);
// }

// let arr1 = [34,65,32,78,41,22,17];
// arr1.push(33,52);
// arr1.unshift(66);
// console.log(arr1);

// Math.floor(Math.random() * 10); Tạo một số nguyễn ngẫu nhiên trong đoạn từ 0 đến 9

// let arr1 = [34,65,32,78,41,22,17];
// arr1.splice(1, 0);
// console.log(arr1);

// let arr = [];
// let n = Number(prompt('nhap so phan tu:'));
// for( let i = 0;i <n;i++){
//     arr.push(Math.floor(Math.random() * 10));
// }
// console.log(arr);

// let arr = [23,15,9,11,31,43,17,33,11];


// let arr = ['da','ok','testex','index','lesson','w'];

// let min = arr[0];
// for(let i = 1; i < arr.length; i++){
//     if(arr[i].length < min.length){
//         min = arr[i];
//     }
// }
// console.log(min);

// let text = prompt('Nhap text');

// for(let i = 1; i < arr.length; i++){
//     let position = arr[i].indexOf(text);
//     if(position!=-1){
//         console.log('chuoi',arr[i],'co chua',text);
//     }
//     else{
//    console.log('chuoi',arr[i],'khong chua',text);
//        }
// }

//  let newS = [];
//  for(const i of arr){
//     let s=i.substring(0, 3);
//     newS.push(s);
//  }
//  console.log(newS);

// let s='';

//  for(const i of arr){
//      s = s+' - '+ i;
// }
// console.log(s);

// let arr1 = [];
// let arr2 = [];

// let d1 = prompt(arr1);
// console.log(d1);
// let d2 = prompt(arr2);
// console.log(d2);

// let isTrue = true;

// for(const i of d1){
//     for(const j of d2){
//         if(i!==j){
//             isTrue = false;
//         }
//     }
// }
// if(isTrue==true){
//     console.log('Day d1 nam trong d2');
// }
// else{
//     console.log('Day d1 khong nam trong d2');

// }

// for(let i = 99;i>=1;i--){
//     if(i%2!=0){
//         console.log(i);
//     }
// }

// let a = Math.floor(Math.random()*5) + 5;
// console.log(a);
// do{
//     n = Number(prompt('nhap n'));
// }
// while(n!=a);

// let arr = [10,22,0,17];

// console.log(arr[0]);
// console.log(arr[3]);

// console.log(arr[1]+arr[2]);

// let temp = arr[1];
// arr[1]=arr[3];
// arr[3]=temp;
// console.log(arr);

// let arr = [22,15,2,55,9];

// let min = arr[0];
// for(const i of arr){
//     if(i<min){
//         min=i;
//     }
// }
// console.log(min);

// arr.splice(0,0,33);
// console.log(arr);

// let arr = [];

// let n = Number(prompt('nhap n'));
// for (let i=0;i<=n;i++){
//     arr.push(Math.floor(Math.random()*100));
// }
// console.log(arr);

// let arr = [1,2];

// let n = 1;
// do{
//     n = Number(prompt('nhap n'));
// }
// while(n<=2);

// for(let i=1;i<=n;i++){
//     arr.unshift(0);
// }
// console.log(arr);

// let arr = [10,22,0,17];

// do{
//     arr.shift()
// }while(arr.length>1);
// console.log(arr);

// let n = Number(prompt('nhap n'));

// let s = [];

// let x = prompt('nhap day so s');
// s==x;
// console.log(s[0]);

let arr = [22,5,17,20,33,89,14,45];

// let x = 1;
// for(const i of arr){
//     x=x*i;
// }
// console.log(x);

// let min = [];

// for(const i of arr){
//     if(i%2==0){
//         min.push(i);
//     }
// }
// y=min[0]
//  for(const j of min){
//       if(j<y){
//         y=j;
//       }
//  }
//  console.log(y);

// let sum = 0 ;
// for(const i of arr){
//     sum = sum+i;
// }
// let avr = sum/arr.length;
// console.log(avr);

// for(let i = 0;i<=arr.length;i++){
//     for(let j =2;j<=arr[i]/2;i++){
//         if(arr[i]%j==0){
//             console.log(arr[i], 'khong la so nguyen to');
//         }
//         else{
//             console.log(arr[i], 'la so nguyen to');

//         }
//     }
// }

