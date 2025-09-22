function getTemperatureFahrenheit(celsius) {
    return (celsius * (9/5) + 32);
}
function getTemperatureKelvin(celsius) {
  return parseFloat(celsius) + 273.15;
}
function temperatureDisplay() {
    const inputValue = document.getElementById("temperatureInput").value;
        
    if (inputValue === "" || isNaN(inputValue)) {
        alert("Please enter a valid number");
        return;
    }   
    const tempCelsius = parseFloat(inputValue);
    const tempFahrenheit = getTemperatureFahrenheit(tempCelsius);
    const tempKelvin = getTemperatureKelvin(tempCelsius);

    document.getElementById("celsiusResult").textContent = tempCelsius.toFixed(2) + " °C";
    document.getElementById("fahrenheitResult").textContent = tempFahrenheit.toFixed(2) + " °F";
    document.getElementById("kelvinResult").textContent = tempKelvin.toFixed(2) + " K";
    }

    document.getElementById("convertBtn").addEventListener("click", temperatureDisplay);