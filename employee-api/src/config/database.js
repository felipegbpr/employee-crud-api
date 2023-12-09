/**
 * arquivo: config/databse.js
 * descrição: arquivo responsável pelas 'connectionStrings' (Cosmos DB & PostgreSQL)
 * data: 09/12/2023
 * author: Felipe Gomes <@felipe_borrges>
 */

const { Pool } = require('pg');
const dotenv = require('dotenv');

dotenv.config();

// => Conexão com a Base de Dados:
const pool = new Pool({
  connectionString: process.env.DATABASE_URL
});

pool.on('error', (err, client) => {
  console.log('Unexpected error on idle cliente', err);
  process.env(-1);
});

pool.on('connect', () => {
  console.log('Base de Dados conectado com sucesso!');
});

module.exports = {
  query: (text, params) => pool.query(text, params), 
};
