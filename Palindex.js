const input = document.getElementById("string"); //input const  
const btn = document.getElementById("btn");     //button const

function palindrome(str) {
    const alphanumbericOnly = str
        .toLowerCase()
        .match(/[a-z0-9]/g)

    return alphanumbericOnly.join('') === alphanumbericOnly.reverse().join('');
}

palindrome("e$ye");
function test() {
    let str = document.getElementById("string").value;
    let value = document.getElementById("value");
    console.log(str);
    if (palindrome(str)) {
        return value.innerHTML = str + " is a palindrome!";
    }
    else {
        return value.innerHTML = str + " is not a palindrome!";
    };
}
//Allows user to type in a value into input and if they click enter it returns the function run on click.


// Execute a function when the user presses a key on the keyboard
input.addEventListener("keypress", function (event) {
    // If the user presses the "Enter" key on the keyboard
    if (event.key === "Enter") {
        // Cancel the default action, if needed
        event.preventDefault();
        // Trigger the button element with a click
        document.getElementById("btn").click();
    }
});