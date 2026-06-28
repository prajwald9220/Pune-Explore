const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/puneExploreDB')
    .then(() => console.log('✅ MongoDB Compass se connect ho gaya hai!'))
    .catch((err) => console.error('❌ MongoDB connection error:', err));

const contactSchema = new mongoose.Schema({
    name: String,
    email: String,
    message: String,
    date: String
});

const Contact = mongoose.model('Contact', contactSchema);

app.post('/contact', async(req, res) => {
    try {
        const newContact = new Contact({
            name: req.body.name,
            email: req.body.email,
            message: req.body.message,
            date: req.body.date
        });

        await newContact.save();
        res.status(200).json({ message: 'Success! Data MongoDB mein save ho gaya.' });
    } catch (error) {
        res.status(500).json({ error: 'Data save nahi ho paya.' });
    }
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});