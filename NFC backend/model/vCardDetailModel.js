import mongoose from "mongoose";

const { Schema, model } = mongoose;

const VCardDetail = new Schema({
    // vCardForm: {
    urlAlias: String,
    vCardName: String,
    occupation: String,
    description: String,
    // },
    // vCardDetails: {
    firstName: String,
    lastName: String,
    email: String,
    phone: String,
    alternateEmail: String,
    location: String,
    locationURL: String,
    dob: String,
    company: String,
    defaultLanguage: String,
    serviceName: String,
    serviceURL: String,
    serviceDesc: String,
    serviceImage: String,
    productName: String,
    productPrice: Number,
    currency: String,
    productURL: String,
    productDesc: String,
    // }
});

VCardDetail.set("autoIndex", true);

const VCardDetailDB = model("VCardDetail", VCardDetail);
VCardDetailDB.createIndexes();

export default VCardDetailDB;
