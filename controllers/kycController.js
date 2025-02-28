// const KYC = require('../models/KYC')

// exports.createKYC = async (req, res) => {
//   try {
//     const kyc = await KYC.create({
//       fullName: req.body.fullName,
//       address: req.body.address,
//       user: req.user.id
//     });
//     res.status(200).json(kyc)
//   } catch (error) {
//     if (error.code === 11000) {
//       res.status(404).json({ message: 'KYC already exists for this user' })
//     } else {
//       res.status(404).json({ message: 'Invalid KYC data' })
//     }
//   }
// }

// const KYC = require('../models/KYC');

// // Define the createKYC function
// exports.createKYC = async (req, res) => {
//   try {
//     const { fullName, address } = req.body;
//     const kyc = await KYC.create({
//       fullName,
//       address,
//       user: req.user.id // Link to the authenticated user
//     });
//     res.status(201).json(kyc);
//   } catch (error) {
//     console.error('Error creating KYC:', error);
//     res.status(500).json({ message: 'Server error' });
//   }
// };

const KYC = require("../models/kyc");

const createKYC = async (req, res) => {
  try {
    const { documentType, documentNumber } = req.body;

    // Check if KYC already exists for this user
    const existingKYC = await KYC.findOne({ user: req.user.id });
    if (existingKYC) {
      return res.status(400).json({ message: "KYC already exists for this user" });
    }

    // Create a new KYC record
    const newKYC = new KYC({
      user: req.user.id,
      documentType,
      documentNumber,
    });

    await newKYC.save();
    res.status(201).json({ message: "KYC created successfully", kyc: newKYC });
  } catch (error) {
    console.error("Error creating KYC:", error.message);
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createKYC }; // ✅ Ensure createKYC is exported properly
