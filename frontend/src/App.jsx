import FormPessoa from "./form-entra-pessoa/form-pessoa";
import TablePessoa from "./table-lista-pessoas/form-pessoa";
import {getPessoas} from "./api/pessoa.server";
import { useState, useEffect } from "react";

const App = () => {
  const [dados, setDados] = useState([]);
  const [current, setCurrent] = useState({
    nome: null,
    sobrenome: null,
    idade: null,
  });

  useEffect(() => {
    fetchPessoas();
  }, []);

  const fetchPessoas = async () => {
    const resultado = await getPessoas();
    setDados(resultado);
  };

  const handlePessoa = async (novoDado) => {
    await setCurrent(novoDado);
  };

  return (
    <>
      <FormPessoa current={current} insertPessoa={setCurrent} />
      <TablePessoa pessoas={dados} />
    </>
  );
};

export default App;
