from flask import Flask, render_template, request, flash
from datetime import datetime

app = Flask(__name__)
app.secret_key = 'your-secret-key-change-this-in-production'

@app.route('/', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        checkin_date = request.form.get('checkin_date')
        checkout_date = request.form.get('checkout_date')
        guests = request.form.get('guests')

        errors = []

        try:
            checkin = datetime.strptime(checkin_date, '%Y-%m-%d')
            checkout = datetime.strptime(checkout_date, '%Y-%m-%d')

            if checkin >= checkout:
                errors.append("Check-in date must be before check-out date.")
            if checkin.date() < datetime.now().date():
                errors.append("Check-in date cannot be in the past.")
        except ValueError:
            errors.append("Please enter valid dates.")

        try:
            guests_num = int(guests)
            if guests_num < 1 or guests_num > 5:
                errors.append("Number of guests must be between 1 and 5.")
        except (ValueError, TypeError):
            errors.append("Please select a valid number of guests.")

        if errors:
            for error in errors:
                flash(error, 'error')
            return render_template('index.html', 
                                   checkin_date=checkin_date,
                                   checkout_date=checkout_date,
                                   guests=guests)

        print("="*60)
        print("NEW BOOKING RECEIVED - Cyber HIBs Hotel")
        print(f"Check-in: {checkin_date} | Check-out: {checkout_date} | Guests: {guests}")
        print("="*60)

        flash(f'Booking search successful! Looking for rooms from {checkin_date} to {checkout_date} for {guests} guest(s).', 'success')
        return render_template('index.html')

    return render_template('index.html')

@app.route('/health')
def health_check():
    return {'status': 'healthy', 'service': 'Cyber HIBs Hotel'}

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
