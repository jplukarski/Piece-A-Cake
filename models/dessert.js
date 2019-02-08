const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const dessertSchema = new Schema({

    occassion: { type: String, required: true },
    dessert: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    instagram_link: { type: String },
    facebook_link: { type: String },
    tags: { type: String, required: true },
    date: { type: Date, default: Date.now }

});

const Dessert = mongoose.model("Dessert", dessertSchema);

module.exports = Dessert;
