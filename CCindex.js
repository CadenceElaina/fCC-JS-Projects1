const add = document.querySelector(".add");
const remove = document.querySelector(".remove");
let result = "";
let count = 0;
let hasRun = false;
function rot13(str) {
    if (count > 0) {
        result = "";
    }
    str.toUpperCase();
    let charCode = 0;
    let strArr = [];
    strArr = str.split(""); // split the string into array
    for (let i = 0; i < strArr.length; i++) {
        charCode = strArr[i].charCodeAt();
        if (charCode >= 65 && charCode <= 90) {
            if (charCode > 77) {
                charCode = charCode - 13;
            }
            else {
                charCode = charCode + 13;
            }
            strArr.splice(i, 1, String.fromCharCode(charCode));
        }
    }
    count++;
    return strArr.join('');
}

console.log(rot13("SERR PBQR PNZC"));
add.addEventListener("click", function () {

    const cont = document.querySelector(".menu");
    /*   let input = document.querySelector(".put"); */
    let input = document.getElementById("string").value;
    console.log(input);
    const newli = document.createElement("LI");
    newli.className = "result";
    console.log(input);
    console.log(rot13(input));
    newli.innerText = rot13(input);
    //newli.innerText = input.value;
    cont.append(newli);
});

remove.addEventListener("click", function () {
    const df = document.querySelector(".menu");
    df.firstElementChild.remove();
});
