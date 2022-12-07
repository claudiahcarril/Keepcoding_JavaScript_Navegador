let objFinal = []
let cont = 0

// MOSTRAR INGRESOS Y GASTOS (0.00€)
let savings = 0
const saving = document.querySelector(".all-savings")
const savingParragraph = document.createElement("p")
savingParragraph.innerText = `${savings.toFixed(2)}€`
saving.appendChild(savingParragraph)


let sumIncome = 0
const income = document.querySelector(".incomeQuantity")
const incomeParragraph = document.createElement("p")
incomeParragraph.innerText = `${sumIncome.toFixed(2)}€`
income.appendChild(incomeParragraph)

let sumExpense = 0
const expense = document.querySelector(".expenseQuantity")
const expenseParragraph = document.createElement("p")
expenseParragraph.innerText = `${sumExpense.toFixed(2)}€`
expense.appendChild(expenseParragraph)



const movementsRecord = document.getElementById("movements-record")
const buttonSubmit = document.querySelector(".btn-submit");

buttonSubmit.addEventListener("click", () => {
    // AÑADIR NUEVA TRANSACCIÓN
    const inputConcept = document.querySelector("#input-concept")
    const inputQuantity = document.querySelector("#input-quantity")
    
    const objInput = {
        concept: inputConcept.value,
        quantity: inputQuantity.value,
        id: cont++,
    }
    
    
    // HISTORIAL
    let numQuantity = 0
    let idInput = ""
    
    const accountMovements = document.createElement("div")
    accountMovements.id = objInput.id
    accountMovements.classList.add("divRecords")
    accountMovements.innerHTML = `
    <p>${objInput.concept}</p> 
    <p>${objInput.quantity}€</p>
    `
    numQuantity = parseInt(objInput.quantity)
    
    objFinal.push(objInput)
        
    if (numQuantity > 0) {
        accountMovements.classList.add("divRecordsPositive")
        sumIncome = sumIncome + numQuantity
        incomeParragraph.innerText = `${sumIncome.toFixed(2)}€`
    } else {
        accountMovements.classList.add("divRecordsNegative")
        sumExpense += numQuantity
        expenseParragraph.innerText = `${sumExpense.toFixed(2)}€`
    }

    movementsRecord.appendChild(accountMovements)
    


    inputConcept.value = ""
    inputQuantity.value = ""


    savings = sumIncome + sumExpense
    savingParragraph.innerText = `${savings.toFixed(2)}€`
    

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
    
    localStorage.setItem("movements", JSON.stringify(objFinal))
    
    
    inputConcept.value = ""
    inputQuantity.value = ""

})










