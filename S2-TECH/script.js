const buttons = document.querySelectorAll('.day-button');
const box = document.getElementById('animatedBox');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        box.style.transform = 'translateY(-500px)';

        setTimeout(() => {
            const color = button.getAttribute('data-color');
            box.style.borderColor = color;
            box.style.transform = 'translateY(0)';
        }, 500);
    });
});
