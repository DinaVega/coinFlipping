let coinNode = document.querySelector("#coin");
let throwNode = document.querySelector("#throw");
let aversNode = document.querySelector("#avers");
let reversNode = document.querySelector("#revers");

coinNode.addEventListener("click", function () {
  throwNode.innerHTML++;
  let randomNumb = Math.floor(Math.random() * 2);
  if (randomNumb) {
    coinNode.src = "./img/avers.png";
    aversNode.innerHTML++;
  } else {
    coinNode.src = "./img/revers.png";
    reversNode.innerHTML++
  }
});
