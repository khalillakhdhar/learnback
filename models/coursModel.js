const mongoose = require('mongoose');

const coursSchema = mongoose.Schema(
  {
    titre: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    responsable: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Enseignant',
      required: false,
    },
    candidats: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Candidat',
      },
    ],
    supports: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Support',
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Cours = mongoose.model('Cours', coursSchema);

module.exports = Cours;
