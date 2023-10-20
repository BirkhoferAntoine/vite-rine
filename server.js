import express from 'express';
import cors from 'cors';
import path from 'path';

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

// Define the POST route for sending emails
app.post('/send-email', (req, res) => {
    // Handle your email sending logic here
    console.log(req.body);
    res.json({ message: 'Email sent!' });
});

// Serve static files from the React build directory
const buildDirectory = path.resolve(__dirname, 'build'); // or 'dist' depending on your tool
app.use(express.static(buildDirectory));

// Always return the main index.html, so the React router renders the route in the client
app.get('*', (req, res) => {
    res.sendFile(path.resolve(buildDirectory, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
