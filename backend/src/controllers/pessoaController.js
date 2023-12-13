const Pessoa = require("../models/pessoa");

exports.listarPessoas = async (req, res) => {
  try {
    const pessoas = await Pessoa.findAll();
    res.json(pessoas);
  } catch (err) {
    res.status(500).json({ message: `Erro: ${err.message}` });
  }
};

exports.inserirPessoa = async (req, res) => {
  try {
    const { nome, sobrenome, idade } = req.body;
    const novaPessoa = await Pessoa.create({ nome, sobrenome, idade });
    res.status(201).json(novaPessoa);
  } catch (err) {
    res.status(400).json({ message: `Erro: ${err.message}` });
  }
};

