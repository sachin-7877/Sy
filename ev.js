
document.addEventListener('DOMContentLoaded', () => {
    const reserveButtons = document.querySelectorAll('.reserve-button');

    reserveButtons.forEach(button => {
        button.addEventListener('click', () => {
            const station = button.parentElement;
            const statusElement = station.querySelector('.status');

            if (statusElement.textContent === 'Available') {
                statusElement.textContent = 'Reserved';
                statusElement.style.color = 'red';
                button.textContent = 'Cancel Reservation';
                button.classList.add('reserved');
            } else {
                statusElement.textContent = 'Available';
                statusElement.style.color = 'green';
                button.textContent = 'Reserve';
                button.classList.remove('reserved');
            }
        });
    });
});
