//connect our config.env
require('dotenv').config({ path: './config.env'});
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

const mongoose = require('mongoose');

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

//connect or databse
mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true }, err => {
    if(err) throw err;
    console.log('Connected to MongoDB!!!')
});

const port = process.env.PORT || 4242;

app.listen(port, () => { console.log(`Server is runnig on port ${port}`) });
