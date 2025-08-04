🏨 Cyber HIBs Hotel – Booking Web App


A modern, fully responsive hotel room booking web application with real-time validations and cloud cost optimization principles using Flask and cloud deployment strategies.

🚀 Live Demo

🔗 View App on Render
(https://cyber-hibs-hotel.onrender.com)


📌 Features

🖥️ Interactive UI with glassmorphism design & luxury theme

📅 Real-time date validation (check-in & check-out)

👥 Guest selection dropdown (1–5 guests)

📱 Fully responsive for desktop & mobile

🔒 Form validation on frontend and backend

✅ Booking feedback via flash messages

☁️ Deployed on Render (Spot-like shared instances) for cloud cost optimization

🔁 Easy to scale or migrate to AWS EC2 Spot/Reserved Instances

🧱 Tech Stack
Frontend	Backend	Deployment	Others
HTML5, CSS3, JS	Python (Flask)	Render	FontAwesome
Responsive Design	Form Validation	Free Shared Instance	Bootstrap Layout
Jinja2 Templating	Flash Messages	CI-friendly	Custom JS Logic

📁 Folder Structure
arduino
Copy
Edit
CyberHIBsHotel/
│
├── static/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── script.js
│   └── images/
│       └── background.jpg
│
├── templates/
│   └── index.html
│
├── app.py
├── requirements.txt
└── README.md
⚙️ Setup Instructions (Local)
Clone the repo

bash
Copy
Edit
git clone https://github.com/your-username/CyberHIBsHotel.git
cd CyberHIBsHotel
Install dependencies

bash
Copy
Edit
pip install -r requirements.txt
Run the Flask app

bash
Copy
Edit
python app.py
Open browser: http://localhost:5000

☁️ Cloud Optimization (As per project requirement)
Used Render’s free shared instance (works like Spot Instance)

Can be upgraded to AWS EC2 Spot or Reserved Instance with manual setup

Deployment options selected for cost-efficiency under project guidelines

✅ Booking Flow
Select check-in and check-out dates

Choose number of guests (1–5)

Click Check Availability

Form validates input (frontend + backend)

Flash message confirms success or error

Booking logs printed in terminal (for testing)

🩺 Health Check API
http
Copy
Edit
GET /health
Response:
{
  "status": "healthy",
  "service": "Cyber HIBs Hotel Backend"
}

📌 License
This project is made for academic purposes only.
© 2025 Cyber HIBs. All rights reserved.
