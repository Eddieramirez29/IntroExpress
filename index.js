const express = require("express");
const app = express();
const port = 3000;

app.get("/", (request, response) =>
{
    response.send({message:"Intro to Express"})
});

app.listen(port, () =>
{
    console.log("Aplicación escuchando por el puerto " + port);
})