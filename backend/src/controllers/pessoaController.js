const Pessoa = require("../models/pessoa");

exports.listarPessoas = async (req, res) => {
  try {
    const pessoas = await Pessoa.findAll();
    res.json(pessoas);
  } catch (err) {
    res.status(500).json({ message: `Erro: ${err.message}` });
  }
};

