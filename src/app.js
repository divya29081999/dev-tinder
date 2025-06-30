const express = require('express');
const connectDB = require('./config/database');
const User = require('./models/user');
const app = express();
const port = 3000;

app.post('/signup', async (req, res) => {
    // const userObj = {
    //     firstName: "Divya",
    //     lastName: "Wadhwa",
    //     email: "divya@mail.com",
    //     password: "123dfg"
    // }

    const user = new User({
        firstName: "Sourabh",
        lastName: "Wadhwa",
        email: "sourabh@mail.com",
        password: "123dfg"
    }
    );
try{
    await user.save();
    res.send('User added successfully')
}catch(err){
    res.status(400).send('Error saving the user'  + err.message)}
})


connectDB().then(() => {
    console.log('Database established successfully')
    app.listen(port, () => {
        console.log(`Example app listening on port ${port}`)
    })
}).catch((err) => {
    console.log('Database connection not established')
})

// app.listen(port,()=>{
//     console.log(`Example app listening on port ${port}`)
// })