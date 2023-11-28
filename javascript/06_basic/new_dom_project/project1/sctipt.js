const buttons = document.querySelectorAll(".button");
// console.log(buttons);
const body = document.querySelector("body");

buttons.forEach((btn) => {
  console.log(btn);
  btn.addEventListener("click", (e) => {
    switch (e.target.id) {
      case "grey":
        body.style.backgroundColor = "grey";
        break;
      case "white":
        body.style.backgroundColor = "white";
        break;
      case "blue":
        body.style.backgroundColor = "blue";
        break;
      case "yellow":
        body.style.backgroundColor = "yellow";
        break;
    }
  });
});
