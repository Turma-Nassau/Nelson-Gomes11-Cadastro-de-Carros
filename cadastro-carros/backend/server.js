const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '123456',
  database: 'cadastro_carros'
});

app.get('/carros', (req, res) => {
  const sql = 'SELECT * FROM carros';
  connection.query(sql, (error, results) => {
    if (error) {
      res.status(500).json({ error: 'Ocorreu um erro ao buscar os carros.' });
    } else {
      res.json(results);
    }
  });
});

app.post('/carros', (req, res) => {
  const { marca, modelo, ano } = req.body;
  const sql = 'INSERT INTO carros (marca, modelo, ano) VALUES (?, ?, ?)';
  connection.query(sql, [marca, modelo, ano], (error, result) => {
    if (error) {
      res.status(500).json({ error: 'Ocorreu um erro ao salvar o carro.' });
    } else {
      res.json({ message: 'Carro salvo' });
    }
  });
});

app.put('/carros/:id', (req, res) => {
  const { marca, modelo, ano } = req.body;
  const { id } = req.params;
  const sql = 'UPDATE carros SET marca = ?, modelo = ?, ano = ? WHERE id = ?';
  connection.query(sql, [marca, modelo, ano, id], (error, result) => {
    if (error) {
      res.status(500).json({ error: 'Erro ao atualizar o carro.' });
    } else if (result.affectedRows === 0) {
      res.status(404).json({ error: 'Carro não encontrado.' });
    } else {
      res.json({ message: 'Carro atualizado' });
    }
  });
});

const port = 3001;
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
