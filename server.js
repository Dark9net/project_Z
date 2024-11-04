const express = require('express');
const session = require('express-session');
const path = require('path');
const router = express.Router();
const { MongoClient } = require('mongodb');
const { ObjectId } = require('mongodb');
const bcrypt = require('bcrypt');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(session({
//     secret: 'c92fe11bb60bea01d454d93727301659d75c3fa8342c3aab697cf2dbee225169dc589e566c700b21687a35cc046d48f3ba74270bc9b96dac6f4d5ceee7c071fa', // Secret used to sign the session ID
//     resave: false,
//     saveUninitialized: false,
//     cookie: { secure: false }
// }));

// MongoDB connection setup
// const uri = "mongodb+srv://avishek:perseverance@database.qbio8qc.mongodb.net/?retryWrites=true&w=majority";
// const client = new MongoClient(uri);
// const dbName = "tlo";

// Set view engine to EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files (like CSS, images)
app.use(express.static(path.join(__dirname, 'public')));

// single connection establishment i.e pooling
// let db;

// (async () => {
//   try {
//     await client.connect();
//     console.log('Connected to MongoDB');
//     db = client.db(dbName);
//   } catch (err) {
//     console.error('Error connecting to MongoDB:', err);
//   }
// })();

// // Function to get the db connection
// function getDb() {
//   if (!db) {
//     throw new Error('MongoDB is not connected');
//   }
//   return db;
// }

// module.exports = { getDb };

// // this deletes the session cookie and logout the user
// app.get('/logout', (req, res) => {
//     req.session.destroy((err) => {
//         res.redirect('/login');
//     });
// });

// this will render main index page which is index.ejs
app.get('/', (req, res) => {
  res.render('index');
});

// this is rendering main index page which is home page
app.get('/index', (req, res) => {
    res.render('index');
  });

// login rendering here
app.get('/login', (req, res) => {
    res.render('login');
});

// signup page will render from here
app.get('/signup', (req, res) => {
    res.render('signup');
});

// course package from header nav bar
app.get('/course', (req, res) => {
    res.render('course');
});
  
// render courses from the header i.e nav bar
app.get('/courses_list', (req, res) => {
    res.render('courses_list')
})

// thiss is for about us page rendering
app.get('/about', (req, res) => {
    res.render('about')
})

// here is contact us rendering
app.get('/contactus', (req, res) => {
  res.render('contactus')
})

// side drawer purchase course option
app.get('/purchase', (req, res) => {
  res.render('purchase')
})

// here is confirm payment page rendering
app.get('/confirmpayment', (req, res) => {
  res.render('confirmpayment')
})

// final payment photo upload gateway here
app.get('/final_payment', (req, res) => {
  res.render('final_payment')
})
// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
