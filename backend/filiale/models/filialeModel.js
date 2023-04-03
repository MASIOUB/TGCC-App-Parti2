const mongoose = require('mongoose');

const filialeSchema = mongoose.Schema(
    {
        name: {
            type: String,
        },
        address: {
            type: String,
            unique: true,
        },
    },
    {
        timestamps: true,
    }
)

module.exports = mongoose.model('Filiale', filialeSchema);