const button = document.getElementById("color_button")
button.addEventListener("click", onClick)
// let i = 0;

    const urlRequest = 'https://unpkg.com/color-name-list@10.10.0/dist/colornames.json'
    let xhr = new XMLHttpRequest()
    xhr.open('GET', urlRequest)
    xhr.responseType = 'json'
    xhr.send()
 xhr.onload = function(){
      const responseObj = xhr.response
   console.log(responseObj)
   return responseObj
 }

  
function onClick() {
  const color = document.getElementById("color_input").value.trim()
  const response = xhr.onload();
  console.log(response)
         const result = response.find(({name, hex}) =>{
        return name.toLowerCase() === color.toLowerCase() || hex === color.toLowerCase()
         })
  console.log(color)
    console.log(result)
      if (result) {
        document.body.style.backgroundColor = result.hex
      }
      else {
        alert('there is no such a color in this array')
      }
    }
    // .replaceAll(" ", "")
    // console.log(color)
    // const colorArr = color.split(",").filter(item=> item.length !== 0)
    // console.log(colorArr)

    // for(const color of colorArr) {
    //   if (i < colorArr.length) {
    //     document.body.style.backgroundColor = colorArr[i];
    //     console.log(colorArr[i])
    //     i += 1;
    //     break;
    //   }
    //   else i = 0;
    // }
    // yellow  ,  black,,   ,, white  ,, ,,   red


