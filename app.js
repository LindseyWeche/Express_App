// Import the module
const express = require('express');
const app = express();
const path = require('path');
const port = 3000;


app.set ('views', './views')

//Set the view Engine Pug
app.set('view engine', 'pug');

app.set ('views', path.join(_dirname, 'views'));

app.get ('/', (req, res)=> {
    res.render('index',{title: Welcome, message: 'Hello There'

    })
})


// app.listen(port,()=>{
//     console.log (`Server is running at port $(port)`);
// });


