const url ="http://localhost:8000/api"
//Metodo Post de veiculos - Inserir os veiculos na API
const postVeiculo = (objetoCliente) =>{
    console.log("objetoCliente: ", JSON.stringify(objetoCliente))
    return fetch(url + "/vehicles", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(objetoCliente) 
    }).then((response) => {
       if(response.status != 200){
           console.log(`Erro no servidor: ${response.status}`)
       }else {
           alert(`Sucesso ao salvar: ${response.status}`)
       }
    })
}
//Metodo Get de Veiculos
const getVeiculo = () => {
    return fetch(url + "/vehicles")
    .then((response) => {
        if(response.status != 200){
            console.log(`Erro no servidor: ${response.status}`)
        }else {
            return response.json()
        }
     })
}
//------------------- PUT veiculos---------------------
const putVeiculo = (objetoCliente,id) =>{
    return fetch(`${url}/vehicles/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(objetoCliente)
    }).then((response) => {
        if(response.status != 200){
            console.log(`Erro no servidor: ${response.status}`)
        } else {
            return response.json()
        }
    })
}


//Metodo GET de Ativicties
    const getActivities = () => {
    return fetch(url + "/activities")
    .then((response) => {
        if(response.status != 200){
            console.log(`Erro no servidor: ${response.status}`)
        }else {
            return response.json()
        }
     })
}

// --- METODO POST Activities---------------------

const postCheckin = (label) =>{
    return fetch(url + "/activities/checkin", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({label}) 
    }).then((response) => {
       if(response.status != 200){
           console.log(`Erro no servidor: ${response.status}`)
       }else {
           return response.json()
       }
    })
}


//-------------------METODO PUT---------------------------------
const putCheckout = (objeto) => {
    return fetch(url + "/activities/checkout", {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(objeto) 
    }).then((response) => {
       if(response.status != 200){
           console.log(`Erro no servidor: ${response.status}`)
       }else {
           return response.json()
       }
    })
}

//--------------DELETE---------------
   const deletaVeiculo = (id) => {
    return fetch(`${url}/vehicles/${id}`, {
        method: "DELETE",
    }).then((response) => {
       if(response.status != 200){
           console.log(`Erro no servidor: ${response.status}`)
       }else {
          return response.json()
       }
    })
}

// ----------------------Export

export const service = {
    postVeiculo,
    getVeiculo,
    putVeiculo,
    deletaVeiculo,
    getActivities,
    postCheckin,
    putCheckout
}
