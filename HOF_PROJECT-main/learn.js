/*const powertwo = (n) =>
{
    return n**2;
}

function cube (powertwo,n)
{
    return powertwo(n)*n;

}
console.log(cube(powertwo,4));
console.log(powertwo(5));*/

/*
function sayhello ()
{
    return () =>
    {
        console.log("hello ashish");
    }
}

let gess = sayhello()
//console.log(gess);
*/
/*
const one = n =>
{

    const two = m =>
    {
        const three = o =>
        {
            return m+n+o
        }
        return three
    }
    return two
}

console.log(one(2)(3)(4));
*/
/*
mynum = [1,2,3,4,5];
const sumarray = arr =>
{
    let total =0;
    arr.forEach(function (element) {

        total += element;
        
    });
    return total;
}

console.log(sumarray(mynum));
*/

function hey ()
{
    console.log("HELLO ASHISH",Math.random());
}
setInterval(hey,2000);

//setTimeout(hey,5000);

