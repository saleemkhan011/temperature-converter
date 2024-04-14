
let input = document.getElementById("textBox");
let toCelsius = document.getElementById("toCelsius");
let toFahrenheit = document.getElementById("toFahrenheit");
let result = document.getElementById("result")
let temp;

function convert(){
    if(isNaN(input.value)){

        result.textContent = `Please input a valid number!`

    }
    else if(toCelsius.checked){

        temp = Number(input.value);
        temp = temp * 9 / 5 + 32;
        result.textContent = temp.toFixed(1) + "°C"

    }
    else if(toFahrenheit.checked){

        temp = Number(input.value);
        temp = (temp -32) * (5 / 9);
        result.textContent = temp.toFixed(1) + "°F"

    }
    else{
        result.textContent = `Please select any unit.`
    }
}