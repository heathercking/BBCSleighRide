const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());

app.use(express.json());
const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router.js');


MongoClient.connect('mongodb://localhost:27017', {useUnifiedTopology: true})
    .then((client) => {
        const db = client.db('sleigh_ride');
        const countriesCollection = db.collection('countries');
        const countriesRouter = createRouter(countriesCollection);
        const jokesCollection = db.collection('jokes');
        const jokesRouter = createRouter(jokesCollection);
        const quizCollection = db.collection('quiz');
        const quizRouter = createRouter(quizCollection);
        app.use('/api/countries', countriesRouter)
        app.use('/api/jokes', jokesRouter)
        app.use('/api/quiz', quizRouter)
    })
    .catch(console.err);


app.listen(5000, function () {
    console.log(`Listening on port ${ this.address().port }`);
  });

