const dec = document.getElementById("decrement");
const inc = document.getElementById("increment");
const reset = document.getElementById("reset");
const num = document.getElementById("value");

dec.addEventListener("click",() =>{
    const value = Number(num.innerText);

    if(value >0)
    {
        num.innerText = value-1;
    }
    else
    {
        alert("Negative number is not allowed")
    }
});

inc.addEventListener("click",() => {
    const value = Number(num.innerText);
    if(value >= 10)
    {
        alert("10+ values are not allowed")
    }
    else
    {
        num.innerText= value+1
    }
});

reset.addEventListener("click", ()=> {
    num.innerText=0;
})