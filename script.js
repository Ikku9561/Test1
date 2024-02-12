function createBlinkingText() {
    const text = document.createElement('div');
    text.className = 'blinking-text';
    text.innerText = 'Ikku Pikku❤️';

    let overlap = true;
    while (overlap) {
        text.style.top = Math.random() * window.innerHeight + 'px';
        text.style.left = Math.random() * window.innerWidth + 'px';

        overlap = false;
        document.querySelectorAll('.blinking-text').forEach(existingText => {
            const rect1 = text.getBoundingClientRect();
            const rect2 = existingText.getBoundingClientRect();

            if (
                rect1.left < rect2.right &&
                rect1.right > rect2.left &&
                rect1.top < rect2.bottom &&
                rect1.bottom > rect2.top
            ) {
                overlap = true;
            }
        });
    }

    document.body.appendChild(text);
}

for (let i = 0; i < 50; i++) {
    createBlinkingText();
}

function moveAround() {
    var noButton = document.querySelector('.heart-button');
    var newPositionX = Math.random() * (window.innerWidth - noButton.clientWidth);
    var newPositionY = Math.random() * (window.innerHeight - noButton.clientHeight);

    noButton.style.position = 'absolute';
    noButton.style.left = newPositionX + 'px';
    noButton.style.top = newPositionY + 'px';
}
