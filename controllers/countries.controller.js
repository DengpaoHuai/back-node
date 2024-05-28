import Country from "../models/countries.model.js";

export const getCountries = async (req, res) => {
  const countries = await Country.find();
  res.json({
    countries: countries,
  });
};

export const createCountry = async (req, res) => {
  console.log(req.body);
  await Country.create({
    name: req.body.name,
    capital: req.body.capital,
    language: req.body.language,
  });
  res.json({ message: "Country created successfully" });
};

export const deleteCountry = async (req, res) => {
  const id = req.params.id;
  await Country.findByIdAndDelete(id);
  res.json({ message: "Country deleted successfully" });
};

export const getCountry = async (req, res) => {
  const id = req.params.id;
  const country = await Country.findById(id);
  res.json(country);
};

export const updateCountry = async (req, res) => {
  const id = req.params.id;
  await Country.findByIdAndUpdate(id, {
    name: req.body.name,
    capital: req.body.capital,
    language: req.body.language,
  });
  res.json({ message: "Country updated successfully" });
};
