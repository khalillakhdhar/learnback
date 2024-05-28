const express = require('express');
const {
  getEvaluations,
  getEvaluationById,
  createEvaluation,
  updateEvaluation,
  deleteEvaluation,
} = require('../controllers/evaluationController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

router.route('/')
  .get(protect, getEvaluations) // Route pour obtenir toutes les évaluations
  .post(protect, createEvaluation); // Route pour créer une évaluation

router.route('/:id')
  .get(protect, getEvaluationById) // Route pour obtenir une évaluation par ID
  .put(protect, updateEvaluation)  // Route pour mettre à jour une évaluation par ID
  .delete(protect, deleteEvaluation); // Route pour supprimer une évaluation par ID

module.exports = router;
