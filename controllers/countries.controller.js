export const getCountries = (req, res) => {
  res.json([
    {
      name: "Argentina",
      capital: "Buenos Aires",
      language: "Spanish",
    },
    {
      name: "Brasil",
      capital: "Brasilia",
      language: "Portuguese",
    },
    {
      name: "Chile",
      capital: "Santiago",
      language: "Spanish",
    },
    {
      name: "Colombia",
      capital: "Bogota",
      language: "Spanish",
    },
    {
      name: "Peru",
      capital: "Lima",
      language: "Spanish",
    },
  ]);
};
