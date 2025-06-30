const mongoose = require('mongoose');

const connectDB =  async ()=> {
   await mongoose.connect('mongodb+srv://wadhwadivya29:3Hn6vJ1uhLvhOxrr@namastenode.vncu9.mongodb.net/devTinder');
}

// connectDB().then(()=>{
//     console.log('Database established successfully')
// }).catch((err)=>{
//     console.log('Database connection not established')
// })

module.exports = connectDB