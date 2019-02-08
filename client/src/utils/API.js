import axios from "axios";

export default {
    // Gets all desserts
    getDesserts: function () {
        return axios.get("/api/desserts");
    },
    // Gets the dessert with the given id
    getDessert: function (id) {
        return axios.get("/api/desserts/" + id);
    },
    // Deletes the dessert with the given id
    deleteDessert: function (id) {
        return axios.delete("/api/desserts/" + id);
    },
    // Saves a dessert to the database
    saveDessert: function (dessertData) {
        return axios.post("/api/desserts", dessertData);
    }
};
