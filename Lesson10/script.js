
const sum = (...a) => {
    console.log(a);
}

sum(1,2,3,4,5);

/// dau ... dung trc param thi la rest operator, nó sẽ hứng các phần tử còn thừa nếu nhập param thừa
/// dấu .. đứng trc mảng thì là spread operator, nó sẽ lấy từng phần tử trong mảng ra thành các phần tử riêng biệt
 const b = [1,2,3];
 console.log(...b);


 const c = {
    name : 'kien',
 }

 console.log(...c);