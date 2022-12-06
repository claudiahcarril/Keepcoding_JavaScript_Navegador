// Guardar los gatos e ingresos como objetos:
// "Nomina": 1000€,.... (JSON.stringify)


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
    let sumIncome = 0
    let sumExpense = 0

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
            sumIncome += numQuantity
        } else {
            accountMovements.classList.add("divRecordsNegative")
            sumExpense += numQuantity
        }

        movementsRecord.appendChild(accountMovements)
        
    });
    
    inputConcept.value = ""
    inputQuantity.value = ""

    // MOSTRAR INGRESOS Y GASTOS
    console.log(numQuantity)
    const income = document.getElementsByClassName('incomeDiv')
    const expense = document.getElementsByClassName('expenseDiv')
    const saveNumber = document.createElement('p')




    saveNumber.innerText = `${}€`
    income.appendChild(saveNumber)

    
    
    
    
    // CALCULO "TU AHORRO"
    
})    














