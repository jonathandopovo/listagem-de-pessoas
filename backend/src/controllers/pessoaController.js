const ps = require("../services/pessoa.service");

const pessoaController = {
  listarPessoas: (req, res) => {
    try {
      const pessoas = ps.getPessoas();
      res.json(pessoas);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },
  listarPessoaPorId: (req, res) => {
    try {
      const pessoa = ps.getById(req.params.body);
      res.json(pessoa);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },
  editarPessoa: (req, res) => {
    try {
      const jaExist = ps.getById(req.params.id);
      if (!jaExist) {
        return res
          .status(500)
          .json({ message: "Esse usuário ainda não foi cadastrado!" });
      }
      const pessoa = ps.updatePessoa(req.body);
      res.json(pessoa);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },
};
