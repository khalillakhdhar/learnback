const mongoose = require('mongoose');

const evaluationSchema = mongoose.Schema(
  {
    candidat: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Candidat',
      required: true,
    },
    note: {
      type: Number,
      required: true,
    },
    remarques: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Evaluation = mongoose.model('Evaluation', evaluationSchema);

module.exports = Evaluation;
