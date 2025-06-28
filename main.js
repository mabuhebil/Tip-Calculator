const Input_bill = document.getElementById('bill-input');

const Range_inputs = document.querySelectorAll('input[ type="range"]')

Range_inputs.forEach((input) => {
    input.addEventListener('input', calculate)

})

Input_bill.addEventListener('change', calculate)

function calculate() {
    let bill = parseFloat(Input_bill.value)

    let tipPercent = document.querySelector('.tippercent').value;

    let noOfPeole = document.querySelector(".no-of-people").value;

    let tolatTip = parseFloat((bill * (tipPercent / 100))).toFixed(2);

    let total = (+bill + +tolatTip).toFixed(2);

    let tipPerPerson = (tolatTip / noOfPeole).toFixed(2);
    let totalPerPerson = (total / noOfPeole).toFixed(2);

    console.log(tipPerPerson, totalPerPerson)

    document.querySelector('.tip-value').
        textContent = `\$ ${tolatTip}`;

    document.querySelector('.amount').
        textContent = `\$ ${total}`;

    document.querySelector('.tip-percent').
        textContent = `% ${tipPercent}`

    document.querySelector('.people').
        textContent = noOfPeole;


    document.querySelector('.tip_per_person').
        textContent = `\$ ${tipPerPerson}`;


    document.querySelector('.total_per_person').
        textContent = `\$ ${totalPerPerson}`;
}