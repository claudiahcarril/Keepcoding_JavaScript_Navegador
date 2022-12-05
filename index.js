// Guardar los gatos e ingresos como objetos:
// "Nomina": 1000€,.... (JSON.stringify)


// CALCULO "TU AHORRO"



// MOSTRAR INGRESOS Y GASTOS






const buttonSubmit = document.querySelector('.btn-submit');
buttonSubmit.addEventListener("click", () => {
    // AÑADIR NUEVA TRANSACCIÓN
    const inputConcept = document.querySelector('#input-concept')
    const inputQuantity = document.querySelector('#input-quantity')
        
    localStorage.setItem("concept", inputConcept.value)
    localStorage.setItem("quantity", inputQuantity.value)
    console.log(inputConcept.value, inputQuantity.value)

    const objInput = [{
        concept: localStorage.getItem("concept"),
        quantity: localStorage.getItem("quantity"),
    }]

    // HISTORIAL
    objInput.forEach(input => {
        const movementsRecord = document.getElementById("movements-record")
        const accountMovements = document.createElement('p')
        console.log(`${input.concept} -  ${input.quantity}`)
        accountMovements.innerText = `${input.concept} ${input.quantity}€`
    
        movementsRecord.appendChild(accountMovements)
        
    });



})














