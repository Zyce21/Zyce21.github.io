let displayValue = '';

function appendToDisplay(value) {
    displayValue += value;
    document.getElementById('display').value = displayValue;
}

function clearDisplay() {
    displayValue = '';
    document.getElementById('display').value = '';
}

function calculate() {
    try {
        displayValue = eval(displayValue);
        document.getElementById('display').value = displayValue;
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}

function changeBackgroundColor() {
    const body = document.body;
    const colors = ['#3498db', '#e74c3c', '#2ecc71', '#f39c12', '#3498db'];
    let index = 0;

    setInterval(() => {
        body.style.backgroundColor = colors[index];
        index = (index + 1) % colors.length;
    }, 5000); 
}

window.onload = changeBackgroundColor;