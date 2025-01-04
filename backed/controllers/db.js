const express = require('express');
const mysql = require('mysql2'); // Import the mysql2 package
const cors = require('cors');
const dayjs = require('dayjs'); // Import the dayjs
const app = express();
const db = mysql.createConnection({
    host: 'localhost', // Replace with your MySQL host
    user: 'root', // Replace with your MySQL username
    password: '', // Replace with your MySQL password
    database: 'evenplan', // Replace with your database name
  });
  db.connect((err) => {
    if (err) {
      console.error('Database connection failed:', err.message);
      return;
    }
    console.log('Connected to MySQL database!');
  });
  module.exports = db;