import express, { } from 'express'
import { activityCheckin, activityCheckout, listActivity, removeActivity } from './controllers/activitiesControllers.js';
import { insertVehicles, listVehicles, removeVehicle, updateVehicles } from './controllers/vehiclesControllers.js';
 
const app = express();

app.use ((req, res, next)=> {
    res.header ("Access-Control-Allow-Origin", "*");
    res.header ("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    res.header ("Access-Control-Allow-Headers", "X-PINGOTHER, Content-Type, Authorization");
    next();
})

app.use(express.json());

/*GET de PING */
app.get('/api/ping', (require, response)=>{
    response.send({
        message: 'pong'
    })
});

/* Endpoints Vehicles*/
/*Get para pegar informações do Banco de dados */
app.get ('/api/vehicles', listVehicles);

//Inserir informações no banco de dados. 
app.post('/api/vehicles', insertVehicles);

/*Put para atualizações no banco de dados */
app.put('/api/vehicles/:id', updateVehicles);

// Delete para apagar algo do Banco de dados
app.delete ('/api/vehicles/:id', removeVehicle);

// Endpoint das Atividades (activities)

//Dar Check-in nos veiculos do estacionamento
app.post('/api/activities/checkin', activityCheckin);

// Dar Check-out nos veiculos do estacionamento
app.put('/api/activities/checkout', activityCheckout);

//deletear atividades do banco de dados do estacionamento
app.delete('/api/activities/:id', removeActivity);

//pegar a lista de atividades do estacionamento
app.get('/api/activities', listActivity);

/* Quando rodar a API, saber se está ok */
app.listen (8000, () =>{
    console.log ("servidor rodando na porta 8000...");
});
