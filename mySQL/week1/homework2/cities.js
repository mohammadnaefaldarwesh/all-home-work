'use-strict';

const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'hyfuser',
  password: 'hyfpassword',
  database: 'world',
});

const passCitiesData = async () => {
  connection.connect();

  const cities = [
    {
      name: 'Amsterdam',
      population: 820000,
      country: 'Netherlands',
    },
    {
      name: 'The Hauge',
      population: 510000,
      country: 'Netherlands',
    },
    {
      name: 'Rotterdam',
      population: 620000,
      country: 'Netherlands',
    },
    {
      name: 'Utrecht',
      population: 330000,
      country: 'Netherlands',
    },
    {
      name: 'Maastricht',
      population: 120000,
      country: 'Netherlands',
    },
    {
      name: 'Groningen',
      population: 200000,
      country: 'Netherlands',
    },
    {
      name: 'Leiden',
      population: 120000,
      country: 'Netherlands',
    },
    {
      name: 'Delft',
      population: 100000,
      country: 'Netherlands',
    },
    {
      name: 'Haarlem',
      population: 160000,
      country: 'Netherlands',
    },
    {
      name: 'Eindhoven',
      population: 220000,
      country: 'Netherlands',
    },
    {
      name: 'Nijmegen',
      population: 170000,
      country: 'Netherlands',
    },
    {
      name: 'Breda',
      population: 180000,
      country: 'Netherlands',
    },
    {
      name: 'Almere',
      population: 200000,
      country: 'Netherlands',
    },
    {
      name: 'Zwolle',
      population: 120000,
      country: 'Netherlands',
    },
    {
      name: 'Alkmaar',
      population: 110000,
      country: 'Netherlands',
    },
    {
      name: 'Amersfoort',
      population: 150000,
      country: 'Netherlands',
    },
    {
      name: 'Arnhem',
      population: 150000,
      country: 'Netherlands',
    },
    {
      name: 'Dordrecht',
      population: 120000,
      country: 'Netherlands',
    },
  ];

  cities.forEach(async (city, index) => {
    await connection.query('INSERT INTO cities SET no=?, name=?, population=?, country=?', [
      index + 1,
      city.name,
      city.population,
      city.country,
    ]);
  });
  console.log(`City informations are added to the "cities" table successfully!`);
  connection.end();
};

passCitiesData();
