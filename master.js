//making document.querySelector shorter with the help of function.
function $(selector) { return document.querySelector(selector) } 

// main section input
const incomeInput = $("#income");
const foodInput = $("#food");
const rentInput = $("#rent");
const clothesInput = $("#clothes");

// output 
const expensesOutput = $("#expenses");
const balancesOutput = $("#balances");

//save section input
const saveInput = $("#save");

// output 
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

function income() {
    return +incomeInput.value;
}
function expenses() {
    let food = +foodInput.value;
    let rent = +rentInput.value;
    let clothes = +clothesInput.value;
    return food + rent + clothes;
}
function balances() {
    return income() - expenses();
}
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
incomeInput.addEventListener('input', function () {
    if (incomeInput.value < 0) {
        showError(incomeInput, errorIncome, "You don't have enough income");
        incomeInput.value = "";
    } else {
        removeError(incomeInput, errorIncome);
    }
});
foodInput.addEventListener('input', function () {
        if (foodInput.value < 0) {
            showError(foodInput, errorFood, 'no food expenses');
            foodInput.value = "";
        } else {
            removeError(foodInput, errorFood);
        }
    });
rentInput.addEventListener('input', function () {
            if (rentInput.value < 0) {
                showError(rentInput, errorRent, 'no rent has been given');
                rentInput.value = "";
            } else {
                removeError(rentInput, errorRent);
            }
        });
clothesInput.addEventListener('input', function () {
            if (clothesInput.value < 0) {
                showError(clothesInput, errorClothes, 'no rent has been given');
                clothesInput.value = "";
            } else {
                removeError(clothesInput, errorClothes);
            }
});
saveInput.addEventListener('input', function () {
    if (saveInput.value < 0) {
        showError(saveInput, errorSave, 'invalid');
        saveInput.value = "";
    } else {
        removeError(saveInput, errorSave);
            }
        })

calculateButton.addEventListener("click", function () {

    if (income() == "") {
        showError(incomeInput, errorIncome, "This field cannot be empty");
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
function savingAmount() {
    let save = +saveInput.value;
    let income = +incomeInput.value;
    return (income / 100) * save;
}
function remainingBalances() {
    return balances() - savingAmount();
}
saveButton.addEventListener("click", function () {
    if (income() == "") {
        showError(saveInput, errorSave, "not Enough Income");
        output(savingAmountOutput, "");
        output(remainingBalanceOutput, "");
    } else if (saveInput.value == "") {
        showError(saveInput, errorSave, "need percentage");
        output(savingAmountOutput, "");
        output(remainingBalanceOutput, "");
    }else if (savingAmount()>balances()) {
        showError(saveInput, errorSave, "not Enough Balances");
        output(savingAmountOutput, "");
        output(remainingBalanceOutput, "");
    } else {
        output(savingAmountOutput, savingAmount());
        output(remainingBalanceOutput, remainingBalances());
    }
});