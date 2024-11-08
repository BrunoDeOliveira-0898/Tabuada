// Seleção de elementos
const multiplicationForm = document.querySelector("#multi-form")
const numberInput = document.querySelector("#number")
const multiplicationInput = document.querySelector("#multiplicator")

const multiTitle = document.querySelector("#multi-title span")

const multiTable = document.querySelector("#multi-operation")

// funções
const createTable = (number, multiplicatorNumber) => {
    

    multiTable.innerHTML = "";

    for (i = 1; i <= multiplicatorNumber; i++) {
        const result = number * i
        const template = `<div class="row">
        <div class="operation">${number} x ${i} = </div>
        <div class="result">${result}</div>
        </div>`;

        const parser = new DOMParser()
        const htmlTemplate = parser.parseFromString(template, "text/html")
        const row = htmlTemplate.querySelector(".row")

        multiTable.appendChild(row)
    }

    multiTitle.innerText = number;
};
// Eventos

multiplicationForm.addEventListener("submit", (e) => {
    e.preventDefault()

    const multiplicationNumber = +numberInput.value;

    const multiplicatorNumber = +multiplicationInput.value;

    if(!multiplicationNumber || !multiplicatorNumber) return;

    createTable(multiplicationNumber, multiplicatorNumber);
})
