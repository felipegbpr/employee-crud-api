/**
 * arquivo: server.js
 * descrição: arquivo responsável por toda a configuração e execução do Back-End ('Employee')
 * data: 09/12/2023
 * author: Felipe Gomes <@felipe_borrges>
 */

const app = require('./src/app');

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log('Aplicação sendo executada na porta ... : ', port);
});
