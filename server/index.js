const express = require('express')
const cors = require('cors')
const sqlite3 = require('sqlite3').verbose()
const path = require('path')
const dotenv = require('dotenv')

dotenv.config()

const app = express()
const PORT = 5000

app.use(cors())
app.use(express.json())

const dbPath = path.join(__dirname, 'data', 'projets.db')
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('Erreur lors de la connexion à la base de données:', err.message)
  } else {
    console.log('Connexion à SQLite réussie.')
  }
})

db.run(`CREATE TABLE IF NOT EXISTS projets (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  titre TEXT NOT NULL,
  description TEXT NOT NULL
)`)

app.get('/projets', (req, res) => {
  db.all('SELECT titre, description FROM projets', [], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message })
    res.json(rows)
  })
})

app.post('/projets', (req, res) => {
  const { titre, description, password } = req.body
  if (password !== process.env.PROJECT_PASSWORD) {
    return res.json({ success: false, error: 'Mot de passe incorrect' })
  }
  db.run('INSERT INTO projets (titre, description) VALUES (?, ?)', [titre, description], function (err) {
    if (err) return res.json({ success: false, error: err.message })
    res.json({ success: true })
  })
})

app.listen(PORT, () => {
  console.log(`Serveur backend démarré sur http://localhost:${PORT}`)
})
