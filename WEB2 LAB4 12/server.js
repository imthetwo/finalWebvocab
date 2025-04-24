const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const mongoose = require('mongoose');
const Vocab = require('./api/models/Vocabmodel.js');

// mongoose instance connection url connection using Atlas
mongoose.Promise = global.Promise;
mongoose.connect(
  'mongodb+srv://hh0380i:hh0380i@hh0380i.z8cmsrg.mongodb.net/lab4?retryWrites=true&w=majority'
)
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch(err => console.error('MongoDB connection error:', err));

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  
const routes = require('./api/routes/Vocabroutes.js');
routes(app);

app.listen(port, () => {
  console.log(' RESTful API server started on: ' + port);
});
