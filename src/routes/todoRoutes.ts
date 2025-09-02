import express from 'express';
import { createTodo, getTodos, getTodo, updateTodo, deleteTodo } from '../controllers/todoController.js';

const router = express.Router();

/**
 * @swagger
 * /todos:
 *   post:
 *     summary: Créer une nouvelle tâche
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               completed:
 *                 type: boolean
 *     responses:
 *       201:
 *         description: Tâche créée
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ToDo'
 */
router.post('/todos', createTodo);

/**
 * @swagger
 * /todos:
 *   get:
 *     summary: Récupérer toutes les tâches
 *     responses:
 *       200:
 *         description: Liste des tâches
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/ToDo'
 */
router.get('/todos', getTodos);

/**
 * @swagger
 * /todos/{id}:
 *   get:
 *     summary: Récupérer une tâche par son id
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Tâche trouvée
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ToDo'
 *       404:
 *         description: Tâche non trouvée
 */
router.get('/todos/:id', getTodo);

/**
 * @swagger
 * /todos/{id}:
 *   put:
 *     summary: Mettre à jour une tâche
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               completed:
 *                 type: boolean
 *     responses:
 *       200:
 *         description: Tâche mise à jour
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ToDo'
 *       404:
 *         description: Tâche non trouvée
 */
router.put('/todos/:id', updateTodo);

/**
 * @swagger
 * /todos/{id}:
 *   delete:
 *     summary: Supprimer une tâche
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Tâche supprimée
 *       404:
 *         description: Tâche non trouvée
 */
router.delete('/todos/:id', deleteTodo);

/**
 * @swagger
 * components:
 *   schemas:
 *     ToDo:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *         title:
 *           type: string
 *         completed:
 *           type: boolean
 */

export default router;
