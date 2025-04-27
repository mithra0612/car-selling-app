# Second-Hand Car Marketplace

The **Second-Hand Car Marketplace** is a full-stack web application designed to provide a seamless and transparent platform for buying and selling pre-owned cars. It enables **Buyers** and **Sellers** to interact and engage in a smooth transaction process, ensuring a secure and efficient experience. The project integrates **AI-powered price prediction**, **real-time chatbot support**, and a **mandatory mechanic inspection** for all purchases, aiming to provide fairness and reliability in the used car market.

---

## **Key Features**:

### **1. Dual User Roles:**
- **Buyers** can browse, wishlist, and purchase cars.
- **Sellers** can list cars for sale, view their listing status, and manage their vehicles.
  
### **2. AI-Driven Price Prediction:**
- The platform leverages **Machine Learning** models to predict fair prices based on various car attributes such as make, model, year, mileage, etc.  
- This AI feature ensures that both buyers and sellers receive fair pricing and avoid price manipulation.

### **3. Mechanic Inspection:**
- Every car purchase is subject to a **mandatory mechanic inspection**, which serves as a quality check for the vehicle before the sale is completed.
- This step ensures that buyers are aware of the car's condition, making the platform more trustworthy and transparent.

### **4. Real-Time Chatbot:**
- Integrated with **Dialogflow** or a custom-built chatbot system, buyers and sellers can interact with the bot for quick and efficient query resolution.
- The bot is designed to help with common queries like car availability, pricing, and purchase procedures, saving time for users.

### **5. Secure Authentication:**
- Users can register, log in, and authenticate securely using **JWT (JSON Web Tokens)**, ensuring that only authorized users can list, purchase, or interact with the marketplace.

---

## **How It Works**:

1. **Registration & Login:**
   - Both buyers and sellers need to register and log in to access the platform.
   - Secure authentication ensures that users' data and transactions are kept safe.

2. **Listing Cars:**
   - Sellers can list their cars with detailed information such as make, model, year, mileage, and condition.
   - Each listing will include a dynamic price prediction, which is calculated using the AI-powered model.

3. **Browsing & Purchasing:**
   - Buyers can browse through available listings and add their favorite cars to the wishlist.
   - Once a buyer selects a car, the purchase process includes a mandatory mechanic inspection, followed by the final transaction.

4. **Mechanic Inspection:**
   - A pre-purchase inspection ensures that buyers know the car's condition.
   - The system displays the results of the inspection to give a transparent view of the car's health.

5. **AI Price Prediction:**
   - The platform uses **Machine Learning** models to dynamically suggest fair prices based on car attributes.
   - This helps prevent price manipulation and ensures both sellers and buyers agree on fair values.

6. **Real-Time Support:**
   - The integrated **chatbot** provides real-time assistance with common queries like car details, buying/selling process, payment methods, etc.

---

## **Tech Stack**:

### **Frontend:**
- **React.js**: For building a dynamic and responsive user interface. React enables a smooth browsing experience, allowing users to interact with the platform easily.
  
### **Backend:**
- **Node.js** & **Express.js**: To handle requests, manage routes, and interact with the database. The backend is built using Node.js for its non-blocking, event-driven architecture, and Express.js as a flexible framework for routing and middleware.

### **Database:**
- **MongoDB Atlas**: A NoSQL database used to store user data, car listings, transaction history, and chat logs. MongoDB allows for fast, scalable storage, especially with dynamic data like user interactions.

### **Authentication:**
- **JWT (JSON Web Tokens)**: To authenticate users securely, ensuring that only logged-in users can access certain features like posting listings or making purchases.

### **Machine Learning:**
- **AI Models**: Custom-built machine learning models are used for **price prediction** based on a variety of car attributes like year, mileage, condition, and more. These models help sellers set realistic prices and assist buyers in finding cars within their budget.

### **Chatbot:**
- **Dialogflow** or a **Custom Chatbot**: To offer real-time assistance and support, guiding users through the buying and selling process.

## Author

- **Madhumithra**
- [GitHub Repository](https://github.com/mithra0612/car-selling-app/)
