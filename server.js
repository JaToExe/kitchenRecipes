const mysql = require('mysql2');
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser'); // Add cookie-parser for handling cookies
const bcrypt = require('bcrypt'); // Add bcrypt for password hashing

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'kitchenRecipyUser',
    password: 'diZ7A0T7P-kSEFlm',
    database: 'kitchenrecipes'
});

const app = express();
app.use(cors({ origin: true, credentials: true })); // Allow credentials for cookies
app.use(express.json());
app.use(cookieParser()); // Use cookie-parser middleware

app.get('/', (req, res) => {
    res.send('Welcome to the Kitchen Recipes API!');
});

app.get('/dane', (req, res) => {
    connection.query('SELECT * FROM `recipes` ORDER BY `likes` DESC LIMIT 3;', (err, results) => {
        if (err) {
            console.error('Database query error:', err); // Log the error for debugging
            res.status(500).json({ error: 'Błąd serwera' });
        } else {
            res.json(results);
        }
    });
});

app.get('/dane2', (req, res) => {
    connection.query('SELECT * FROM `recipes`', (err, results) => {
        if (err) {
            console.error('Database query error:', err); // Log the error for debugging
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

// User registration endpoint
app.post('/register', async (req, res) => {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
        return res.status(400).json({ error: 'Wszystkie pola są wymagane' });
    }

    try {
        const hashedPassword = await bcrypt.hash(password, 10); // Hash the password
        connection.query(
            'INSERT INTO `users` (`username`, `email`, `password_hash`) VALUES (?, ?, ?)',
            [username, email, hashedPassword],
            (err, results) => {
                if (err) {
                    console.error('Database query error:', err);
                    return res.status(500).json({ error: 'Błąd serwera' });
                }
                res.status(201).json({ message: 'Rejestracja zakończona sukcesem' });
            }
        );
    } catch (error) {
        console.error('Error hashing password:', error);
        res.status(500).json({ error: 'Błąd serwera' });
    }
});

// User login endpoint
app.post('/login', (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ error: 'Wszystkie pola są wymagane' });
    }

    connection.query(
        'SELECT * FROM `users` WHERE `email` = ?',
        [email],
        async (err, results) => {
            if (err) {
                console.error('Database query error:', err);
                return res.status(500).json({ error: 'Błąd serwera' });
            }

            if (results.length === 0) {
                return res.status(401).json({ error: 'Nieprawidłowy email lub hasło' });
            }

            const user = results[0];
            const isPasswordValid = await bcrypt.compare(password, user.password_hash);

            if (!isPasswordValid) {
                return res.status(401).json({ error: 'Nieprawidłowy email lub hasło' });
            }

            // Set a cookie to track login state
            res.cookie('userId', user.id, { httpOnly: true, maxAge: 24 * 60 * 60 * 1000 }); // 1 day
            res.status(200).json({ message: 'Zalogowano pomyślnie', user: { id: user.id, username: user.username, email: user.email } });
        }
    );
});

// Check login status endpoint
app.get('/check-login', (req, res) => {
    const userId = req.cookies.userId;

    if (!userId) {
        return res.status(401).json({ loggedIn: false });
    }

    connection.query(
        'SELECT * FROM `users` WHERE `id` = ?',
        [userId],
        (err, results) => {
            if (err) {
                console.error('Database query error:', err);
                return res.status(500).json({ error: 'Błąd serwera' });
            }

            if (results.length === 0) {
                return res.status(401).json({ loggedIn: false });
            }

            const user = results[0];
            res.status(200).json({ loggedIn: true, user: { id: user.id, username: user.username, email: user.email } });
        }
    );
});

// User logout endpoint
app.post('/logout', (req, res) => {
    res.clearCookie('userId'); // Clear the login cookie
    res.status(200).json({ message: 'Wylogowano pomyślnie' });
});

connection.connect(err => {
    if (err) {
        console.error('Błąd połączenia:', err);
        return;
    }
    console.log('Połączono z MySQL!');
});

app.listen(8080, () => {
    console.log('Serwer działa na http://localhost:8080');
});

module.exports = connection;