const mongoose = require("mongoose")
const crypto = require("crypto")

const schema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
    },
    vbucks: {
        type: Number,
        default: 2147483647
    },
    gifts: {
        type: Array,
        default: []
    },
    accepted: {
        type: Array,
        default: []
    }
})

module.exports = mongoose.model("friends", schema)