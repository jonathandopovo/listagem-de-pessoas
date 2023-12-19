import React, { useEffect, useState } from "react";

const FormPessoa = ({ onSelected, handleSubmit, resetSelected }) => {
  const [pessoa, setPessoa] = useState({});

  useEffect(() => {
    setPessoa(onSelected);
  }, [onSelected]);

  const submit = (e) => {
    e.preventDefault();
    console.log(pessoa);
    handleSubmit(pessoa).then((result) => {
      if (result) {
        resetSelected();
      }
    });
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
            defaultValue={onSelected.nome}
            onChange={(e) => setPessoa({ ...pessoa, nome: e.target.value })}
            required
          />
          <input
            type="text"
            className="bg-secondary rounded-full py-2 px-3 text-fontcolor2 w-full"
            placeholder="Sobrenome"
            defaultValue={onSelected.sobrenome}
            onChange={(e) =>
              setPessoa({ ...pessoa, sobrenome: e.target.value })
            }
            required
          />
          <input
            type="number"
            className="bg-secondary rounded-full py-2 px-3 text-fontcolor2 w-full"
            placeholder="Idade"
            defaultValue={onSelected.idade}
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
