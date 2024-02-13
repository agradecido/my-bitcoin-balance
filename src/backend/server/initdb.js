const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./myBitcoinBalance.db', (err) => {
    if (err) {
        console.error('Error al abrir la base de datos', err);
    } else {
        console.log('Base de datos conectada');
        db.run(`CREATE TABLE IF NOT EXISTS balance(
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      date TEXT NOT NULL,
      amount REAL NOT NULL
    )`, (err) => {
            if (err) {
                console.error('Error al crear la tabla', err);
            } else {
                console.log('Tabla creada o ya existente');
            }
        });
    }
});
