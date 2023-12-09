/**
 * arquivo: app.js
 * descrição: arquivo responsável pela chamada da API na aplicação no lado do Back-End
 * data: 09/12/2023
 * author: Felipe Gomes <@felipe_borrges>
 */

const express = require('express');

const router = express.Router();

router.get('/api', (req, res) => {
  res.status(200).send({
    success: 'true',
    message: 'Seja bem-vindo(a) a API Node.js + PostgreSQL + Azure',
    version: '1.0.0'
  });
});

module.exports = router;