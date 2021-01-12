const arrayOfObject = [
  {
    nama: "Smith",
    hobi: "Self Service",
  },
  {
    nama: "Dio",
    hobi: "Design Grafis",
  },
  {
    nama: "Agung",
    hobi: "Bermail Game",
  },
];

module.exports = {
  Second: (req, res) => {
    const result = [
      {
        nama: arrayOfObject[arrayOfObject.length - 1].nama,
        hobi: arrayOfObject[0].hobi,
      },
    ];
    res.json({
      result,
    });
  },
};
