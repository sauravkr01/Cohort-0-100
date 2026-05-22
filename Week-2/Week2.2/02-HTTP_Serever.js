const exppress = require('express');
const bodyparser = require('body-parser');
const port = 3000;
const app = exppress();

app.use(bodyparser.json());

app.post('/', (req,res) => {
    const message = req.body.message;
    console.log(message);
    //machine learning things
    res.json({
        output: "2 + 2  = 4"
    })
});

app.listen(port, () => {
    console.log('example app listening on porst ${port}');
})