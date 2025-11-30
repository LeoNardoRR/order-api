// src/routes/order.routes.js
import { Router } from 'express';
import * as ctrl from '../controllers/order.controller.js';

const router = Router();

router.post('/', ctrl.create);              // Criar novo pedido
router.get('/list', ctrl.list);             // Listar todos os pedidos
router.get('/:orderId', ctrl.getOne);       // Obter pedido por ID
router.put('/:orderId', ctrl.update);       // Atualizar pedido por ID
router.delete('/:orderId', ctrl.remove);    // Deletar pedido por ID

export default router;
