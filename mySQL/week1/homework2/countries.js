'use-strict';
const mysql = require('mysql');
const fetch = require('node-fetch');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'hyfuser',
  password: 'hyfpassword',
  database: 'world',
});

const passCountriesData = async () => {
  connection.connect();

  const countries = [
    {
      name: 'Russia',
      population: 143895551,
      region: 'Europe',
      area: 17098246,
    },
    {
      name: 'Germany',
      population: 82438639,
      region: 'Europe',
      area: 357021,
    },
    {
      name: 'UK',
      population: 66959016,
      region: 'Europe',
      area: 243610,
    },
    {
      name: 'France',
      population: 65480710,
      region: 'Europe',
      area: 547030,
    },
    {
      name: 'Italy',
      population: 59216525,
      region: 'Europe',
      area: 301230,
    },
    {
      name: 'Ukraine',
      population: 43795220,
      region: 'Europe',
      area: 603628,
    },
    {
      name: 'Spain',
      population: 46441049,
      region: 'Europe',
      area: 504781,
    },
    {
      name: 'Poland',
      population: 38028278,
      region: 'Europe',
      area: 312685,
    },
    {
      name: 'Netherlands',
      population: 17132908,
      region: 'Europe',
      area: 41526,
    },
    {
      name: 'Romania',
      population: 19483360,
      region: 'Europe',
      area: 238391,
    },
    {
      name: 'China',
      population: 1387160730,
      region: 'Asia',
      area: 35980,
    },
    {
      name: 'India',
      population: 1324009090,
      region: 'Asia',
      area: 3287590,
    },
    {
      name: 'Indonesia',
      population: 255462000,
      region: 'Asia',
      area: 1919440,
    },
    {
      name: 'Pakistan',
      population: 202785000,
      region: 'Asia',
      area: 803940,
    },
    {
      name: 'Bangladesh',
      population: 158762000,
      region: 'Asia',
      area: 144000,
    },
  ];

  try {
    countries.forEach(async (country, index) => {
      await connection.query(
        'INSERT INTO countries SET no=?, name=?,  continent=?, region=?, area=?',
        [index + 1, country.name, country.region, country.population, country.area],
      );
    });
    console.log(`Country informations are added to the "countries" table successfully!`);
  } catch (error) {
    console.error(error);
  }
  connection.end();
};

passCountriesData();
