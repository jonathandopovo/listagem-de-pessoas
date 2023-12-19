const TablePessoa = ({ pessoas, handleEdit }) => {
  return (
    <>
      <div className="relative overflow-x-auto sm:rounded-lg mt-5 shadow-2xl">
        <table className="w-full text-sm text-left rtl:text-right text-fontcolor2 dark:text-fontcolor2">
          <thead className="text-xs text-white/80 uppercase bg-secondary dark:text-white">
            <tr>
              <th scope="col" className="px-6 py-3">
                Id
              </th>
              <th scope="col" className="px-6 py-3">
                Nome
              </th>
              <th scope="col" className="px-6 py-3">
                Sobrenome
              </th>
              <th scope="col" className="px-6 py-3">
                Idade
              </th>
            </tr>
          </thead>
          <tbody>
            {pessoas.map((pessoa, index) => (
              <tr
                key={index}
                className="hover:bg-gray-500/20"
                onClick={(e) => {
                  handleEdit(e, pessoa);
                }}
                onContextMenu={(e) => {
                  handleEdit(e, pessoa);
                }}
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-50 whitespace-nowrap dark:text-fontcolor2"
                >
                  {index + 1}
                </th>
                <td className="px-6 py-4">{pessoa.nome}</td>
                <td className="px-6 py-4">{pessoa.sobrenome}</td>
                <td className="px-6 py-4">{pessoa.idade}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
export default TablePessoa;
