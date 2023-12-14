import FormPessoa from "./form-entra-pessoa/form-pessoa";
import TablePessoa from "./table-lista-pessoas/form-pessoa";
import { apiGetPessoas, apiAddPessoa } from "./api/pessoa.server";
import { useState, useEffect } from "react";

const App = () => {
  const [dados, setDados] = useState([]);
  const [onAction, setOnAction] = useState(false);
  const [current, setCurrent] = useState({
    nome: null,
    sobrenome: null,
    idade: null,
  });

  useEffect(() => {
    fetchPessoas();
  }, [onAction]);

  const fetchPessoas = async () => {
    const resultado = await apiGetPessoas();
    setDados(resultado);
  };

  const handlePessoa = async (novoDado) => {
    await apiAddPessoa(novoDado);
    setOnAction(!onAction);
  };

  return (
    <>
      <FormPessoa current={current} insertPessoa={handlePessoa} />
      <TablePessoa pessoas={dados} />
    </>
  );
};

export default App;
