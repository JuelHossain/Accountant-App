//making document.querySelector shorter with the help of function.
function $(selector) { return document.querySelector(selector) } 
//getting all important element at first.
// main section 
// input
const incomeInput = $("#income");
const foodInput = $("#food");
const rentInput = $("#rent");
const clothesInput = $("#clothes");
const calculateButton = $("#calculate");

// output 
const expenses = $("#expenses");
const balances = $("#balances");

//save section
// input 
const saveInput = $("#save");
const saveButton = $("#save-btn");
// output 
const savingAmount = $("#saving-amount");
const remainingBalances = $("#remaining-balances");

// errrorrr
const errorIncome = $("#errorincome");
const errorFood = $("#errorfood");
const errorRent = $("#errorrent");
const errorClothes = $("#errorclothes");
const errorSave = $("#errorsave");




calculateButton.addEventListener("click", function () {
    //getting the values of expenses.
let food = +foodInput.value;
let rent = +rentInput.value;
let clothes = +clothesInput.value;
let income = +incomeInput.value;
//calculating the expenses.
let totalExpenses = food + rent + clothes;
//now calucaling the remaining balances after cutting the expenses;
    let remBalances = (income - totalExpenses);
    // pushing result to the output
    expenses.innerHTML = totalExpenses;
    balances.innerHTML = remBalances;
});

saveButton.addEventListener("click", function () {
    let save = +saveInput.value;
    let income = +incomeInput.value;


})