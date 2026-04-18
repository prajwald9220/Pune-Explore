const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/puneExplore')
    .then(() => console.log("✅ MongoDB Connected..."))
    .catch(err => console.log("❌ Connection Error:", err));

const contactSchema = new mongoose.Schema({
    name: String,
    email: String,
    message: String,
    date: {
        type: String,
        default: () => new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })
    }
});

const Contact = mongoose.model('Contact', contactSchema);

app.post('/contact', async(req, res) => {
    try {
        const newContact = new Contact(req.body);
        await newContact.save();
        console.log("📥 Naya Data Aaya:", req.body);
        res.status(200).send("Data saved successfully!");
    } catch (err) {
        console.log("❌ Save Error:", err);
        res.status(500).send("Error saving data");
    }
});

app.listen(5000, () => {
    console.log("🚀 Server running on port 5000");
});