const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const helmet = require('helmet');
const config = require('./config');
const postRoutes = require('./routes/post.routes');
const loadTestData = require('./testData');

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use('/api', postRoutes);

mongoose.connect(config.DB, {useNewUrlParser: true});
let db = mongoose.connection;
db.once('open', () => {
    console.log('Connected to the database');
    loadTestData();
});
db.on('error', err => console.log('Error ' + err));

app.listen(config.PORT, () => {
    console.log('Server is running on port: ', config.PORT);
});
