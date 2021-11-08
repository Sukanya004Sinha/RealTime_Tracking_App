// importing express 
const express = require ('express');
const app = express(); // calling  express here 
// and jaise hi isko call kreng ye express ka ek object store karegi i.e call
// for fixing the port
const ejs = require ('ejs');
const path = require ('path')
const expressLayout = require('express-ejs-layouts');
const PORT = process.env.PORT|| 4000;
// basically it checks inside the env variable if its present then put it otherwise  put 4000

// here i basically create a route
app.get('/',(req,res)=>{
   // res.send('Hello from server')
   res.render('home');
   // want to dispaly html file there
})
// set template engine
app.use(expressLayout)
app.set('views',path.join(__dirname, '/resources/views'))
// tell which template engine i used
app.set('view engine','ejs');
app.listen(PORT,()=>{
    console.log(`listenig on port xyz ${PORT}`)
    // here 4000 port is available on our machine when we deploy pn a live server it may not present there 
    // so we need to fix it 
})