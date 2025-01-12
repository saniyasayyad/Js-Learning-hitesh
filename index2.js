// console.log("Hello");
// // its called hoisting automatic fun declaration st top
// function run(){
//     console.log("Running");
// }
// // callin g fun
// run();  

// //name  fun assignment

//  let stand = function walk(){
//     console.log('walking');
//  };

//  // Anonymous fun
//  let start2 = function(){
//     console.log('walking');
//  };

//  stand();

//  start2();
//  let jump = stand;

//  jump();

 function sum(a,b){console.log(arguments);
    return a+b;
 }

 //console.log(sum(2,3));
 //console.log(sum(2));
 //console.log(sum());
 //console.log(sum(2,6,7,8));

 // what about extra no argument
//  function sum(a,b){
//     console.log(arguments);
//     return a+b;
//  }


//  function sum(a,b){
//    let total =0;
//    for(let value of arguments)
//         total = total + value;
//     return total;

//  };

//  let ans = console.log(sum(2,6,7,8));
//  console.log(ans);


// function sum(num,...args){
//     console.log(args);
// }

// sum(2,5,5,2,10);

// function intrest(p,r,y=5){  // deafult value is 5
//     return p*r*y/100;
// }
// console.log(intrest(1000,5));

// getter setter

// getetr : Access properties
// setter : Modification

// let person = {
//     fName : 'Saniya',
//     lName : 'Sayyad',

//     get fullName(){
//         return `${person.fName} ${person.lName}`;
//     },

//     set fullName(value){
//         if(typeof value !== String){
//             throw new Error("You did not pas the string");
//         } 
//         //value is combile i want seprate
//         let part = value.split(' '); //parts is array
//         this.fName = part[0];
//         this.lName = part[1];
//     }

// };
//console.log(person);
// read only
//console.log(fullName());
// person.fullName = "Rahul kumar";
// console.log(person.fullName);

//try and catch
// try{
//     person.fullName = 1;

// }
// catch (e){
//     alert(e);
// }
// console.log(person.fullName);

// reducing array
let arr = [1,5,8,10];
// we can do the sum using iterator
let  totalSum = arr.reduce((accumulator, currentValue )=> accumulator + currentValue,0 );
console.log("Printing Total Sum");
console.log(totalSum);