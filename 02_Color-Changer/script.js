
let colorChanger = function()
{
    let hexa = "123456789ABCDEF";

    let color = "#"

    for(let i=0 ; i<6; i++)
    {
        color += hexa[Math.floor(Math.random() *16)]
    }
    return color
}




let intervalID;

const startColorChange = () => {

    intervalID =  setInterval(() => {
    document.body.style.backgroundColor = colorChanger()
   }, 1000);

}


const stopColorChange = () => {

    clearInterval (intervalID);
}

document.getElementById("start").addEventListener("click" , startColorChange)

document.getElementById("stop").addEventListener("click" , stopColorChange)

