require('dotenv').config();
const express = require('express');
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();
const app = express();
const PORT = 3003;

app.use(cors()); // Esto permite solicitudes de cualquier origen
app.use(express.json()); // Middleware para parsear JSON
app.use(express.urlencoded({ extended: true })); // Agregar este middleware

const path = require('path');
const dbPath = path.resolve(__dirname, '../data/myBitcoinBalance.db');
const db = new sqlite3.Database(dbPath);
const apiKey = process.env.API_KEY;

// Insertar un nuevo balance
app.post('/api/balance', (req, res) => {
    console.log(req.body);
    const { date, amount } = req.body;
    if (!date || !amount) {
        return res.status(400).send('La fecha y la cantidad son obligatorias.');
    }
    db.run(`INSERT INTO balance (date, amount) VALUES (?, ?)`, [date, amount], function (err) {
        if (err) {
            console.error('Error al insertar el balance', err);
            res.status(500).send('Error al insertar el balance: ' + err);
        } else {
            res.status(201).send({ id: this.lastID });
        }
    });
});

// Obtener el historial de balances
app.get('/api/balance', (req, res) => {
    db.all(`SELECT * FROM balance`, [], (err, rows) => {
        if (err) {
            console.error('Error al obtener los balances', err);
            res.status(500).send('Error al obtener los balances: ' + err);
        } else {
            console.log('Balance añadido correctamente');
            res.status(200).json(rows);
        }
    });
});

// Reset de la base de datos
app.delete('/api/reset', (req, res) => {
    db.run(`DELETE FROM balance`, function (err) {
        if (err) {
            console.error('Error al eliminar los balances', err);
            res.status(500).send('Error al eliminar los balances');
        } else {
            res.status(200).send(`Base de datos reseteada, ${this.changes} filas eliminadas.`);
        }
    });
});

// Obtener el precio actual de Bitcoin desde la API de coinmarketcap usando mi API Key
app.get('/api/bitcoinPrice', (req, res) => {
    const axios = require('axios');
    axios.get('https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?symbol=BTC', {
        headers: {
            'X-CMC_PRO_API_KEY': apiKey
        },
        params: {
            'convert': 'EUR'
        }
    })
        .then(response => {
            console.log(response.data);
            // const priceUSD = response.data.data.BTC.quote.USD;
            const priceEUR = response.data.data.BTC.quote.EUR;
            res.status(200).json({ EUR: priceEUR });
        })
        .catch(error => {
            console.error('Error al obtener el precio de Bitcoin: ', error);
            res.status(500).send('Error al obtener el precio de Bitcoin: ' + error);
        });
});

app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
