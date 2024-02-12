const container = document.querySelector('.container');

for (let i = 0; i < 200; i++) {
    const star = document.createElement('div');
    star.classList.add('star');
    star.style.top = Math.random() * 150 + 'vh';
    star.style.left = Math.random() * 150 + 'vw';
    container.appendChild(star);
}

function openNewWindow() {
    const extendedMessage = document.querySelector('.extended-message').innerHTML;
    const newWindow = window.open('', '_blank');
    newWindow.document.write('<html><head><style>body {background-color: #FFB6C1; color: red;}</style></head><body>' + extendedMessage + '</body></html>');
}

function toggleExtendedMessage() {
    const extendedMessage = document.getElementById('extendedMessage');
    extendedMessage.style.display = extendedMessage.style.display === 'none' ? 'block' : 'none';
    openNewWindow();
}
