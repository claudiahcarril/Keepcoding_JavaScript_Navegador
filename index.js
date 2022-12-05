// Guardar los gatos e ingresos como objetos:
// "Nomina": 1000€,.... (JSON.stringify)


// CALCULO "TU AHORRO"



// MOSTRAR INGRESOS Y GASTOS




// HISTORIAL
function showMovements() {
    const movementsRecord = document.getElementById("movements-record")
    const accountMovements = document.createElement('p')
    movementsRecord.appendChild(accountMovements)
}






// AÑADIR NUEVA TRANSACCIÓN

const buttonSubmit = document.querySelector('.btn-submit');
const inputConcept = document.querySelector('#input-concept')
const inputQuantity = document.querySelector('#input-quantity')

function buttonClicked() {
    localStorage.setItem("concept", inputConcept.value)
    localStorage.setItem("quantity", inputQuantity.value)
    console.log(inputConcept, inputQuantity)
}



buttonSubmit.addEventListener("click", buttonClicked)

