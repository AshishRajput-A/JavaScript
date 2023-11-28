const btn = document.getElementById("button");
const randomcolor = ()  => {
    let var1 = "0123456789ABCDEF";
    let col = "#";
    for (let i = 0; i<6;i++)
    {
        col=col+var1[Math.floor(Math.random()*16)];
    }
    return col ;
};

console.log(randomcolor());

function colorchange ()
{
    document.body.style.backgroundColor = randomcolor() ;
}
btn.addEventListener("click", colorchange);
/*
const btn = document.getElementById("button");
const randomColor = () => {
  let val = "0123456789ABCDEF";
  let cons = "#";

  for (let i = 0; i < 6; i++) {
    cons = cons + val[Math.floor(Math.random() * 16)];
  }
  return cons;
};

console.log(randomColor());

function changeRandomColor() {
  document.body.style.backgroundColor = randomColor();
}

btn.addEventListener("click", changeRandomColor);

*/