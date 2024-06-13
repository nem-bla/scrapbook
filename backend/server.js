// server.js

import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import multer from 'multer';
import cors from 'cors';

// point to .env file
dotenv.config({path: '../.env'});

const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors({
    origin: 'http://localhost/3000'
}));

const mongo = process.env.URI;

console.log(mongo);
// Connect to MongoDB
mongoose.connect(mongo, {})
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

// Set up multer for handling file uploads
const upload = multer({ dest: 'uploads/' });

// Route for uploading images
app.post('/upload', upload.single('image'), (req, res) => {
    // Handle the uploaded file here (e.g., save it to MongoDB)
    res.send('File uploaded successfully');
});

// test connection
app.get('/getData', (req, res) => {
    res.send({ message: 'Hello from the backend!'});
});


// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
