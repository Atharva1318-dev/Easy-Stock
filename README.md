# Easy Stock
Easy Stock is a MERN-based stock trading platform that allows users to perform simple buying and selling of stocks. Since stock APIs are paid, the application fetches stock data from MongoDB and supports full CRUD operations for managing stock transactions.

---

## 🌐 Live Demo
Check out the live version of Easy Stock: [https://easy-stock-frontend.onrender.com](https://easy-stock-frontend.onrender.com)

---

## 🎥 Demo Video

Watch a short video walkthrough of Easy Stock:

[Demo Video](https://github.com/user-attachments/assets/fc6b1b34-7d66-40b7-aeba-8787a6da1064)

---

## 📚 Description
Easy Stock is a lightweight stock trading website designed for users to buy and sell stocks seamlessly. The system stores stock market data in MongoDB and retrieves it dynamically, allowing users to perform operations like placing buy/sell orders, viewing stock details, and managing their holdings.

The platform is built using the MERN stack (MongoDB, Express.js, React.js, and Node.js) and is hosted on Render for a smooth deployment experience.

---

## 🛠️ Features
- **Stock Transactions:** Users can buy and sell stocks easily.
- **CRUD Operations:** Full support for creating, reading, updating, and deleting stock data.
- **Stock Charts:** Chart.js integration for displaying stock price trends dynamically.
- **Watchlist:** Users can track selected stocks and monitor their performance.
- **MongoDB Integration:** All stock data is stored in a database instead of relying on paid stock APIs.
- **Modern UI:** Built with React for a smooth user experience.

---

## 🛠️ Tech Stack

### Frontend:
- React.js
- Bootstrap CSS
- Material UI
- Chart.js (for interactive stock price charts)
- Lottie Files (for animations)

### Backend:
- Node.js
- Express.js

### Database:
- MongoDB (hosted on MongoDB Atlas)
- Mongoose (MongoDB object modeling tool)

### Authentication & Security:
- JWT (JSON Web Token): Secure user authentication.
- bcrypt.js: Password hashing for user credentials.
- dotenv: Managing environment variables.

### Cloud Services:
- Cloudinary: Used for storing and managing background images.

### Hosting & Deployment:
- Render: Hosting for both frontend and backend.
- MongoDB Atlas: Cloud database storage.

---

## 🚀 Installation and Setup

Clone the repository:  
```bash
git clone https://github.com/<your-username>/easy-stock.git  
```
Navigate to the project directory:  
```bash
cd easy-stock  
```

### Backend Setup  
Navigate to the backend folder:  
```bash
cd backend  
```
Install backend dependencies:  
```bash
npm install  
```
Create a `.env` file in the backend folder and add the following variables:  
```env
MONGO_URI=your-mongodb-connection-string  
JWT_SECRET=your-jwt-secret-key  
```
Start the backend server:  
```bash
node app.js  
```
Or, if using **nodemon** for development:  
```bash
nodemon app.js  
```

### Frontend Setup  
Open a new terminal and navigate to the frontend folder:  
```bash
cd frontend  
```
Install frontend dependencies:  
```bash
npm install  
```
Start the Vite-based frontend:  
```bash
npm run dev  
```

---

## 🔮 Future Enhancements
- **Live Stock Market Data:** Integrate real-time stock price updates.
- **Portfolio Management:** Implement a dashboard for tracking investment performance.
- **Stock Search Feature:** Allow users to search for stocks dynamically.
- **Payment Gateway:** Add a secure payment system for stock transactions.
