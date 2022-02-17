//making document.querySelector shorter with the help of function.
function $(selector) { return document.querySelector(selector) } 

// main section input field
const incomeInput = $("#income");
const foodInput = $("#food");
const rentInput = $("#rent");
const clothesInput = $("#clothes");

// output field
const expensesOutput = $("#expenses");
const balancesOutput = $("#balances");

//save section input field.
const saveInput = $("#save");

// output field
const savingAmountOutput = $("#saving-amount");
const remainingBalanceOutput = $("#remaining-balances");

// buttons 
const calculateButton = $("#calculate");
const saveButton = $("#save-btn");

// errrorrr handler
const errorIncome = $("#errorincome");
const errorFood = $("#errorfood");
const errorRent = $("#errorrent");
const errorClothes = $("#errorclothes");
const errorSave = $("#errorsave");

// this function returns total income.
function income() {
    return +incomeInput.value;
}
// this function returns total expenses.
function expenses() {
    let food = +foodInput.value;
    let rent = +rentInput.value;
    let clothes = +clothesInput.value;
    return food + rent + clothes;
}
// this function returns balances after cutting the expenses.
function balances() {
    return income() - expenses();
}
// this function returns total saving ammount from total income.
function savingAmount() {
    let save = +saveInput.value;
    let income = +incomeInput.value;
    return (income / 100) * save;
}
// this function returns remaining balances after cuttin the saving amount
function remainingBalances() {
    return balances() - savingAmount();
}
//this function is about pushing calculated data into output field.
function output(field,inner) {
    return field.innerText = inner;
}
// this is the changes i want to do when the field is invalid.
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
// event handling start here 
incomeInput.addEventListener('input', function () {
    if (incomeInput.value < 0) {
        showError(incomeInput, errorIncome, "So You lost your Job?");
        incomeInput.value = "";
    } else {
        removeError(incomeInput, errorIncome);
        removeError(saveInput, errorSave);
    }
});
foodInput.addEventListener('input', function () {
    if (foodInput.value < 0) {
        showError(foodInput, errorFood, "Don't you eat food?");
        foodInput.value = "";
    } else {
        removeError(foodInput, errorFood);
    }
});
rentInput.addEventListener('input', function () {
    if (rentInput.value < 0) {
        showError(rentInput, errorRent, 'Did You gave Your rent?');
        rentInput.value = "";
    } else {
        removeError(rentInput, errorRent);
    }
});
clothesInput.addEventListener('input', function () {
    if (clothesInput.value < 0) {
        showError(clothesInput, errorClothes, 'buy some clothes please!');
        clothesInput.value = "";
    } else {
        removeError(clothesInput, errorClothes);
    }
});
saveInput.addEventListener('input', function () {
    if (saveInput.value < 0) {
        showError(saveInput, errorSave, 'I Hate Negative');
        saveInput.value = "";
    } else {
        removeError(saveInput, errorSave);
    }
});
calculateButton.addEventListener("click", function () {

    if (income() == "") {
        showError(incomeInput, errorIncome, "Not enough income");
        output(expensesOutput, "");
        output(balancesOutput, "");
    } else if (expenses() > income()) {
        showError(incomeInput, errorIncome, "Not Enough Income");
        output(expensesOutput, "");
        output(balancesOutput, "");
    } else {
        output(balancesOutput, balances());
        output(expensesOutput, expenses());
    }
});
saveButton.addEventListener("click", function () {
    if (income() == "") {
        showError(saveInput, errorSave, "Not enough Income");
        output(savingAmountOutput, "");
        output(remainingBalanceOutput, "");
    } else if (saveInput.value == "") {
        showError(saveInput, errorSave, "Need Percentage");
        output(savingAmountOutput, "");
        output(remainingBalanceOutput, "");
    }else if (savingAmount()>balances()) {
        showError(saveInput, errorSave, "Not enough Balances");
        output(savingAmountOutput, "");
        output(remainingBalanceOutput, "");
    } else {
        output(savingAmountOutput, savingAmount());
        output(remainingBalanceOutput, remainingBalances());
    }
});

// this project is ended here
// thanks.