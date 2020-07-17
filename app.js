const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const passportjwt = require('passport-jwt');
const mongoose = require('mongoose');
const config = require('./config/database');

// connect to database
mongoose.connect(config.database, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useCreateIndex: true,
});
let db = mongoose.connection;
// check connection
db.once('open', () => console.log(`Connected to db: ${config.database}`));
db.on('error', (err) => console.log(`Error in connecting to db: ${err}`));

// start express
const app = express();

// route files
const main = require('./routes/main');
const users = require('./routes/users');
const complaints = require('./routes/complaints');

// cors middleware
app.use(cors());

// static folder
app.use(express.static(path.join(__dirname, 'public')));
app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname + '/public/index.html'));
});

// bodyparser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// passport middleware
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

// routes
app.use('/', main);
app.use('/users', users);
app.use('/complaint', complaints);

// start server
let port = 3000;
app.listen(port, () => console.log(`Server started at port ${port}`));

// Developed by: Inamullah (https://www.linkedin.com/in/inamullah-handoo/)
