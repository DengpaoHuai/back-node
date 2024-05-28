import mongoose from "mongoose";

const Schema = mongoose.Schema;

const countrySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  capital: {
    type: String,
    required: true,
  },
  language: {
    type: String,
    required: true,
  },
});

const Country = mongoose.model("Country", countrySchema);

export default Country;
