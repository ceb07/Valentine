const container = document.getElementById("container");
const imageOne = document.querySelector(".image-1");
const imageTwo = document.querySelector(".image-2");
const btnYes = document.querySelector(".btn-yes");
const btnNo = document.querySelector(".btn-no");
const originalSrc = imageOne.src
const hoverText = document.getElementById("hoverText")
const hoverTeks = document.getElementById("hoverTeks")

function getRandomNumber(min, max) {
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

  return randomNumber;
}

btnNo.addEventListener("mouseover", (event) => {
  const containerHeight = container.getBoundingClientRect().height;
  const containerWidth = container.getBoundingClientRect().width;
  const btnHeight = btnNo.getBoundingClientRect().height;
  const btnWidth = btnNo.getBoundingClientRect().width;
  const btnTop = btnNo.getBoundingClientRect().top;
  const btnLeft = btnNo.getBoundingClientRect().left;

  let newTop = btnTop;
  let newLeft = btnLeft;
  while (Math.abs(newTop - btnTop) < containerHeight / 3) {
    newTop = getRandomNumber(0, containerHeight - btnHeight);
  }

  while (Math.abs(newLeft - btnLeft) < containerWidth / 3) {
    newLeft = getRandomNumber(0, containerWidth - btnWidth);
  }

  btnNo.style.top = Math.floor(newTop) + "px";
  btnNo.style.left = Math.floor(newLeft) + "px";

  hoverText.classList.remove("hidden");

  imageOne.src = "pic/aoi-todo.gif";
  imageOne.style.width = "300px";
  imageOne.style.height= "auto";
  imageOne.style.top= "40%";

});

btnNo.addEventListener("mouseout", (event) => {
    setTimeout(() => {
        imageOne.src = originalSrc;
        imageOne.style.width = "";
        imageOne.style.height= "";
        hoverText.classList.add("hidden");
    }, 3000);
});

btnYes.addEventListener("click", (e) => {
  btnNo.classList.add("hide");
  imageOne.classList.add("hide");
  imageTwo.classList.remove("hide");
  hoverTeks.classList.remove("hidden");
});