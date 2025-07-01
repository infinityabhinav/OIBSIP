function convertTemperature() {
  const input = document.getElementById('tempInput').value;
  const fromUnit = document.getElementById('fromUnit').value;
  const toUnit = document.getElementById('toUnit').value;
  const resultDiv = document.getElementById('result');

  if (input === '' || isNaN(input)) {
    resultDiv.innerText = "Please enter a valid number.";
    return;
  }

  const temp = parseFloat(input);
  let result;

  if (fromUnit === toUnit) {
    result = temp;
  } else {
    // Convert from input unit to Celsius first
    let celsius;
    switch (fromUnit) {
      case 'celsius':
        celsius = temp;
        break;
      case 'fahrenheit':
        celsius = (temp - 32) * (5 / 9);
        break;
      case 'kelvin':
        celsius = temp - 273.15;
        break;
    }

    // Convert from Celsius to target unit
    switch (toUnit) {
      case 'celsius':
        result = celsius;
        break;
      case 'fahrenheit':
        result = (celsius * 9 / 5) + 32;
        break;
      case 'kelvin':
        result = celsius + 273.15;
        break;
    }
  }

  resultDiv.innerText = `Converted: ${result.toFixed(2)}° ${unitLabel(toUnit)}`;
}

function unitLabel(unit) {
  switch (unit) {
    case 'celsius':
      return 'C';
    case 'fahrenheit':
      return 'F';
    case 'kelvin':
      return 'K';
    default:
      return '';
  }
}
