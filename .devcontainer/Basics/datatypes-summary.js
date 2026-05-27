//Primitive 

//7types: String,Number,Boolean,null,undefined,Symbol,BigInt

// const score=100
// const scorevalue=100.3

// const isLoggedIn=false
// const  outsideTemp=null
// let UserEmail; //undefined
// const id=Symbol('123')
// const anotherId=Symbol('123')

// console.log(id==anotherId);  //false

// const bigNumber=34333444444883n



//Refrence (Non Primitive)

//array,Objects,Functions

// const heros=["shaktiman","naagraj","iron man"];
// let myObj={
//     name:"rahul",
//     age:22,

// }

// const myFunction=function(){
//     console.log("hello world");
    
// }
// console.log(typeof bigNumber);
// console.log(typeof outsideTemp);
// console.log(typeof heros);   //object


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Stack(Primitive),Heap(non-primitive)

// let myName="rahul singh"
// let anotherName=myName
// anotherName="sachin"
// console.log(anotherName);
// console.log(myName);


let userOne={
    email:"user@google.com",
    upi:"user@ybl"
}
console.log(userOne);
let userTwo=userOne;
userTwo.email="rahul@123";
console.log(userTwo);
console.log(userOne);




