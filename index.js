const express = require('express');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
const app = express();
const database = require('./config/db');
app.use(fileUpload());

require('dotenv').config();
database();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const route = require('./router');

app.use('/', route);
console.log(process.env.APP_PORT);
//Server
app.listen(process.env.APP_PORT, () => {
	console.log('Server Connected');
});
