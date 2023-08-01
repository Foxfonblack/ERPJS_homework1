// const button = document.querySelector(".btn"); 
// const form = document.querySelector(".form") //ссылка на форму
const button = document.getElementById("02")
button.addEventListener("click", onClick)
// console.log(button)
// console.log(form)
// form.addEventListener("submit", onSubmit)//добавляем обработчик событий на форму (тип события submit - отправка формы)
// console.log(button);
// button.addEventListener("click", onButtonClick);
let i = 0;
function onClick (event) {
    // document.body.style.backgroundColor=getRandomHexColor()
    
    // console.dir(event); 
    // event.preventDefault()
  
    const color = document.getElementById("01").value.replaceAll(",")
    console.log(color)
    const colorArr = color.split(" ")
    console.log(colorArr)

    for(const color of colorArr) {
     
    document.body.style.backgroundColor=colorArr[i];
    console.log(colorArr[i])
    i+=1;
    break

    }
    // event.currentTarget.elements.input.value;
}
// function getRandomHexColor() {
//     return `#${Math.floor(Math.random() * 16777215)
//       .toString(16)
//       .padStart(6, 0)}`;
//   }
//   console.log(getRandomHexColor());