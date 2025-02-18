require('dotenv').config();
const express = require('express');
const cors = require('cors');
const db = require('./db');

const app = express();
app.use(express.json());
app.use(cors());

const PORT = 8080;

// Rota para cadastrar usuários
app.post('/usuarios', async (req, res) => {
    const { nome, email, senha } = req.body;
    try {
        await db.query('INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)', [nome, email, senha]);
        res.status(201).send({ message: 'Usuário cadastrado com sucesso!' });
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});

// Rota para listar usuários
app.get('/usuarios', async (req, res) => {
    try {
        const [rows] = await db.query('SELECT id, nome, email FROM usuarios');
        res.send(rows);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
