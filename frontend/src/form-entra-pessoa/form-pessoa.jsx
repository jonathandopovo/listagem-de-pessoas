import React, { useState } from "react";

const FormPessoa = ({ current, insertPessoa }) => {
  const [pessoa, setPessoa] = useState({});
  const submit = (e) => {
    e.preventDefault();
    insertPessoa(pessoa);
  };

  return (
    <>
      <div className="h-64 w-96 mx-auto rounded-lg shadow-2xl px-6">
        <h1 className="my-4 text-2xl text-fontcolor2 text-center">
          Nova Pessoa
        </h1>
        <form className="space-y-2" onSubmit={submit}>
          <input
            type="text"
            className="bg-secondary rounded-full py-2 px-3 text-fontcolor2 w-full"
            placeholder="Nome"
            onChange={(e) => setPessoa({ ...pessoa, nome: e.target.value })}
            required
          />
          <input
            type="text"
            className="bg-secondary rounded-full py-2 px-3 text-fontcolor2 w-full"
            placeholder="Sobrenome"
            onChange={(e) =>
              setPessoa({ ...pessoa, sobrenome: e.target.value })
            }
            required
          />
          <input
            type="number"
            className="bg-secondary rounded-full py-2 px-3 text-fontcolor2 w-full"
            placeholder="Idade"
            onChange={(e) =>
              setPessoa({ ...pessoa, idade: parseInt(e.target.value) })
            }
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
