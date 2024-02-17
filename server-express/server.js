const express = require("express");

const app = express();
const port = 5002;

// Rota principal que responde com "Olá mundo | EXPRESS"
app.get('/rota1', (req, res) => {
    res.send('Olá mundo | EXPRESS');
  });

// Rota alternativa que responde com "Olá mundo | EXPRESS"
app.get('/rota2', (req, res) => {
  let numrota = 
  res.send('ROTA 2 - Olá mundo | EXPRESS');
});  

  app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
  });
