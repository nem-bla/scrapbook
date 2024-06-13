// server.js

import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import multer from 'multer';
import cors from 'cors';
import Photo from './models/Photo.js'; // Import the Photo model
import { __dirname } from './utils.js'; // Import the helper function
import path from 'path'; // Import path

// Point to .env file
dotenv.config({ path: '../.env' });

const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors({
    origin: 'http://localhost:3000'
}));

const mongo = process.env.URI;

// Connect to MongoDB
mongoose.connect(mongo, {})
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

// Set up multer for handling file uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    }
});
const upload = multer({ storage });

// Route for uploading images
app.post('/api/upload', upload.single('image'), async (req, res) => {
    try {
        const { filename, originalname, mimetype, size, path } = req.file;
        const photo = new Photo({ filename, originalname, mimetype, size, path });
        await photo.save();
        res.json({ success: true, photo });
    } catch (err) {
        console.error('Error saving file:', err);
        res.status(500).json({ success: false, error: err.message });
    }
});

// Route to retrieve all images
app.get('/api/images', async (req, res) => {
    try {
        const photos = await Photo.find(); // Fetch all photos
        const imageUrls = photos.map(photo => `http://localhost:8000/uploads/${photo.filename}`);
        res.json({ imageUrls });
    } catch (error) {
        console.error('Error fetching images:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Serve static files from the 'uploads' directory
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Test connection
app.get('/api/getData', (req, res) => {
    res.send('Packet');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
