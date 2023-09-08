const button = document.getElementById("color_button")
const colorText = document.querySelector(".colorText");
const colorHex = document.querySelector(".colorHex")
const textArea = document.querySelector(".text_area");
const input = document.getElementById("formGroupExampleInput");

button.addEventListener("click", onClick)
input.addEventListener("input", onInputChange)

let value = null;
let intervalId = [];
function onInputChange(evt) {
  value = evt.currentTarget.value;
  console.log(value)
}

// let i = 0;

const urlRequest = 'https://unpkg.com/color-name-list@10.10.0/dist/colornames.json'
let xhr = new XMLHttpRequest()
xhr.open('GET', urlRequest)
xhr.responseType = 'json'

xhr.onload = function () {
  const responseObj = xhr.response
  if (colorHex.firstElementChild === null && colorText.firstElementChild === null) {
    const nameMarkup = createNameMarkup(responseObj);
    const hexMarkup = createHexMarkup(responseObj);
    colorText.innerHTML = nameMarkup;
    colorHex.innerHTML = hexMarkup;
  }

  // console.log(responseObj)
  return responseObj
}
xhr.send()

// function onLoad () {
//    const nameMarkup =  createNameMarkup(xhr.onload());
//     const hexMarkup = createHexMarkup( xhr.onload());
//    colorText.innerHTML = nameMarkup;
//    colorHex.innerHTML = hexMarkup;
// }
// onLoad()

function createNameMarkup(arr) {
  const resp = arr.map(({ name }) => `<li class="color">${name}</li>`)
  return resp.join("")
}

function createHexMarkup(arr) {
  const resp = arr.map(({ hex }) => `<li class="color">${hex}</li>`)
  return resp.join("")
}

let history = "";



function onClick() {
  for (let i = 0; i < intervalId.length; i += 1) {
    clearInterval(intervalId[i])
  }

  const color = document.querySelector(".form-control").value.trim()
  const response = xhr.onload();
  console.log(response)
  const length = value.length;
  const result = response.find(({ name, hex }) => {
    return name.toLowerCase() === color.toLowerCase() || hex === color.toLowerCase()
  }) || response.filter(({ name }) => {
    return name.substring(0,length).toLowerCase().includes(value.substring(0,length).toLowerCase())
    //  name[0].toLowerCase().includes(value)
  })
  console.log(color)
  console.log(result)
  if (result.hasOwnProperty("name")) {
    document.body.style.backgroundColor = result.hex

  }
  else if (result.length) {
    function showColor(i) {
     intervalId.push(setTimeout(() => {
            document.body.style.backgroundColor = result[i].hex
     }, 1000 * i))
      
    }
    
    for (let i = 0; i < result.length; i += 1){
      showColor(i)
    }
   
  }
  else {
    alert('there is no such a color in this array')
  }
  history += " " + document.querySelector(".form-control").value + ",";
  textArea.value = history;
  document.querySelector(".form-control").value = "";
}