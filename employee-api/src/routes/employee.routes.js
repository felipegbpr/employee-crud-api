/**
 * arquivo: routes/employee.routes.js
 * descrição: arquivo responsável pelas rotas da API
 * data: 09/12/2023
 * author: Felipe Gomes <@felipe_borrges>
 */

const router = require('express-promise-router')(); 
const employeeController = require('../controllers/employee.controller');

// => Definindo as rotas do CRUD  - 'Employee'

// => Rota responsável por criar um novo 'Colaborador(a)': (POST): localhost:3000/api/employees 
router.post('/employees', employeeController.createEmployee);

module.exports = router;