// const button = document.querySelector(".btn"); 
const form = document.querySelector(".form") //ссылка на форму
// console.log(form)
form.addEventListener("submit", onSubmit)//добавляем обработчик событий на форму (тип события submit - отправка формы)
// console.log(button);
// button.addEventListener("click", onButtonClick);
function onSubmit (event) {
    // document.body.style.backgroundColor=getRandomHexColor()
    
    console.dir(event); 
    event.preventDefault()
    const color = event.currentTarget.elements.input.value;
    document.body.style.backgroundColor=color
}
// function getRandomHexColor() {
//     return `#${Math.floor(Math.random() * 16777215)
//       .toString(16)
//       .padStart(6, 0)}`;
//   }
//   console.log(getRandomHexColor());