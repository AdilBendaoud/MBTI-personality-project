const mongoose = require("mongoose");
const Note = require('../models/Note');

exports.recommandation = async (req, res)=>{
    const personality = req.body.personality;
    try {
        const results = await getMeanNotesByFiliereForPersonality(personality)
        return res.status(200).json({
            success: true,
            results
          });
      } catch (error) {
        return res.status(500).json({ success: false, message: "Oops there is an Error" });
      }
}

async function getMeanNotesByFiliereForPersonality(personality) {
  try {
    const result = await Note.aggregate([
      {
        $lookup: {
          as: "etudiants",
          from: "etudiants",
          foreignField: "_id",
          localField: "etudiant"
        }
      },
      {
        $lookup: {
          as: "profs",
          from: "profs",
          foreignField: "_id",
          localField: "prof"
        }
      },
      {
        $match: {
          "etudiants.personnalite": personality
        }
      },
      {
        $group: {
          _id: {
            etudiants_filiere: "$etudiants.filiere",
            etudiants_personnalite:
              "$etudiants.personnalite"
          },
          avg_note: {
            $avg: "$note"
          }
        }
      },
      {
        $lookup: {
          as: "filieres",
          from: "filieres",
          foreignField: "_id",
          localField: "_id.etudiants_filiere"
        }
      },
      {
        $project: {
          _id: 0,
          "filieres.nom": 1,
          avg_note: 1
        }
      }
    ]);

    return result;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}