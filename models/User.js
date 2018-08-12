const mongoose = require('mongoose');
const { Schema } = mongoose; //const schema = mongoose.Schema;


const userSchema = new Schema({
  googleId: String,
});

mongoose.model('users', userSchema); //creates collection called users if it doesnt exist