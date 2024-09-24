const express = require('express');
const bodyParser = require('body-parser');
const { Pessoa } = require('./models');

const app = express();
app.use(bodyParser.json());


app.post('/pessoa', async (req, res) => {
  const { nome, cpf, telefone } = req.body;
  try {
    const novaPessoa = await Pessoa.create({ nome, cpf, telefone });
    res.status(201).json(novaPessoa);
  } catch (error) {
    res.status(400).json({ error: 'Erro ao cadastrar pessoa' });
  }
});


app.get('/pessoas', async (req, res) => {
  const pessoas = await Pessoa.findAll();
  res.json(pessoas);
});

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});