const add = document.querySelector(".add");
const remove = document.querySelector(".remove");
const input = document.getElementById("string");
let valid = false;
let hasHovered = false;
//Regex const variable
const isNum = /\d/g;

let result = "";
let count = 0;
let hasRun = false;

function convertToRoman(num) {
    if (count > 0) {
        result = "";
    }
    let arabic = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    let roman = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];

    for (var i = 0; i < arabic.length; i++) {
        while (num >= arabic[i]) {
            result += roman[i];
            num -= arabic[i];
        }
    }
    /* let value = document.getElementById("value");
    value.innerHTML = result; */
    count++;
    return result;
}

add.addEventListener("click", function () {

    const cont = document.querySelector(".menu");
    /*   let input = document.querySelector(".put"); */
    let str = document.getElementById("string").value;
    //if (str.match)

    const newli = document.createElement("LI");
    newli.className = "result";

    //console.log(str);
    //console.log(convertToRoman(str));
    newli.innerText = convertToRoman(str);
    //newli.innerText = input.value;
    cont.append(newli);
});

remove.addEventListener("click", function () {
    const df = document.querySelector(".menu");
    df.firstElementChild.remove();
});


/* input.addEventListener('mouseover', mouseHoverFunction());
input.addEventListener("mouseout", mouseOutFunction);
let value = document.getElementById("string").value;
if (!value.match(isNum)) {
    valid = true;
} */
//function mouseHoverFunction() {
/*     hasHovered = true;
    console.log(hasHovered); */
//}

//function mouseOutFunction() {
/*     const newli = document.createElement("LI");
    newli.className = "result";
    if (hasHovered === true && valid === false) {
        newli.innerText = "Please enter a number!";
    }
    else {
        newli.innerText = "Valid";
    } */
//}
/* console.log(hasHovered); */
/* if (str.match(!isNum)) {
    newli.innerHTML = "Please enter a number!"
} */

/* function test() {
    let str = document.getElementById("string").value;
    let values = document.getElementById("values");
    console.log(str);
    count++;
    values.innerHTML = convertToRoman(str);
} */

/*    if (count > 0) {
       hasRun = true;
   }
   if (hasRun === true) {
       clearElement();
       let listItem = document.createElement("li");
       listItem.id = "values";
       document.getElementById("list").appendChild(listItem);
       console.log("true")
   } */
/*    if (count > 0) {

let val = document.getElementById("value");
val.parentNode.removeChild(val);
value.innerHTML = "";
count = 0;
hasRun = true;
} */
/*    let message = document.createElement("h2"); */

/* function clearElement() {
    /* let val = document.getElementById("values"); */
/*   let val = document.querySelector("p");
  val.parentNode.removeChild(val);
  hasRun = false; */
/*    let list = document.getElementById("list"); */
/*  val.innerHTML(''); */
/* } */ 