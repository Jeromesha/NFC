import mongoose from "mongoose";

const { Schema, model } = mongoose;

const VCardDetail = new Schema({
  vCardForm: {
    urlAlias: String,
    vCardName: String,
    occupation: String,
    description: String,
    profilephoto: String,
    coverphoto: String,
  },
  vCardDetails: {
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
  },
  service: {
    serviceName: String,
    serviceURL: String,
    serviceDesc: String,
    serviceImage: String,
  },
  product: {
    productName: String,
    productPrice: Number,
    currency: String,
    productURL: String,
    productDesc: String,
  },
  testimonials: {
    testName: String,
    testDesc: String,
    testImage: String,
  },
  socialMedia: {
    website: String,
    xurl: String,
    linkedIn: String,
    email: String,
    instagram: String,
    tumbler: String,
    facebook: String,
    whatsapp: String,
  },
});

VCardDetail.set("autoIndex", true);

const VCardDetailDB = model("VCardDetail", VCardDetail);
VCardDetailDB.createIndexes();

export default VCardDetailDB;
