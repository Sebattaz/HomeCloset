const app = require('./app');


const {getAdministradores} = require('./src/controllers/usersControllers')


    
app.listen(process.env.PORT, 
    ()=> console.log(`Servidor levantado en puerto ${process.env.PORT}`))
    

app.get("/administradores", async (req,res)=>{
    const data = await getAdministradores();
    res.json(data);
});