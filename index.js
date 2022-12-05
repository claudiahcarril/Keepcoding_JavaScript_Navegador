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


    // HISTORIAL
    const movementsRecord = document.getElementById("movements-record")
    const accountMovements = document.createElement('p')
    accountMovements.innerText = localStorage.inputConcept
    
    movementsRecord.appendChild(accountMovements)



})














