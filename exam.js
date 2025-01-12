// console.log("Namaste Duniya");
// // obj creation

// // let rec = {
// //     length: 1,
// //     breath: 1,

// //     draw: function(){
// //         console.log("Function");
// //     }
// // };

// // if we want multiple obj

// // 1) FACTORY METHOD

// function craeteFactory(len , bre) {
//    return  rec = {
//         length: len,
//         breath: bre,
    
//         // draw: function(){
//         //     console.log("Function");
//         // }

//        // or
       
//        draw() {
//         console.log("Saniay Sayyad");
//        }
//     };
// }

// let factoryObj1 = craeteFactory(5,4);
// let factoryObj2 = craeteFactory(2,4);
// let factoryObj3 = craeteFactory(5,14);

// // Constructor fun
// // have to follow Pascal notation -> first letter is  capital ->Numberfun
// // defining and initializing no return

// function RectangleCon(len, bre){
//     this.length = len;
//     this.breath = bre;
//     this.draw = function(){
//         console.log('drawing');
//     }
// }
// //obj creation using constructor fun
// let Recobj1 = new RectangleCon(4,6);

// // add new field into constructor
// Recobj1.color = 'yellow';
// console.log(Recobj1);

// //dynamicaly delete
// delete Recobj1.color;
// console.log(Recobj1);

// // For in  Loop 

// let rectangle = {
//     length: 2,
//     breadth: 3
// };

// for(let key in rectangle) {
//     console.log(key, rectangle[key]);
// }

// // for of is work in iterators like array 
// for(let key of Object.entries(rectangle)){ //here keys array created
//     console.log(key);
// }

// check a field that is in our obj or not

// if('color' in rectangle){
//     console.log('Present');
// }
// else{
//     console.log('Not Present');
// }

// Object cloning
// iterator
// let src = {
//     a:10,
//     b:20,
//     c:50
// };

// let dest = {};

// for(let key in src){
//     dest[key] = src[key];
// }

// console.log(dest);

// Assign
// let src = {
//     a:500,
//     b:800
// };

// let dest = Object.assign({},src);

// console.log(dest);
// src.a++;
// console.log(dest);

// Spred


// let src= {
//     a: 10,
//     b: 20,
//     c: 30
// }

// let dest = {...src};

// console.log(dest);

// String
// primitive
// let yourName = 'Saniya';
// console.log(yourName);

// obj string
// let myName = new String("Saniya Sayyad");
// console.log(myName);

// template literal

// let message = `This is my 
//             mess""age i 
//     am styaling this now! ${myName}`
// console.log(message);

// let date = new Date();
// console.log(date);


//let numbers = [1,4,5,6,7,];

// console.log(numbers[2]);

// //insert 9 end
// numbers.push(9);


// //starting
// numbers.unshift(10);

// // mid
// numbers.splice(2,0,'a','b','c');


// searching

//console.log(numbers.indexOf(5));

// let courses = [
//     {no:1, naam:'love'},
//     {no:2, naam:'Rahul'}
// ];
//console.log(courses);
// let cource = courses.find(function(course) {
//     return course.naam == 'Love';
// });

// console.log(cource);

//above code in simple

// let cource = courses.find(cource => cource.naam === 'Love');
// console.log(cource);

// delete an array
// let numbersArray = [1,2,3,4,5];
// let number2 = numbersArray;
// len 0
//numbersArray.length = 0;

// 2) using splice method
//numbersArray.splice(0,numbersArray.length);

// using loop also


// console.log(number2);
// console.log(numbersArray);


// combing and split

// let first = [1,2,3,4];
// let second = [4,5,6,7,7];

// let combine = first.concat(second);
// console.log(combine);

// let sliceout = combine.slice(2,15);
// console.log(sliceout);

// Spred Oprator

// let first = [1,2,3,4];
// let second = [4,5,6,7,7];

// let combine = [...first, ...second];
// console.log(combine);

// iteratin array
// let arr = [10,20,30];
// 1
// for(let val of arr){
//     console.log(val);
// }

//2
// arr.forEach(function(number){
//     console.log(number);
// });
// converting it into arrow fun
// arr.forEach(number => console.log(number));

/// join

// let numbers = [10,20,30,40];
// const joined = numbers.join(',');
// console.log(joined);

// sort

let arr = [4,6,2,1,6,9];
let arrAns = arr.sort();
arrAns.reverse();

console.log(arrAns);
