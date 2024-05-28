const mongoose = require('mongoose');

const supportSchema = mongoose.Schema(
  {
    titre: {
      type: String,
      required: true,
    },
    pieceJointe: {
      type: String,
      required: true,
    },
    cours: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Cours',
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Support = mongoose.model('Support', supportSchema);

module.exports = Support;
