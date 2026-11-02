const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');

const questionBox = document.getElementById('questionBox');
const successMessage = document.getElementById('successMessage');

// دکمه نه فرار می‌کند!
noButton.addEventListener('pointerenter', () => {
    const randomX = Math.random() * 200 - 100;
    const randomY = Math.random() * 100 - 50;

    noButton.style.position = 'relative';
    noButton.style.transform = `translate(${randomX}px, ${randomY}px)`;
});

// کلیک روی آره
yesButton.addEventListener('click', () => {
    questionBox.style.display = 'none';
    successMessage.style.display = 'block';
});