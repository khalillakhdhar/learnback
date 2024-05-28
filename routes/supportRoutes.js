const express = require('express');
const {
  getSupports,
  getSupportById,
  createSupport,
  updateSupport,
  deleteSupport,
} = require('../controllers/supportController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

router.route('/')
  .get( getSupports) // Route pour obtenir tous les supports
  .post( createSupport); // Route pour créer un support

router.route('/:id')
  .get( getSupportById) // Route pour obtenir un support par ID
  .put( updateSupport)  // Route pour mettre à jour un support par ID
  .delete( deleteSupport); // Route pour supprimer un support par ID

module.exports = router;
