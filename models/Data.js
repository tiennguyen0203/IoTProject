const mongoose = require("mongoose")

const DataScheme = new mongoose.Schema({
    data: {
        type: Object,
    },
    timestamp: {
        type: Date,
        default: Date.now()
    }
})

const Data = mongoose.model("Data", DataScheme)

module.exports = Data
