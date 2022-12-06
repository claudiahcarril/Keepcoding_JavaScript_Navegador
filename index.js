// Guardar los gatos e ingresos como objetos:
// "Nomina": 1000€,.... (JSON.stringify)


// MOSTRAR INGRESOS Y GASTOS (0.00€)
let savings = 0
const saving = document.querySelector('.all-savings')
const savingParragraph = document.createElement('p')
savingParragraph.innerText = `${savings.toFixed(2)}€`
saving.appendChild(savingParragraph)


let sumIncome = 0
const income = document.querySelector('.incomeQuantity')
const incomeParragraph = document.createElement('p')
incomeParragraph.innerText = `${sumIncome.toFixed(2)}€`
income.appendChild(incomeParragraph)

let sumExpense = 0
const expense = document.querySelector('.expenseQuantity')
const expenseParragraph = document.createElement('p')
expenseParragraph.innerText = `${sumExpense.toFixed(2)}€`
expense.appendChild(expenseParragraph)


const buttonSubmit = document.querySelector('.btn-submit');
buttonSubmit.addEventListener("click", () => {
    // AÑADIR NUEVA TRANSACCIÓN
    const inputConcept = document.querySelector('#input-concept')
    const inputQuantity = document.querySelector('#input-quantity')
    
    localStorage.setItem("concept", inputConcept.value)
    localStorage.setItem("quantity", inputQuantity.value)

    const objInput = [{
        concept: localStorage.getItem("concept"),
        quantity: localStorage.getItem("quantity"),
    }]
    

    // HISTORIAL
    let numQuantity = 0

    objInput.forEach(input => {
        const movementsRecord = document.getElementById("movements-record")
        const accountMovements = document.createElement('div')
        accountMovements.innerHTML = `
        <p>${input.concept}</p> 
        <p>${input.quantity}€</p>
        `
        // Pasar de string a number input.quantity
        numQuantity = parseInt(input.quantity)

        if (numQuantity > 0) {
            accountMovements.classList.add("divRecordsPositive")
            sumIncome = sumIncome + numQuantity
            incomeParragraph.innerText = `${sumIncome}€`
        } else {
            accountMovements.classList.add("divRecordsNegative")
            sumExpense += numQuantity
            console.log(sumExpense)
            expenseParragraph.innerText = `${sumExpense}€`
        }

        movementsRecord.appendChild(accountMovements)
        
    });
    
    inputConcept.value = ""
    inputQuantity.value = ""
   
    
    // CALCULO "TU AHORRO"
    sumExpense = sumExpense * -1
    savings = sumIncome - sumExpense
    savingParragraph.innerText = `${savings.toFixed(2)}€`
})    














