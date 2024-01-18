function appendValue(value) {
    document.getElementById('display').value += value;
}

function calculate() {
    try {
        document.getElementById('display').value = Function('return ' + document.getElementById('display').value)();
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function appendPercentage() {
    const currentValue = document.getElementById('display').value;
    const percentageValue = parseFloat(currentValue) / 100;
    document.getElementById('display').value = percentageValue;
}