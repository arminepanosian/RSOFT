const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const AdminSchema = new Schema({
  name: { type: String, trim: true, required: true },
  password: { type: String, trim: true, minlength: 8, required: true },
  createdAt: { type: Date, default: Date.now },
});

const RewievsSchema = new Schema({
  name: { type: String, required: true, trim: true },
  lastName: { type: String, required: true, trim: true },
  position: { type: String, required: true, trim: true, unique: false },
  stars: { type: Number, required: true, trim: true },
  confirmed: { type: Boolean, default: false },
  description: { type: String, required: true, trim: true },
  createdAt: { type: Date, default: Date.now },
});

const AllServices = new Schema({
  name: { type: String, required: true, trim: true },
  description: { type: String, required: true, trim: true },
  img: { type: String, required: true, trim: true },
  price: { type: Number, required: true, trim: true },
  createdAt: { type: Date, default: Date.now },

});

const TeamMembers = new Schema({
  name: { type: String, required: true, trim: true },
  lastName: { type: String, required: true, trim: true },
  description: { type: String, required: true, trim: true },
  position: { type: String, required: true, trim: true },
  img: { type: String, required: true, trim: true },
  createdAt: { type: Date, default: Date.now },
});

const AdminModel = model("adminpanel", AdminSchema);
const RewievsModel = model("reviews", RewievsSchema);
const AllServicesModel = model("services", AllServices);
const TeamSchema = model("rewievs", TeamMembers);

module.exports.AdminModel = AdminModel;
module.exports.RewievsModel = RewievsModel;
module.exports.AllServicesModel = AllServicesModel;
module.exports.TeamSchema = TeamSchema;