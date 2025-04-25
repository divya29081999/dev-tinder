const express = require('express');

const app = express();

app.use('/',(req, res)=>{
    res.send("hello jiiiiii hiiiiiiii  dashboard");
})

app.use('/test',(req, res)=>{
    res.send("response from server!!!");
})

app.use('/hello',(req, res)=>{
    res.send("hello hello hello");
})

app.listen(3001,()=>{
    console.log("Server is successfully listening on port 3001....");
});




