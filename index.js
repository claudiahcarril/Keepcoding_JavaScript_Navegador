let objFinal = []
let cont = 0
let savings = 0
let sumIncome = 0
let sumExpense = 0


function showLocalStorage() {
    let obj = localStorage.getItem("movements")
    if (obj != null) {
        objFinal = JSON.parse(obj)
    }
}

showLocalStorage()

showSaving(savings)
calculateSaving()
showIncomeExpense(sumIncome, sumExpense)

calculateIncomeExpense()

objFinal.forEach(n => showRecords(n)) 

const buttonSubmit = document.querySelector(".btn-submit");
buttonSubmit.addEventListener("click", () => {
    const inputConcept = document.querySelector("#input-concept")
    const inputQuantity = document.querySelector("#input-quantity")
    
    const objInput = {
        concept: inputConcept.value,
        quantity: inputQuantity.value,
        id: cont++,
    }

    showRecords(objInput)
    objFinal.push(objInput)

    inputConcept.value = ""
    inputQuantity.value = ""

    calculateSaving()
    calculateIncomeExpense()
   
    localStorage.setItem("movements", JSON.stringify(objFinal))
})

// Calculate saving
function calculateSaving() {
    let savings = objFinal.reduce((sum, value) => sum + parseFloat(value.quantity), 0)
    const savingParragraph = document.querySelector(".savingParragraph")
    savingParragraph.innerText = `${savings.toFixed(2)}€`    
}


// Show saving
function showSaving(savings) {
    const saving = document.querySelector(".all-savings")
    const savingParragraph = document.createElement("p")
    savingParragraph.classList.add("savingParragraph")
    savingParragraph.innerText = `${savings.toFixed(2)}€`
    saving.appendChild(savingParragraph) 
}


// Show sumIncome and sumExpense
function showIncomeExpense(sumIncome, sumExpense) {
    const income = document.querySelector(".incomeQuantity")
    const incomeParragraph = document.createElement("p")
    incomeParragraph.classList.add("incomeParragraph")
    incomeParragraph.innerText = `${sumIncome.toFixed(2)}€`
    income.appendChild(incomeParragraph)

    const expense = document.querySelector(".expenseQuantity")
    const expenseParragraph = document.createElement("p")
    expenseParragraph.classList.add("expenseParragraph")
    expenseParragraph.innerText = `${sumExpense.toFixed(2)}€`
    expense.appendChild(expenseParragraph)
}


// Show history records
function showRecords(objInput) {
    let numQuantity = 0
    const movementsRecord = document.getElementById("movements-record")
    const accountMovements = document.createElement("div")
    accountMovements.id = objInput.id
    accountMovements.classList.add("divRecords")
    numQuantity = parseFloat(objInput.quantity)
    accountMovements.innerHTML = `
    <p>${objInput.concept}</p> 
    <p>${numQuantity.toFixed(2)}€</p>
    `
    
            
    if (numQuantity > 0) {
        accountMovements.classList.add("divRecordsPositive")
    } else {
        accountMovements.classList.add("divRecordsNegative")
    }
    movementsRecord.appendChild(accountMovements)

    accountMovements.addEventListener("click", () => {
        deleteRecord(accountMovements)
    })   
}


// Calculate Income and Expense
function calculateIncomeExpense(){
    let arraySumIncome = []
    let arraySumExpense = []

    for (let i = 0; i < objFinal.length; i++) {
        if (parseFloat(objFinal[i].quantity) > 0) {
            arraySumIncome.push(parseFloat(objFinal[i].quantity))
        } else {
            arraySumExpense.push(parseFloat(objFinal[i].quantity))
        }
    }

    let sumIncome = arraySumIncome.reduce((sum, value) => sum + value, 0)
    const incomeParragraph = document.querySelector(".incomeParragraph")
    incomeParragraph.innerText = `${sumIncome.toFixed(2)}€` 

    let sumExpense = arraySumExpense.reduce((sum, value) => sum + value, 0)
    const expenseParragraph = document.querySelector(".expenseParragraph")
    expenseParragraph.innerText = `${sumExpense.toFixed(2)}€` 

}


// Delete record
export function deleteRecord(accountMovements) {
    accountMovements.remove()
    let idInput = accountMovements.id
        
    for (let i = 0; i < objFinal.length; i++) {
        if (parseFloat(idInput) === objFinal[i].id) {
            objFinal.splice(i, 1)
        }
    }

    localStorage.setItem("movements", JSON.stringify(objFinal))

    calculateIncomeExpense()
    calculateSaving()
}

