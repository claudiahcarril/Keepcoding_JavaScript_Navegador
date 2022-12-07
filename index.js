import {showSaving, showIncomeExpense, deleteRecord, showRecords, calculateIncomeExpense, calculateSaving} from './modules.js'

let objFinal = []
let cont = 0
let savings = 0

console.log(objFinal.length)

// MOSTRAR INGRESOS Y GASTOS (0.00€)

savings = calculateSaving(objFinal)
showSaving(savings)
showIncomeExpense()


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
    showRecords(objInput)

    objFinal.push(objInput)

    inputConcept.value = ""
    inputQuantity.value = ""

    console.log(objFinal.length)

    calculateSaving(objFinal)
    calculateIncomeExpense(objFinal)

    // savings = sumIncome + sumExpense
    // savingParragraph.innerText = `${savings.toFixed(2)}€`
    
    localStorage.setItem("movements", JSON.stringify(objFinal))
    

})

// deleteRecord(accountMovements, objFinal)









