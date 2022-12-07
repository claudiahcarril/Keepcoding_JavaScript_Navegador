// Calculate saving
export function calculateSaving(objFinal) {
    let savings
    if (objFinal.length === 0) {
        return savings = 0
    } else {
        savings = objFinal.reduce((sum, value) => sum + value.quantity, 0)
        const savingParragraph = document.querySelector(".savingParragraph")
        const newSavings = parseInt(savings)
        savingParragraph.innerText = `${newSavings.toFixed(2)}€`
        return savings
    }
}


// Show saving
export function showSaving(savings) {
    const saving = document.querySelector(".all-savings")
    const savingParragraph = document.createElement("p")
    savingParragraph.classList.add("savingParragraph")
    savingParragraph.innerText = `${savings.toFixed(2)}€`
    saving.appendChild(savingParragraph) 
}


// Show sumIncome and sumExpense
export function showIncomeExpense() {
    let sumIncome = 0
    let sumExpense = 0
    
    const income = document.querySelector(".incomeQuantity")
    const incomeParragraph = document.createElement("p")
    incomeParragraph.innerText = `${sumIncome.toFixed(2)}€`
    income.appendChild(incomeParragraph)

    const expense = document.querySelector(".expenseQuantity")
    const expenseParragraph = document.createElement("p")
    expenseParragraph.innerText = `${sumExpense.toFixed(2)}€`
    expense.appendChild(expenseParragraph)

}

// Calculate Income and Expense
export function calculateIncomeExpense(objFinal){
    let sumIncome = 0
    let sumExpense = 0

    for (let i = 0; i < objFinal.length; i++) {
        if (objFinal.length === 0) {
            sumIncome = 0
            sumExpense = 0
        } else if (objFinal[i].quantity > 0) {
            sumIncome = objFinal.reduce((sum, value) => sum + value.quantity, 0)
        } else {
            sumExpense = objFinal.reduce((sum, value) => sum + value.quantity, 0)
        }
                
    }
}



// Show history records
export function showRecords(objInput) {
    const movementsRecord = document.getElementById("movements-record")
    let numQuantity = 0
    
    const accountMovements = document.createElement("div")
    accountMovements.id = objInput.id
    accountMovements.classList.add("divRecords")
    accountMovements.innerHTML = `
    <p>${objInput.concept}</p> 
    <p>${objInput.quantity}€</p>
    `
    numQuantity = parseInt(objInput.quantity)
            
    if (numQuantity > 0) {
        accountMovements.classList.add("divRecordsPositive")
        // incomeParragraph.innerText = `${sumIncome.toFixed(2)}€`
    } else {
        accountMovements.classList.add("divRecordsNegative")
        // expenseParragraph.innerText = `${sumExpense.toFixed(2)}€`
    }

    movementsRecord.appendChild(accountMovements)
    
}


// Delete record
export function deleteRecord(accountMovements, objFinal) {
    let idInput = ""
    accountMovements.addEventListener("click", () => {
        accountMovements.parentNode.removeChild(accountMovements)
        idInput = accountMovements.id
        console.log(idInput)
        
        for (let i = 0; i < objFinal.length; i++) {
            if (idInput === objFinal[i].id) {
                let finalAmount = parseInt(objFinal[i].quantity)
                savings = savings + finalAmount
            }
            
        }
        console.log("savings", savings)
    

    })
}