const button = document.getElementById("color_button")
// const colorText = document.querySelector(".colorText");
// const colorHex = document.querySelector(".colorHex")
const textArea = document.querySelector(".text_area");
const input = document.getElementById("formGroupExampleInput");

const table = document.querySelector(".t_body");
// const hex = document.querySelector(".t_hex");
// const color = document.querySelector(".t_color");

const prevBtn = document.querySelector("#prev_btn");
const nextBtn = document.querySelector("#next_btn");

const inp = document.querySelector(".inp");
const pageBtn = document.querySelector(".page");

inp.value = 1;
prevBtn.disabled = true;

let counter = 50;


button.addEventListener("click", onClick)
input.addEventListener("input", onInputChange)
let responseObj = null;
let value = "";
// let intervalId = [];
function onInputChange(evt) {
  value = evt.currentTarget.value;
  console.log(value)
}
prevBtn.addEventListener("click", onDecrement);

function onDecrement() {

    counter -= 50;
          inp.value = counter / 50;
        if (counter <= 50) {
  prevBtn.disabled = true;
        }
    const totalPages = Math.ceil(responseObj.length / 50);
   if (Number(inp.value) < totalPages) {
  
    nextBtn.disabled = false;

  }
     let arr = responseObj.slice(counter - 50,counter)
    // const nameMarkup = createNameMarkup(responseObj);
    // const hexMarkup = createHexMarkup(responseObj);
    const nameM = createName(arr);
    table.innerHTML = nameM;




}
// let i = 0;
nextBtn.addEventListener("click", onIncrement);

function onIncrement() {
  // if (inp.value) {
  //     counter = Number(inp.value * 50)
  //   } 
  counter += 50;
      inp.value = counter / 50;
    if (counter > 50) {
  prevBtn.disabled = false;
    }
    const totalPages = Math.ceil(responseObj.length / 50);

  if (Number(inp.value) === totalPages) {
  
    nextBtn.disabled = true;

  }
    let arr = responseObj.slice(counter - 50,counter)
    // const nameMarkup = createNameMarkup(responseObj);
    // const hexMarkup = createHexMarkup(responseObj);
    const nameM = createName(arr);
    table.innerHTML = nameM;
  
    console.log(counter)

  }


pageBtn.addEventListener("click", onPage)

function onPage() {

  console.log(inp.value)
  counter = 50;
  const totalPages = Math.ceil(responseObj.length / 50);
    console.log(totalPages)
  if (inp.value > totalPages) {
    alert("This page does not exist");
    return
  }
    if (Number(inp.value) === totalPages) {
  
    nextBtn.disabled = true;

  } else   if (Number(inp.value) < totalPages) {
  
    nextBtn.disabled = false;

  }

      let arr = responseObj.slice((counter* Number(inp.value) - 50) ,counter * Number(inp.value))
    const nameM = createName(arr);
  table.innerHTML = nameM;

  console.log(counter)
  counter += 50 * Number(inp.value) - 50
        if (counter > 50) {
  prevBtn.disabled = false;
}
  console.log(counter)
  inp.value = counter / 50 ;

}

const urlRequest = 'https://unpkg.com/color-name-list@10.10.0/dist/colornames.json'
let xhr = new XMLHttpRequest()
xhr.open('GET', urlRequest)
xhr.responseType = 'json'
setTimeout(() => {
  console.log(responseObj)
  let arr = responseObj.slice(0, counter)
      const nameM = createName(arr);

    table.innerHTML = nameM;
}, 100)
xhr.onload = function () {
   responseObj = xhr.response


    // const nameMarkup = createNameMarkup(responseObj);
    // const hexMarkup = createHexMarkup(responseObj);

  //   colorText.innerHTML = nameMarkup;
  //   colorHex.innerHTML = hexMarkup;


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

// function createNameMarkup(arr) {
//   const resp = arr.map(({ name }) => `<li class="color">${name}</li>`)
//   return resp.join("")
// } 

function createName(arr) {
  const resp = arr.map(({ name, hex }, idx) => `<tr><th scope="row">${counter < 100 && idx+1+(inp.value && counter * Number(inp.value)-50)   || counter >= 100 && idx+1+(inp.value && counter-50 ) }</th><td class="color">${name}</td><td>${hex}</td><td><div class="sqr" style="background-color:${hex}"></div></td></tr>`
  )
 return resp.join("")
}



// function createHexMarkup(arr) {
//   const resp = arr.map(({ hex }) => `<li class="color">${hex}</li>`)
//   return resp.join("")
// }

let history = "";

let result = [];
  
let i = 0

function onClick() {
  console.log(counter)
console.log(value)

  console.log(result)
  // for (let i = 0; i < intervalId.length; i += 1) {
  //   clearTimeout(intervalId[i])
  // }
  
  const color = document.querySelector(".form-control").value.trim()
  const response = xhr.onload();
  console.log(response)
 if(value !== ""){ result = response.find(({ name, hex }) => {
    return (name.toLowerCase() === color.toLowerCase() || hex === color.toLowerCase())
  }) || (response.filter(({ name }) => {
    return name.substring(0,value.length).toLowerCase().includes(value.substring(0,value.length).toLowerCase())

  }))}



  console.log(color)
  console.log(result)
  if (result.hasOwnProperty("name")) {
       document.querySelector(".form-control").value &&  (history += " " + document.querySelector(".form-control").value.trim() + ",")
  textArea.value = history;
    document.body.style.backgroundColor = result.hex
    value = "";
    result = [];
      document.querySelector(".form-control").value = ""
    

  }
  else if (result.length) {
    // function showColor(i) {
    //  intervalId.push(setTimeout(() => {
 
       document.body.style.backgroundColor = result[i].hex
       history += " " + result[i].name + ","
    textArea.value = history;
    if (i === result.indexOf(result[result.length - 1])) {
      setTimeout(() => {
        alert("You have reached the end of chosen collection")
        i = 0;
         document.querySelector(".form-control").value = ""
         
       },500)

    }
    i += 1;
   
    //  }, 1000 * i))
      
    }
    
    // for (let i = 0; i < result.length; i += 1){
    //   showColor(i)
    // }
    //  value = "";
// }
   else if (value === null || value === "") {
    alert("Enter your color")
  }

  else {
    alert('there is no such a color in this array')
       value = "";
  }
  // if (document.querySelector(".form-control").value = "") {
  //   return
  // } 





}

// document.addEventListener("scroll", function(e) {
//   document.querySelector('.scr').scrollTo(0, document.querySelector('.scr').scrollTop + e.deltaY);
// }, true);


    // const color = document.getElementById("01").value.replaceAll(" ", "")
    // console.log(color)
    // const colorArr = color.split(",").filter(item => item.length !==0)
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


// const colorList = document.querySelector(".listOfcolors")
// function createMarkup(arr) {
//   const resp = arr.map(({ name, hex }) => `<li class="color"><p class="color__text" style="background-color:${hex}">${name}</p></li>`)
//   return resp.join("")
// }
// const requestURL = "https://unpkg.com/color-name-list@10.10.0/dist/colornames.json";
//   let xhr = new XMLHttpRequest();
//   xhr.open("GET", requestURL);
//   xhr.responseType = 'json';
//   xhr.send();
// xhr.onload = function() {
//   let responseObj = xhr.response;
//   const markup = createMarkup(responseObj);
// colorList.innerHTML = markup;
// };



// colorList.addEventListener("click", onColorClick)

// function onColorClick(evt) {
//     document.body.style.backgroundColor = evt.target.style.backgroundColor
// }