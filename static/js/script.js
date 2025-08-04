document.addEventListener('DOMContentLoaded', function () {
    const bookingForm = document.querySelector('form');
    const bookingCard = document.querySelector('.booking-card');
    const checkinInput = document.getElementById('checkin_date');
    const checkoutInput = document.getElementById('checkout_date');
    const guestsSelect = document.getElementById('guests');
    const today = new Date().toISOString().split('T')[0];

    if (checkinInput) checkinInput.setAttribute('min', today);
    if (checkoutInput) checkoutInput.setAttribute('min', today);

    if (checkinInput && checkoutInput) {
        checkinInput.addEventListener('change', () => {
            checkoutInput.setAttribute('min', checkinInput.value);
            if (checkoutInput.value <= checkinInput.value) {
                checkoutInput.value = '';
            }
        });
    }

    function fadeInBookingCard() {
        if (bookingCard) {
            bookingCard.style.opacity = '0';
            bookingCard.style.transform = 'translateY(30px)';
            setTimeout(() => {
                bookingCard.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
                bookingCard.style.opacity = '1';
                bookingCard.style.transform = 'translateY(0)';
            }, 400);
        }
    }

    function showAlert(message, type = 'info') {
        const existing = document.querySelector('.custom-alert');
        if (existing) existing.remove();

        const alert = document.createElement('div');
        alert.className = `custom-alert custom-alert-${type}`;
        alert.innerHTML = `
            <div class="alert-content">
                <span class="alert-icon">${type === 'error' ? '⚠️' : type === 'success' ? '✅' : 'ℹ️'}</span>
                <span class="alert-message">${message}</span>
                <button class="alert-close" onclick="this.parentElement.parentElement.remove()">×</button>
            </div>
        `;

        alert.style.cssText = `
            position: fixed;
            top: 100px;
            left: 50%;
            transform: translateX(-50%);
            z-index: 9999;
            background: rgba(34, 27, 54, 0.95);
            color: #f7e5b5;
            padding: 1rem 1.5rem;
            border-radius: 12px;
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255,255,255,0.1);
            box-shadow: 0 8px 30px rgba(0,0,0,0.3);
            animation: slideInDown 0.4s ease;
            max-width: 90%;
        `;

        const style = document.createElement('style');
        style.innerHTML = `
            @keyframes slideInDown {
                from {
                    transform: translateX(-50%) translateY(-20px);
                    opacity: 0;
                }
                to {
                    transform: translateX(-50%) translateY(0);
                    opacity: 1;
                }
            }
        `;
        document.head.appendChild(style);
        document.body.appendChild(alert);

        setTimeout(() => {
            alert.style.animation = 'slideInDown 0.3s ease reverse';
            setTimeout(() => alert.remove(), 300);
        }, 5000);
    }

    function validateForm() {
        const checkin = checkinInput.value;
        const checkout = checkoutInput.value;
        const guests = guestsSelect.value;

        if (!checkin) {
            showAlert('Please select check-in date.', 'error');
            checkinInput.focus();
            return false;
        }

        if (!checkout) {
            showAlert('Please select check-out date.', 'error');
            checkoutInput.focus();
            return false;
        }

        if (!guests) {
            showAlert('Please select number of guests.', 'error');
            guestsSelect.focus();
            return false;
        }

        const checkinDate = new Date(checkin);
        const checkoutDate = new Date(checkout);

        if (checkinDate < new Date()) {
            showAlert('Check-in date cannot be in the past.', 'error');
            checkinInput.focus();
            return false;
        }

        if (checkoutDate <= checkinDate) {
            showAlert('Check-out must be after check-in.', 'error');
            checkoutInput.focus();
            return false;
        }

        return true;
    }

    if (bookingForm) {
        bookingForm.addEventListener('submit', function (e) {
            if (!validateForm()) {
                e.preventDefault();
            }
        });
    }

    fadeInBookingCard();
});

