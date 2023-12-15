import FormPessoa from "./form-entra-pessoa/form-pessoa";
import TablePessoa from "./table-lista-pessoas/form-pessoa";
import { apiGetPessoas, apiAddPessoa } from "./api/pessoa.server";
import { useState, useEffect } from "react";

const App = () => {
  const [dados, setDados] = useState([]);
  const [onAction, setAction] = useState(false);
  const [selected, setSelected] = useState({
    id: null,
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

  const handleSubmit = async (novoDado) => {
    await apiAddPessoa(novoDado);
    setAction(!onAction);
  };

  const handleClick = (e, pessoa) => {
    if (e.type === "click") {
      const confirmarUpdate = window.confirm(
        `Você tem certeza que deseja atualizar os dados de ${pessoa.nome}?`
      );
      if (confirmarUpdate) {
        setSelected(pessoa);
      }
    } else if (e.type === "contextmenu") {
      e.preventDefault();
      if (e.button === 2) {
        const confirmarDelete = window.confirm(
          `Você tem certeza que deseja atualizar os dados de ${pessoa.nome}?`
        );
      }
    }
  };

  return (
    <>
      <FormPessoa selected={selected} handleSubmit={handleSubmit} />
      <TablePessoa pessoas={dados} handleClick={handleClick} />
    </>
  );
};

export default App;
