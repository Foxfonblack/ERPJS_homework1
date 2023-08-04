const button = document.getElementById("02")
button.addEventListener("click", onClick)
let i = 0;
function onClick (event) {
    const color = document.getElementById("01").value.trim()
    console.log(color)
    const colorArr = color.split(",")
    console.log(colorArr)

    for(const color of colorArr) {
      if (i < colorArr.length) {
        document.body.style.backgroundColor = colorArr[i];
        console.log(colorArr[i])
        i += 1;
        break;
      }
      else i = 0;
    }
}