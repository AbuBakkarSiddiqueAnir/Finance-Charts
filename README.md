# Finance Charts

Finance Charts is a MERN stack application for monitoring financial data. The frontend is built using React, ChartJs and TypeScript, while the backend is built using Express and MongoDB. The application displays various charts that show revenue vs expenses, profit vs revenue, revenue month by month, operational vs non-operational expenses, and many more.

The backend API is deployed at https://finance-dashboard.anir.me and provides the following API routes:

- `/kpi/kpis/`: Returns key performance indicators (KPIs) such as revenue, expenses, and profit for a specified time period.
- `/product/products`: Returns data for all products.
- `/transaction/transactions`: Returns transaction data for a specified time period.

## Getting Started

To run the application locally, you will need to have the following software installed on your machine:

- Node.js
- MongoDB

### Installation

1. Clone the repository

   `git clone https://github.com/AbuBakkarSiddiqueAnir/finance-charts.git`

2. Navigate to the project directory

   `cd finance-charts/client`
   `cd finance-charts/server`

3. Install dependencies

    `npm install`

4. Set environment variables in server .env

Copy the `.env.example` file to `.env` and set the following environment variables:

- `MONGODB_CONNECTION_STRING`: The URI for your MongoDB instance

5. Start the backend server

The application should now be running at http://localhost:PORT.

## Technology Stack

The following technologies are used in this project:

- React
- TypeScript
- Express
- MongoDB
- Chart.js

## Directory Structure

The project directory is structured as follows:

finance-charts/
├── client/ # React frontend code
├── server/ # Express backend code
├── README.md # Project README file