DELIMITER $
$

CREATE PROCEDURE test(input_country VARCHAR
(50))
BEGIN

  SELECT e1.Name AS Country, e2.Name AS Capital
  FROM country AS e1 LEFT JOIN city AS e2 ON (e1.Capital = e2.ID)
  WHERE e1.name = input_country;
  END$$
  GO
CREATE PROCEDURE test2(input_country VARCHAR
(50))
BEGIN

  SELECT region, language
  FROM (SELECT e1.region AS region, e2.Language AS Language
    FROM country AS e1
      LEFT JOIN (SELECT *
      FROM countrylanguage) AS e2 ON (e1.Code = e2.CountryCode)) AS regionsAndLanguages
  WHERE region = input_country
  GROUP BY region, language;
  END$$

DELIMITER ; 