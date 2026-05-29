//Array

// const myarr=[1,2,3,4,5]

// const myarr2=new Array(1,2,3,4,5)
// console.log(myarr[3]);

//Array methods
// myarr.push(6)
// myarr.push(7)
// myarr.pop();
// myarr.unshift(9)  //it add at first index and shift all
// myarr.shift()  //delete first element
// console.log(myarr.includes(9));
// console.log(myarr.indexOf(9));   //-1 beacause element is not exist

// const newarr=myarr.join()
// console.log(myarr);

// console.log(newarr);  //it give element in string


//slice ,splice

// console.log("a",myarr);
// const myn1=myarr.slice(1,3)
// console.log(myn1);
// console.log("B",myarr);

// const myn2=myarr.splice(1,3)  //splice array me se value bhar nikalta h or array ko chhota bna deta h or ye last boundry dete h index ki use bhi include krta h 
// console.log("c",myarr);
// console.log(myn2);



const marvel_heros=["ironman","thor","spiderman"]
const dc_heros=["batman","flash","superman"]
marvel_heros.push(dc_heros)
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHero=marvel_heros.concat(dc_heros)
// console.log(allHero);

const all_newheros=[...marvel_heros,...dc_heros]
console.log(all_newheros);










