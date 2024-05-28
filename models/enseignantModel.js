const Candidat = require('./candidatModel');

const enseignantSchema = new mongoose.Schema(
  {
    specialite: {
      type: String,
      required: true,
    },
    cours: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Cours',
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Enseignant = Candidat.discriminator('Enseignant', enseignantSchema);

module.exports = Enseignant;
