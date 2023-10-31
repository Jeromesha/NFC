import mongoose from "mongoose";

const { Schema, model } = mongoose;

const Settings = new Schema({
    stripe: {
        striptKey: String,
        stripeSecret: String,
    },
    paypal: {
        clientID: String,
        paypalSecret: String,
        mode: String,
        email: String,
        currency: String,
    },
    affliation: Boolean,
        contact: Boolean,
        vCardStickyBar: Boolean,
        timeFormat: String
});

Settings.set("autoIndex", true);

const SettingsDB = model("Settings", Settings);
SettingsDB.createIndexes();

export default SettingsDB;
