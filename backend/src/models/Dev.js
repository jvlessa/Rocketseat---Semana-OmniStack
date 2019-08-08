const { Schema, model } = require('mongoose');

const DevSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    user: {
        type: String,
        required: true
    },
    bio: String,
    avatar: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

//timestamps = cria as colunas (createdAt, updatedAt) - que são preenchidas automaticamente pelo Mongoose
module.exports = model('Dev', DevSchema);