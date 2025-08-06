require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const corsOptions = {
  origin: [
    'http://localhost:5173',  //public
    //add more here
  ]
}

const app = express();
app.use(cors(corsOptions)).use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// DB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(console.error);


const PORT = process.env.PORT || 9000;
app.listen(PORT, () => console.log(`API @ http://localhost:${PORT}`));
