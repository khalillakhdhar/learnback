const express = require('express');
const {
  getCandidats,
  getCandidatById,
  createCandidat,
  updateCandidat,
  deleteCandidat,
} = require('../controllers/candidatController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

router.route('/')
  .get(protect, getCandidats) // Route pour obtenir tous les candidats
  .post(protect, createCandidat); // Route pour créer un candidat

router.route('/:id')
  .get(protect, getCandidatById) // Route pour obtenir un candidat par ID
  .put(protect, updateCandidat)  // Route pour mettre à jour un candidat par ID
  .delete(protect, deleteCandidat); // Route pour supprimer un candidat par ID

module.exports = router;
