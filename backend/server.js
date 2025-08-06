require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors(), express.json());

// DB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(console.error);


const PORT = process.env.PORT || 9000;
app.listen(PORT, () => console.log(`API @ http://localhost:${PORT}`));
