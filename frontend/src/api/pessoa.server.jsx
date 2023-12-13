const URL_API = "http://localhost:8000/api"

export const getPessoas = async () => {
    try{
        const response = await fetch(`${URL_API}/pessoa`)
        if(!response.ok){
            throw new Error("Falha na requisição!")
        }
        return await response.json()
    } catch (err) {
        throw new Error("Erro ao carregar os dados!")
    }
};

export const setPessoas = async (novaPessoa) => {
    try{
        const response = await fetch(`${URL_API}/pessoa/add`, 
        {method:"POST", headers:{"Content-Types":"application/json",},body:JSON.stringify(novaPessoa)})
        if(!response.ok){
            throw new Error("Falha na requisição!")
        }
    } catch (err) {
        throw new Error("Erro ao carregar os dados!")
    }
};

