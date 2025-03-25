const mysql = require('mysql2');
const express = require('express');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'kitchenRecipyUser',
    password: 'diZ7A0T7P-kSEFlm',
    database: 'kitchenrecipes'
});

const app = express();
app.use(express.json());
app.use(cors());

// Configure multer to save images in ./assets/foodImg
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const uploadPath = path.join(__dirname, 'assets', 'foodImg');
        if (!fs.existsSync(uploadPath)) {
            fs.mkdirSync(uploadPath, { recursive: true });
        }
        cb(null, uploadPath);
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, uniqueSuffix + path.extname(file.originalname));
    }
});
const upload = multer({ storage });

connection.connect(err => {
    if (err) {
        console.error('Błąd połączenia z bazą danych:', err);
        process.exit(1); // Exit the process if the connection fails
    }
    console.log('Połączono z MySQL!');
});

connection.on('error', err => {
    console.error('Błąd połączenia z bazą danych:', err);
    if (err.code === 'PROTOCOL_CONNECTION_LOST') {
        console.error('Połączenie z bazą danych zostało utracone.');
        process.exit(1); // Exit the process if the connection is lost
    }
});

app.get('/', (req, res) => {
    res.send('Welcome to the Kitchen Recipes API!');
});

app.get('/dane', (req, res) => {
    connection.query('SELECT * FROM `recipes` ORDER BY `likes` DESC LIMIT 3;', (err, results) => {
        if (err) {
            console.error('Database query error:', err);
            res.status(500).json({ error: 'Błąd serwera' });
        } else {
            res.json(results);
        }
    });
});

app.get('/dane2', (req, res) => {
    connection.query('SELECT * FROM `recipes`', (err, results) => {
        if (err) {
            console.error('Database query error:', err);
            res.status(500).json({ error: 'Błąd serwera' });
        } else {
            res.json(results);
        }
    });
});

app.get('/recipe/:id', (req, res) => {
    const recipeId = req.params.id;
    connection.query('SELECT * FROM `recipes` WHERE `id` = ?', [recipeId], (err, results) => {
        if (err) {
            console.error('Database query error:', err);
            res.status(500).json({ error: 'Błąd serwera' });
        } else if (results.length === 0) {
            res.status(404).json({ error: 'Przepis nie znaleziony' });
        } else {
            res.json(results[0]);
        }
    });
});

// Endpoint to handle adding a recipe
app.post('/addRecipe', upload.single('file'), (req, res) => {
    const { title, type, ingredients, description } = req.body;
    const file = req.file;

    if (!title || !type || !ingredients || !description || !file) {
        return res.status(400).json({ error: 'Wszystkie pola muszą być wypełnione!' });
    }

    const imagePath = `/assets/foodImg/${file.filename}`;

    const query = `
        INSERT INTO recipes (title, type, ingredients, description, image)
        VALUES (?, ?, ?, ?, ?)
    `;
    const values = [title, type, ingredients, description, imagePath];

    connection.query(query, values, (err, results) => {
        if (err) {
            console.error('Database query error:', err);
            return res.status(500).json({ error: 'Błąd serwera' });
        }
        res.status(201).json({ message: 'Przepis został dodany pomyślnie!' });
    });
});

const server = app.listen(8080, () => {
    console.log('Serwer działa na http://localhost:8080');
});

process.on('SIGINT', () => {
    console.log('Zamykanie serwera...');
    connection.end(err => {
        if (err) {
            console.error('Błąd podczas zamykania połączenia z bazą danych:', err);
        } else {
            console.log('Połączenie z bazą danych zostało zamknięte.');
        }
        server.close(() => {
            console.log('Serwer został zamknięty.');
            process.exit(0);
        });
    });
});

module.exports = connection;