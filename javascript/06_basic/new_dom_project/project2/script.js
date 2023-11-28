const clocks = document.getElementById("clock");

const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  setInterval(function () {
    let date = new Date();
    // console.log(date.toLocaleTimeString());
    clocks.innerHTML = date.toLocaleTimeString();
  }, 1000);
});
