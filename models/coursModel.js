const mongoose = require('mongoose');

const coursSchema = new mongoose.Schema({
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
    ref: 'Candidat',
    required: true,
  },
  supports: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Support',
    },
  ],
}, {
  timestamps: true,
});

module.exports = mongoose.model('Cours', coursSchema);
