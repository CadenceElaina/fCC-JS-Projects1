const add = document.querySelector(".add");
const remove = document.querySelector(".remove");
let result = "";
function telephoneCheck(str) {
    let regex = /^1?\s?(\d{3}|\(\d{3}\))-?\s?\d{3}-?\s?\d{4}$/gm;
    return regex.test(str);
}
telephoneCheck("1 555-555-5555")

//Nav
$('.navTrigger').click(function () {
    $(this).toggleClass('active');
    console.log("Clicked menu");
    $("#mainListDiv").toggleClass("show_list");
    $("#mainListDiv").fadeIn();

});
add.addEventListener("click", function () {

    const cont = document.querySelector(".menu");
    /*   let input = document.querySelector(".put"); */
    let str = document.getElementById("string").value;
    const newli = document.createElement("LI");
    newli.className = "result";
    console.log(str);
    console.log(telephoneCheck(str));
    newli.innerText = `True or false is ${str} a valid phone number? - ${telephoneCheck(str)}`;
    //newli.innerText = input.value;
    cont.append(newli);
});

remove.addEventListener("click", function () {
    const df = document.querySelector(".menu");
    df.firstElementChild.remove();
});