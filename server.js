if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}
const express = require('express'); 
const app = express(); 
const expressLayouts = require('express-ejs-layouts')

const indexRouter = require('./routes/index')

app.set('view engine', 'ejs')            //setting ejs as our view engine
app.set('views', __dirname + '/views')   //setting where our views will be coming from
app.set('layout', 'layouts/layout')      //every file will be put inside a layout file so we don't have to duplicate beginning and ending HTML of our proejct (eg. header and footer)
app.use(expressLayouts);                 //tells the app we want to use expressLayouts
app.use(express.static('public'))        //store public files like css, js, images

const mongoose = require('mongoose')
mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true}) 
const db = mongoose.connection
db.on('error', error => console.error(error))
db.once('open', () => console.log('Connected to Mongoose'))

app.use('/', indexRouter)

app.listen(process.env.PORT || 3000)     //pulls from an environment variable when we deploy, but for dev we default to 3000

