import FormPessoa from "./form-entra-pessoa/form-pessoa";
import TablePessoa from "./table-lista-pessoas/form-pessoa";
import { useState, useEffect } from "react";

const App = () => {
  const [dados, setDados] = useState([
    { nome: "Jonathan", sobrenome: "Oliveira", idade: 20 },
    { nome: "Cauã", sobrenome: "Cruz", idade: 17 },
    { nome: "Natan", sobrenome: "Emanuel", idade: 20 },
    { nome: "João", sobrenome: "Lucas", idade: 17 },
    { nome: "Leo", sobrenome: "Cardoso", idade: 18 },
  ]);
  const salvar = (novaPessoas)=>{
    setDados([...dados, novaPessoas])
  }

  return (
    <>
      <FormPessoa  adicionarPessoa={salvar}/>
      <TablePessoa pessoas={dados} />
    </>
  );
};

export default App;
