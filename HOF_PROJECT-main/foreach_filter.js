let arr = [1,2,3,4];
/*
arr.forEach(function(el,index,arr){
console.log(el,index,arr);
})

arr.forEach((el,index,arr)=>{
console.log("arrow.:",el,index,arr);
})*/

const heros =["naagraj","doga","dhruva","maniraj"]
/*heros.forEach((el)=>{
    console.log(el.toUpperCase());
})
*/
/*
heros.map(function(e)
{
   console.log(e.toUpperCase());
})*/

//filter

console.log(heros);

const heroswithraj = heros.filter((h)=> {
    h.endsWith('raj');
})

console.log(heroswithraj);













