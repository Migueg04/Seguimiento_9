function addText() {
    let inputElement = document.getElementById("input")
    let value = inputElement.value
    if(value == "") {
        alert("Por favor escriba algo")
    } else {
        let containerElement = document.getElementById("mensaje")
        containerElement.innerHTML += "<p class='text'>" + value + "</p>"
        inputElement.value = ""
    }
}

function addText2() {
    let input2Element = document.getElementById("input2")
    let value = input2Element.value
    if(value == "") {
        alert("Por favor escriba algo")
    } else {
        let containerElement = document.getElementById("mensaje")
        containerElement.innerHTML += "<p class='text2'>" + value + "</p>"
        input2Element.value = ""
    }
}