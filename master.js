//making document.querySelector shorter with the help of function.
function $(selector) { return document.querySelector(selector) } 

// main section input
const incomeInput = $("#income");
const foodInput = $("#food");
const rentInput = $("#rent");
const clothesInput = $("#clothes");

// output 
const expenses = $("#expenses");
const balances = $("#balances");

//save section input
const saveInput = $("#save");

// output 
const savingAmount = $("#saving-amount");
const remainingBalance = $("#remaining-balances");

// buttons 
const calculateButton = $("#calculate");
const saveButton = $("#save-btn");

// errrorrr handler
const errorIncome = $("#errorincome");
const errorFood = $("#errorfood");
const errorRent = $("#errorrent");
const errorClothes = $("#errorclothes");
const errorSave = $("#errorsave");

// this is the changes i want to do when the field is invalid.

calculateButton.addEventListener("click", function () {
    function showError(inputField, errorField, errorMessage) {
        inputField.style.border ='1px solid red'
        errorField.style.display = 'inline';
        errorField.innerText = errorMessage;
}
// this is the changes i want to remove when field is valid.
function removeError(inputField, errorField) {
        inputField.style.border ='1px solid black'
        errorField.style.display = 'none';
        errorField.innerText = ""
}
function totalExpenses() {
    //getting the values of expenses.
    let food = +foodInput.value;
    let rent = +rentInput.value;
    let clothes = +clothesInput.value;
    
    if (food < 0 || rent < 0 || clothes < 0) {
        let value = 0;
        if (food < 0) {
            showError(foodInput, errorFood, 'no food expenses')
        } if (rent < 0) {
            showError(rentInput, errorRent, 'no rent has been given');
        } if (clothes < 0) {
            showError(clothesInput, errorClothes, 'no clothes have been bought')
        }
        return 0;
    }else {
        return food + rent + clothes;
    }
}
function rembalances() {
    let income = +incomeInput.value;
    incomeInput.addEventListener('input', function () {
        removeError(incomeInput, errorIncome);
    })
    if (income == "") {
        return showError(incomeInput,errorIncome,'You must fill this field')
    } else if (income < 0) {
        return showError(incomeInput,errorIncome,"You don't have enough income")
    } else {
        return income - totalExpenses();
    }
}
    if (errorIncome=== 'inline') {
        balances.innerText = 'something is wrong!'
    } else {
        expenses.innerHTML = totalExpenses();
        balances.innerHTML = rembalances();
    }
});

function totalSavings() {
    let save = +saveInput.value;
    let income = +incomeInput.value;
    return (income / 100) * save;
};
function remainingBalances() {
    return rembalances() - totalSavings();
}

saveButton.addEventListener("click", function () {
    savingAmount.innerHTML = totalSavings();
    remainingBalance.innerHTML = remainingBalances();
});