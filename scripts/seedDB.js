const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Desserts collection and inserts the desserts below

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/piece-a-cake-metadata"
);

const dessertSeed = [
    {
        occassion: "birthday",
        dessert: "cake",
        description: "Calling all Fortnite fans! Chocolate fudge cake with cookies and cream frosting.",
        image: "https://scontent-ort2-2.cdninstagram.com/vp/8b96e2723a7c1f63f58cfe339bf565d7/5D0139F5/t51.2885-15/e35/49985306_1157016357805417_9109012848108843805_n.jpg?_nc_ht=scontent-ort2-2.cdninstagram.com",
        instagram_link: "https://instagram.com/p/BtRO7pchnLN/",
        tags: ["fortnight", "chocolate", "fudge", "cake", "birthday", "cookies", "cream"]
    }
];

db.Dessert
    .remove({})
    .then(() => db.Dessert.collection.insertMany(dessertSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });