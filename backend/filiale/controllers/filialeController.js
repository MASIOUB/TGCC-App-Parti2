const Filiale = require('../models/filialeModel');

// @route POST /filiales
const createFiliale = async (req, res) => {
    const { name, address } = req.body;

    if (!name || !address) {
        res.status(400).json({ message: 'Enter all fields please'});
    };

    const filiale = await Filiale.create({
        name: name,
        address: address,
    });

    res.status(200).json(filiale);
}

// @route GET /filiales
const getAllFiliales = async (req, res) => {
    const filiales = await Filiale.find();

    res.status(200).json(filiales);
}

module.exports = {
    createFiliale,
    getAllFiliales,
}