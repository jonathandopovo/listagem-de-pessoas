import React, { useState } from "react";

const FormPessoa = ({ adicionarPessoa }) => {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [idade, setIdade] = useState(0);
  const handleInputs = (e) => {
    e.preventDefault();
    const novaPessoa = { nome: nome, sobrenome: sobrenome, idade: idade };
    adicionarPessoa(novaPessoa);
  };
  return (
    <>
      <div className="h-64 w-96 mx-auto rounded-lg shadow-2xl px-6">
        <h1 className="my-4 text-2xl text-fontcolor2 text-center">
          Nova Pessoa
        </h1>
        <form className="space-y-2" onSubmit={handleInputs}>
          <input
            type="text"
            className="bg-secondary rounded-full py-2 px-3 text-fontcolor2 w-full"
            placeholder="Nome"
            onChange={(e) => setNome(e.target.value)}
            required
          />
          <input
            type="text"
            className="bg-secondary rounded-full py-2 px-3 text-fontcolor2 w-full"
            placeholder="Sobrenome"
            onChange={(e) => setSobrenome(e.target.value)}
            required
          />
          <input
            type="number"
            className="bg-secondary rounded-full py-2 px-3 text-fontcolor2 w-full"
            placeholder="Idade"
            onChange={(e) => setIdade(parseInt(e.target.value))}
            required
          />
          <button
            type="submit"
            className="bg-tertiary w-full py-2 rounded-full hover:opacity-80 text-fontcolor2"
          >
            Cadastrar
          </button>
        </form>
      </div>
    </>
  );
};

export default FormPessoa;
