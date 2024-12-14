const app = require("./app");

const {
  getAdministradores,
  agregarUsuario,
} = require("./src/controllers/usersControllers");

app.listen(process.env.PORT, () =>
  console.log(`Servidor levantado en puerto ${process.env.PORT}`)
);

app.get("/administradores", async (req, res) => {
  const data = await getAdministradores();
  res.json(data);
});

app.post("/usuario", async (req, res) => {
  try {
    const {rut, password, email, nombre, edad, direccion} = req.body;

    await agregarUsuario(rut, password, email, nombre, edad, direccion);
    res.send("Usuario creado con éxito");
  } catch (err) {
    res.status(500).send(err);
  }
});
