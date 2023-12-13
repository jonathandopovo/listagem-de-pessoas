const express = require("express");
const router = express.Router();
const pessoaController = require("../controllers/pessoaController");

router.get("/", pessoaController.listarPessoas);
router.get("/add", pessoaController.inserirPessoa);

module.exports = router;
