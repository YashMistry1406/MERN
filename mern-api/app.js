const express = require('express')
const app = express()
const mongoose = require('mongoose')
require('dotenv').config()
const cors = require('cors')
const port = process.env.PORT
const bodyParser = require('body-parser')





//Cors declaration
app.use(cors())
app.use(bodyParser.json())
app.use(express.json())




//Connecting to the data base
mongoose
  .connect(process.env.DB, { useNewUrlParser: true })
  .then(() => console.log(`Database connected successfully`))
  .catch((err) => console.log(err));
// Since mongoose's Promise is deprecated, we override it with Node's Promise
mongoose.Promise = global.Promise;
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});



//Declaring router of the app
const apiRouter = require('./routes/api')
const serverRouter = require('./routes/server')



//using the router of the app

// app.use('/api',apiRouter)
app.use('/api',serverRouter)


app.use((err, req, res, next) => {
  console.log(err);
  next();
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
