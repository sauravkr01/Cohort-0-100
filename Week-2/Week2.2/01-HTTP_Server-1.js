// Create a HTTP server , using library ( express)

const express = require("express");

const port = 3000;
const app  = express();


app.get('/route-handler' , function( req , res) {
    // header , body , query parameters
    // do machine learnig model
    res.json({
        name: "saurav" ,
        age : 21
    })
})
app.get('/' , function(req , res) {
    res.send('Hello World')
})

app.listen(port , function() {
    console.log("listening from  port 3000")
});
