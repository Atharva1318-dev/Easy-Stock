Easy Stock
Easy Stock is a MERN-based stock trading platform that allows users to perform simple buying and selling of stocks. Since stock APIs are paid, the application fetches stock data from MongoDB and supports full CRUD operations for managing stock transactions.

🌐 Live Demo
Check out the live version of Easy Stock: [Easy Stock on Render](https://easy-stock-frontend.onrender.com)

📖 Description
Easy Stock is a lightweight stock trading website designed for users to buy and sell stocks seamlessly. The system stores stock market data in MongoDB and retrieves it dynamically, allowing users to perform operations like placing buy/sell orders, viewing stock details, and managing their holdings.

The platform is built using the MERN stack (MongoDB, Express.js, React.js, and Node.js) and is hosted on Render for a smooth deployment experience.

🛠️ Features
Stock Transactions: Users can buy and sell stocks easily.
CRUD Operations: Full support for creating, reading, updating, and deleting stock data.
Watchlist: Users can track selected stocks and monitor their performance.
User Dashboard: Displays current holdings, orders, and positions.
MongoDB Integration: All stock data is stored in a database instead of relying on paid stock APIs.
Modern UI: Built with React for a smooth user experience.
🛠️ Tech Stack
Frontend:
React.js
Bootstrap CSS
Material UI
Backend:
Node.js
Express.js
Database:
MongoDB (hosted on MongoDB Atlas)
Mongoose (MongoDB object modeling tool)
Authentication & Security:
JWT (JSON Web Token): Secure user authentication.
bcrypt.js: Password hashing for user credentials.
dotenv: Managing environment variables.
Hosting & Deployment:
Render: Hosting for both frontend and backend.
MongoDB Atlas: Cloud database storage.
🚀 Installation and Setup
Clone the repository:

bash
Copy
Edit
git clone https://github.com/<your-username>/easy-stock.git  
Navigate to the project directory:

bash
Copy
Edit
cd easy-stock  
Install dependencies for both frontend and backend:

bash
Copy
Edit
npm install  
cd client  
npm install  
Create a .env file in the root directory and add the following variables:

env
Copy
Edit
MONGO_URI=your-mongodb-connection-string  
JWT_SECRET=your-jwt-secret-key  
Start the backend server:

bash
Copy
Edit
npm run server  
Start the frontend:

bash
Copy
Edit
cd client  
npm start  
🔮 Future Enhancements
Live Stock Market Data: Integrate real-time stock price updates.
Portfolio Management: Implement a dashboard for tracking investment performance.
Stock Search Feature: Allow users to search for stocks dynamically.
Payment Gateway: Add a secure payment system for stock transactions.
