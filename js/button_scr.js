const button = document.getElementById("02")
button.addEventListener("click", onClick)
let i = 0;
function onClick (event) {
    const color = document.getElementById("01").value.replaceAll(" ", "")
    console.log(color)
    const colorArr = color.split(",").filter(item=> item.length !== 0)
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
    // yellow  ,  black,,   ,, white  ,, ,,   red
}

