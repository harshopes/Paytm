
# Paytm Payment Application

A simple Paytm-like payment application that allows users to transfer virtual money between accounts.

## Table of contents
- [Screenshots](#screenshots)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)


## ScreenShots
![image](https://github.com/user-attachments/assets/efcd39d8-a2a6-4cac-9dfd-af90f9134000)
![image](https://github.com/user-attachments/assets/fd6dd207-ca34-4e40-bfa4-d1b1fa31fb9f)
![image](https://github.com/user-attachments/assets/191d3d11-f689-4384-8de0-e348b263283c)
![image](https://github.com/user-attachments/assets/7886b78d-5f26-4a9c-a372-66140086ed63)
![image](https://github.com/user-attachments/assets/d47a6300-0c86-4687-8f0b-90f715a661ca)


## Features

- User registration and login
- JWT-based authentication
- View account balance
- Transfer money between users

## Technologies Used

- **Frontend:** React, React-router, Axios, Tailwind CSS
- **Backend:** Node.js, Express.js, MongoDB, Mongoose
- **Authentication:** JWT (JSON Web Token)
- **Database:** MongoDB

### Prerequisites

- Node.js and npm installed
- MongoDB installed and running

## Installation

- **Clone the Repository:**  
  Download the project to your local machine using Git.  
  Copy code
  `git clone https://github.com/yourusername/your-repository.git`


- **Navigate to the Project Directory:**  
  Move into the project's root directory.  
  Copy code
  `cd paytm`


- **Install Backend Dependencies:**  
  Go to the backend folder and install the required packages.  
  Copy code
  `cd backend
  npm install`



- **Install Frontend Dependencies:**    
  Move to the frontend folder and install the required packages.  
  Copy code
  `cd ../frontend
  npm install`

- **Set Up Environment Variables:**  
  Create a .env file in the backend directory and add necessary environment variables like JWT_SECRET and database connection strings. Example:  
  Copy code
  `JWT_SECRET=your_jwt_secret`  
  change the mongoURL

- **Start MongoDB:**  
  Ensure MongoDB is installed and running on your machine.

- **Run the Backend Server:**  
  Go back to the backend directory and start the server.  
  Copy code
  `cd ../backend
  node index.js`
  
- **Run the Frontend Application:**  
  Go to the frontend directory and start the React development server   
  Copy code
  `cd ../frontend
  npm run dev`
  Your application should now be up and running on `http://localhost:5173` for the frontend and the backend API should be accessible as configured.

## Usage
- **Dashboard:** View your account balance and available users.
- **Send Money:** Transfer money to another user.
- **Confirmation:** Receive confirmation after a successful transaction.
- **Logout:** Logout to end session.







