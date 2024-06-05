// Import the module
const express = require('express');
const app = express();
const path = require('path');
const port = 3000;


app.set ('views', './views')

//Set the view Engine Pug
app.set('view engine', 'pug');

app.set ('views', path.join(__dirname, 'views'));

app.get ('/', (req, res)=> {
    res.render('index',{title: Welcome, message: 'Hello There'

    })
})


app.post ('/submit', (req, res)=>{
    const {name,email,password} = req.body
    res.send(`Successfully Submitted!`)
})


app.listen(port,()=>{
    console.log (`Server is running successfully`);
});


// Middleware function
function logReq (req,res,next){
    console.log('Received ${req.method} requestfor ${req.url}');
    next()

}
app.use(logReq);
app.get('/protected',(req, res) =>{
    res.send('This route is Protected')
})

