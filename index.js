let countElement = document.getElementById("count-element")
let saveElement = document.getElementById("save-element")

let count = 0
function incNumber() {
    count += 1
    countElement.textContent = count
}
function save() {
    let countStr = count + " - "
    saveElement.textContent += countStr
    countElement.textContent = 0
    count = 0
}