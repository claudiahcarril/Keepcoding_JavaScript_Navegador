// Guardar los gatos e ingresos como objetos:
// "Nomina": 1000€,.... (JSON.stringify)


// MOSTRAR INGRESOS Y GASTOS (0.00€)
let sumIncome = parseFloat(0).toFixed(2)
const income = document.querySelector('.incomeQuantity')
const incomeParragraph = document.createElement('p')
incomeParragraph.innerText = `${sumIncome}€`
income.appendChild(incomeParragraph)

let sumExpense = parseFloat(0).toFixed(2)
const expense = document.querySelector('.expenseQuantity')
const expenseParragraph = document.createElement('p')
expenseParragraph.innerText = `${sumExpense}€`
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
            console.log(sumIncome)
        } else {
            accountMovements.classList.add("divRecordsNegative")
            sumExpense += numQuantity
            console.log(sumExpense)
        }

        movementsRecord.appendChild(accountMovements)
        
    });
    
    inputConcept.value = ""
    inputQuantity.value = ""

    // MOSTRAR INGRESOS Y GASTOS
    console.log(numQuantity)
    
    
   
    
    
    // CALCULO "TU AHORRO"
    
})    














