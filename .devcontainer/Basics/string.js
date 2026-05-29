const name="rahul"
const repocount=10

// console.log(name+repocount+1);
// console.log(`hello my name is ${name} and my repocount is ${repocount}`);

const gameName=new String('rahul-singh')
// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));

const newString=gameName.substring(0,4)
console.log(newString);
const anotherString=gameName.slice(-8,4);
console.log(anotherString);

const newStringOne="    Rahul"   
console.log(newStringOne);
console.log(newStringOne.trim());  //trim spaces ko hta deta h


const url="https://rahul.com/rahul%20singh"

console.log(url.replace('%20','-'))

console.log(url.includes('sundar'))   //ye check krta h ki sundar url me h ya nhi








