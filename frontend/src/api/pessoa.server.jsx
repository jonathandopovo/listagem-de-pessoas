const URL_API = "http://localhost:8000/api";

export const apiGetPessoas = async () => {
  try {
    const response = await fetch(`${URL_API}/pessoa`);
    if (!response.ok) {
      throw new Error("Falha na requisição!");
    }
    return await response.json();
  } catch (err) {
    throw new Error("Erro ao carregar os dados!");
  }
};

export const apiAddPessoa = async (novaPessoa) => {
  try {
    const res = await fetch(`${URL_API}/pessoa/add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(novaPessoa),
    });

    if (!res.ok) {
      throw new Error("Houve erro na adição do usuário");
    }

    const result = await res.json();
    return result;
  } catch (error) {
    throw new Error(error.message);
  }
};
