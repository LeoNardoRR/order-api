const express = require('express');
const ctrl = require('../controllers/order.controller');

const router = express.Router();

router.post('/', ctrl.create);           // criar
router.get('/list', ctrl.list);          // listar
router.get('/:orderId', ctrl.getById);   // obter por id
router.put('/:orderId', ctrl.update);    // atualizar
router.delete('/:orderId', ctrl.remove); // deletar

module.exports = router;
