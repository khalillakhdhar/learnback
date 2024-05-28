const express = require('express');
const {
  getCours,
  getCoursById,
  createCours,
  updateCours,
  deleteCours,
} = require('../controllers/coursController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

router.route('/')
  .get( getCours) // Route pour obtenir tous les cours
  .post( createCours); // Route pour créer un cours

router.route('/:id')
  .get( getCoursById) // Route pour obtenir un cours par ID
  .put( updateCours)  // Route pour mettre à jour un cours par ID
  .delete( deleteCours); // Route pour supprimer un cours par ID

module.exports = router;
