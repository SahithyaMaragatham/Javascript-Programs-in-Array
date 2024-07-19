//split()
let text="Introduction to javascript";
const result=text.split(" ")
console.log("split() : " + result);
//join()
let colors=["red","blue","yellow","green"];
let r=colors.join();
console.log("join() : " + r);
//destructuring
const[red,blue,green]= colors;
console.log("Destructuring");
console.log("RED COLOR :",red);
console.log("BLUE COLOR :",blue);
//spreading
let flowers=["lotus","lilly"];
let add=["rose","jasmine"];
let final=[...flowers,...add];
console.log("Spread() :" + final);
//merging
let arr1=[1,2,3,4,5];
let arr2=[6,7,8,9,10];
console.log("merging two arrays : ",arr1.concat(arr2));
