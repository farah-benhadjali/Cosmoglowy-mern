//mongoose crée une connecion entre mangodb et express
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://farahbenhadjali:farah123@cluster0.c9xhqio.mongodb.net/BeautyStorePfa')
.then(db => console.log("database connected"))
.catch(console.error());