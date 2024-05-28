const mongoose = require('mongoose');

const options = { discriminatorKey: 'role', collection: 'users' };

const candidatSchema = mongoose.Schema(
  {
    nom: {
      type: String,
      required: true,
    },
    prenom: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    mdp: {
      type: String,
      required: true,
    },
    telephone: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
      enum: ['Candidat', 'Enseignant', 'Admin'],
      default: 'Candidat'
    },
  },
  {
    timestamps: true,
    ...options
  }
);

const Candidat = mongoose.model('Candidat', candidatSchema);

module.exports = Candidat;
