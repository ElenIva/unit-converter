/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const convertBtn = document.getElementById("convert-btn")
const numberEl = document.getElementById("number-inp")
const lengthEl = document.getElementById("length-p")
const volumeEl = document.getElementById("volume-p")
const massEl = document.getElementById("mass-p")

let lengthM = 0
let volumeM = 0
let massM = 0
let lengthI = 0
let volumeI = 0
let massI = 0

convertBtn.addEventListener("click", function(){
    console.log(numberEl.value)
    if (numberEl.value) {
        lengthM = (Number(numberEl.value) * 3.281).toFixed(3)
        volumeM = (Number(numberEl.value) * 0.264).toFixed(3)
        massM = (Number(numberEl.value) * 2.204).toFixed(3)
        lengthI = (Number(numberEl.value) / 3.281).toFixed(3)
        volumeI = (Number(numberEl.value) / 0.264).toFixed(3)
        massI = (Number(numberEl.value) / 2.204).toFixed(3)

        lengthEl.innerHTML = `${numberEl.value} meters = ${lengthM} feet | ${numberEl.value} feet = ${lengthI} meters`
        volumeEl.innerHTML = `${numberEl.value} liters = ${volumeM} gallons | ${numberEl.value} gallons = ${volumeI} liters`
        massEl.innerHTML = `${numberEl.value} kilos = ${massM} pouns | ${numberEl.value} pounds = ${massI} kilos`
    }
    else {
        lengthEl.textContent = ""
        volumeEl.textContent = ""
        massEl.textContent = ""
    }
})