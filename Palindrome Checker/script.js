const input = document.getElementById("text-input");
const button = document.getElementById("check-btn");
const result = document.getElementById("result");

function isPalindrome(inputString){

    const regText = inputString.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    const invinputString = regText.split("").reverse().join("");
    console.log(regText)
    console.log(invinputString)
    return (regText === invinputString) ? true : false;
}

function check(inputString){
    if(inputString === ""){
        alert("Please input a value");
        return;
    }else{
        result.removeAttribute("hidden")
        result.innerText = (isPalindrome(inputString)) ? `${input.value} is a palindrome` : `${input.value} is not a palindrome`;
    }
}

button.addEventListener("click", () =>{
    check(input.value)
})