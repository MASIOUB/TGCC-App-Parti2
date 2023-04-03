const express = require('express');
require('dotenv').config();
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const cors = require('cors');

connectDB();

// Init App
const app = express();

var corsOptions = {
  origin: "*",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS",
  preflightContinue: false,
  optionsSuccessStatus: 204
};

app.use(cors(corsOptions));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());


// Simple Route (Http Methods (Or Verbs))
app.get('/', (req, res) => {
  res.send('Welcome to your new application');
})

// filiales routes
app.use('/filiales', require('./filiale/routes/filialeRoutes'));

// Set Port, Listen For Requests
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => { console.log(`Server is running on port ${PORT}`) });