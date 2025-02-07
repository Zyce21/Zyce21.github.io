document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('colorToggleBtn');
    const resumeContainer = document.querySelector('.resume-container');
    const body = document.body;

    let isDarkTheme = false;

    button.addEventListener('click', () => {
        if (isDarkTheme) {
            resumeContainer.style.backgroundColor = '#fff';
            resumeContainer.style.color = '#333';
            body.style.backgroundColor = '#000';
        } else {
            resumeContainer.style.backgroundColor = '#000';
            resumeContainer.style.color = '#fff';
            body.style.backgroundColor = '#fff';
        }
        isDarkTheme = !isDarkTheme;
    });

    // Theme
    resumeContainer.style.backgroundColor = '#fff';
    resumeContainer.style.color = '#333';
    body.style.backgroundColor = '#000';
});
