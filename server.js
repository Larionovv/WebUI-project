const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const users = require('./routes/users');
const post = require('./routes/post');
const news = require('./routes/news');

const app = express();

app.use(cors());
app.use(bodyParser.json());

const db = require('./config/keys').mongoURI;

mongoose.connect(db, { useNewUrlParser: true, useCreateIndex: true })
  .then(() => console.log('Mongo connected'))
  .catch(err => console.log(err));

app.use('/post', post);
app.use('/news', news);
app.use('/users', users);

// static in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
};

const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`Server running on port ${port}`));
