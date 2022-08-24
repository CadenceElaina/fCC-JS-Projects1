const btn = document.getElementById("btn");
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
