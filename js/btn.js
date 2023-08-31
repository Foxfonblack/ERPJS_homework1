const button = document.getElementById("color_button")
const colorText = document.querySelector(".colorText");
const colorHex = document.querySelector(".colorHex")

button.addEventListener("click", onClick)

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
  return responseObj
}
xhr.send()

function createNameMarkup(arr) {
  const resp = arr.map(({ name }) => `<li class="color">${name}</li>`)
  return resp.join("")
}

function createHexMarkup(arr) {
  const resp = arr.map(({ hex }) => `<li class="color">${hex}</li>`)
  return resp.join("")
}

function onClick() {
  const color = document.querySelector(".form-control").value.trim()
  const response = xhr.onload();
  const result = response.find(({ name, hex }) => {
    return name.toLowerCase() === color.toLowerCase() || hex === color.toLowerCase()
  })
  if (result) {
    document.body.style.backgroundColor = result.hex
  }
  else {
    alert('there is no such a color in this array')
  }
}