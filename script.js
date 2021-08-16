const dateOfBirth = document.querySelector("#date-of-birth");
const luckuNumber = document.querySelector("#lucky-number");
const checkNumberButton = document.querySelector("#check-number");
const outputBox = document.querySelector("#output-box")


function compareValues(sum, luckyNumber) {
    if (sum % luckyNumber === 0) {
        outputBox.innerText = "Your birthday is lucky 😀";
    } else {
        outputBox.innerText = "Your birthday is not lucky 😏";
    }
}


function checkBirthDateIsLucky() {
    const dob = dateOfBirth.value;
    const sum = calculateSum(dob);
    if (dob && sum) {
        compareValues(sum, luckuNumber.value)
    }
    else {
        outputBox.innerText = "Please enter both the filed 😞"
    }
}

function calculateSum(dob) {
    dob = dob.replaceAll("-", "");
    let sum = 0;
    for (let index = 0; index < dob.length; index++) {
        sum = sum + Number(dob.charAt(index))
    }
    return sum;
}



checkNumberButton.addEventListener("click", checkBirthDateIsLucky)