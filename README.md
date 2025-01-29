# Ceiling Fan Management System

The **Ceiling Fan Management System** is a full-stack CRUD (Create, Read, Update, Delete) application built with **React.js**, **Node.js**, **Express**, and **MySQL**. This application allows users to manage ceiling fan details, such as company, model, size, waterproof status, shape, price, color, and warranty.

## Features

- **Add a New Fan**: Store fan details in the database.
- **View All Fans**: Display all ceiling fans in a table.
- **View a Single Fan**: Fetch and display details of a specific fan by ID.
- **Update Fan Details**: Modify fan details, including company, model, size, etc.
- **Delete a Fan**: Remove a fan from the database.

## Tech Stack

- **Frontend**: React.js, React Router, Axios, Bootstrap
- **Backend**: Node.js, Express.js
- **Database**: MySQL
- **Middleware**: CORS, Express JSON

## API Endpoints

- `POST /addprd`: Add a new fan
- `GET /`: Retrieve all fans
- `GET /singlefan/:id`: Get a specific fan by ID
- `PUT /updateproduct/:id`: Update fan details
- `DELETE /deletefan/:id`: Delete a fan

## Frontend Overview

The frontend is a React app that interacts with the backend to display fan data in a table format. It allows users to:

- View fan information
- Update fan details
- Delete a fan entry
- Add a new fan

### **ShowAll.js (React Component)**

- Fetches all fans from the backend.
- Displays fans in a table with **Add**, **Update**, and **Delete** buttons.
- Includes a date formatting function for warranty start and end dates.

## How to Run

### Backend Setup
1. Clone the repository:  
   `git clone https://github.com/your-username/ceiling-fan-management.git`
2. Navigate to the backend directory:  
   `cd backend`
3. Install dependencies:  
   `npm install`
4. Start the server:  
   `node server.js`
5. Ensure MySQL is running and the `ceilingFans` database is set up.

### Frontend Setup
1. Navigate to the frontend directory:  
   `cd frontend`
2. Install dependencies:  
   `npm install`
3. Start the React app:  
   `npm start`

### Database Setup

1. Create a MySQL database called `ceilingFans`.
2. Create a table `Fans` with the following structure:
   ```sql
   CREATE TABLE Fans (
       id INT AUTO_INCREMENT PRIMARY KEY,
       Company VARCHAR(255),
       Model VARCHAR(255),
       Size VARCHAR(255),
       WaterProof BOOLEAN,
       Shape VARCHAR(255),
       Price DECIMAL(10, 2),
       Color VARCHAR(255),
       WarrantyStart DATE,
       WarrantyEnd DATE
   );
