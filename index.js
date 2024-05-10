const express = require('express');
const authRoute = require ("./routes/authRoute");
const productRoute = require ("./routes/productRoute");
const categoryRoute = require ("./routes/categoryRoute");
const contactRoute = require ("./routes/contactRoute");
const clientRoute = require ("./routes/clientRoute");
const sousCategoryRoute = require ("./routes/sousCategoryRoute");
const cartRoute = require ("./routes/cartRoute");
const app = express();

// Connect to MongoDB
require('./databases');
require("dotenv").config();

const port = process.env.PORT || 4000;


app.use(express.json());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    if (req.method === "OPTIONS") {
      res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
      return res.status(200).json({});
    }
    next();
});

app.use('/api/authadmin', authRoute);
app.use('/api/product', productRoute);
app.use('/api/category', categoryRoute);
app.use('/api/contact', contactRoute);
app.use('/api/user', clientRoute);
app.use('/api/cart', cartRoute);
app.use('/api/souscategory', sousCategoryRoute);
app.use('/uploads', express.static('uploads'));


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});