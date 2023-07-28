const button = document.querySelector(".btn");
// console.log(button);
button.addEventListener("click", onButtonClick);
function onButtonClick () {
    document.body.style.backgroundColor=getRandomHexColor()
    
    // console.log("click");  
}
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }
//   console.log(getRandomHexColor());