// Import the module
const express = require('express');
const app = express();
const path = require('path');
const Port = 3000;


app.listen(Port,(err)=>{
    if (err) console.log(err);
    console.log ("Server is running successfully", Port);
});

app.use((req,res,next)=>{
    console.log('Received', req.method, 'request for', req.url);
    next();
})


// the view Engine Pug Settup
app.set ('views', path.join(__dirname, '/views'));
app.set('view engine', 'pug');



app.get ('/index', (req, res)=> {
    res.render('index',{title: 'Welcome'})
});
app.get ('/log', (req, res)=> {
    res.render('log',{title: 'Login'})
});


app.post ('/log', (req, res)=>{
    const {name,email,password} = req.body
    res.send(`Successfully Submitted!`)
})



// Middleware function
function logReq (req,res,next){
    console.log('Received ${req.method} requestfor ${req.url}');
    next()

}
app.use(logReq);
app.get('/protected',(req, res) =>{
    res.send('This route is Protected')
})

// Static Middleware
// app.use(express.static(path.join(__dirname,'Images'))) 

console.log(app.use(express.static(
    path.join(__dirname, 'Images')
)))

// botton
app.get('/', function (req, res) {
    res.download('');
});

