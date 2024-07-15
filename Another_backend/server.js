require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());



app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});


//  SIMPLE TEST ROUTE
app.get('/test', (req, res) => {
    res.send("Hello from express server")
})




const userRoutes = require('./routes/userRoutes');
const classRoutes = require('./routes/classRoutes');
const contactRoutes = require('./routes/contactRoutes');
const paymentRoutes = require('./routes/paymentRoutes');

app.use('/api/users', userRoutes);
app.use('/api/classes', classRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/payments', paymentRoutes);




mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.error(err);
});



app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
