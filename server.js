const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Ruta para obtener autores
app.get('/api/authors', (req, res) => {
    fs.readFile(path.join(__dirname, 'data', 'authors.json'), 'utf8', (err, data) => {
        if (err) {
            return res.status(500).send('Error reading authors data');
        }
        res.json(JSON.parse(data));
    });
});

// Ruta para obtener libros
app.get('/api/books', (req, res) => {
    fs.readFile(path.join(__dirname, 'data', 'books.json'), 'utf8', (err, data) => {
        if (err) {
            return res.status(500).send('Error reading books data');
        }
        res.json(JSON.parse(data));
    });
});

// Ruta para obtener editoriales
app.get('/api/publishers', (req, res) => {
    fs.readFile(path.join(__dirname, 'data', 'publishers.json'), 'utf8', (err, data) => {
        if (err) {
            return res.status(500).send('Error reading publishers data');
        }
        res.json(JSON.parse(data));
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
