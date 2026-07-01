const express = require('express');

const app = express();
const port = 3000;

app.post('/conversations' , (req, res) => {
    res.send('<b> hii mommy <b>')
})

app.listen(port , () =>{
    console.log(`example of app lisetening on port ${port}`)
})