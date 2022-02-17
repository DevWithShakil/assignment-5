// Calculation part

function allIntegerValue() {
    const incomeValue = document.getElementById('totalIncome').value;
    const incomeValueInteger = parseInt(incomeValue);
    const foodValue = document.getElementById('foodCost').value;
    const foodValueInteger = parseInt(foodValue);
    const rentValue = document.getElementById('rentCost').value;
    const rentValueInteger = parseInt(rentValue);
    const clothValue = document.getElementById('clothCost').value;
    const clothValueInteger = parseInt(clothValue);
    const totalCost = foodValueInteger + rentValueInteger + clothValueInteger;
    const subtraction = incomeValueInteger - totalCost;
    const expenseValue = document.getElementById('totalExpense');
    expenseValue.innerText = totalCost;
    const balanceValue = document.getElementById('totalBalance');
    balanceValue.innerText = subtraction;
    return subtraction;
};

document.getElementById("totalCalculate").addEventListener("click", function () {
    allIntegerValue();
});

// Savings part
document.getElementById('saveButton').addEventListener('click', function () {
    const incomeValue = document.getElementById('totalIncome').value;
    const incomeValueInteger = parseInt(incomeValue);
    const percentInputValue = document.getElementById('percentInput').value;
    const peecentInputData = parseInt(percentInputValue);
    const percentValue = incomeValueInteger * peecentInputData;
    const finalPercent = percentValue / 100;
    const savingAmountValue = document.getElementById('savingAmount');
    savingAmountValue.innerText = finalPercent;
    const remainingBalanceTotal = document.getElementById('remainingBalance');
    remainingBalanceTotal.innerText = allIntegerValue() - finalPercent;

})

// error message in foodCost box

function errorMessage() {
    var error = document.getElementById("error")
    if (isNaN(document.getElementById("foodCost").value)) {

        // Changing HTML to draw attention
        error.innerHTML = "<span style='color: red;'>" +
            "Please enter a valid number </span>"
    } else {
        error.innerHTML = ""
    }
}

// error message in clotheCost for input field is empty
function emptyError() {
    const message = document.getElementById("p01");
    message.innerHTML = "";
    let x = document.getElementById("percentInput").value;
    try { 
      if(x == "")  throw "<span style='color: red;'>" + " Input is empty </span>" 
    }
    catch(err) {
      message.innerHTML = "" + err;
    }
  }