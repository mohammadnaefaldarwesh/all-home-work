SET NAMES utf8mb4 ;
DROP SCHEMA IF EXISTS ToDoApp;
CREATE SCHEMA ToDoApp;
USE ToDoApp;
SET AUTOCOMMIT
=0;


DROP TABLE IF EXISTS users;
SET character_set_client
= utf8mb4 ;
CREATE TABLE users
(
  `User_Id` varchar
(50) NOT NULL,
  `Name` varchar
(50) NOT NULL,
  `Email` varchar
(254) NOT NULL,
  PRIMARY KEY
(`User_Id`,`Email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
--
-- Dumping data for table `users`
--
INSERT INTO 
users
VALUES
  ('8vS4PDKvV-aXUgnSu1I4B', 'person9 updated', 'person9 updated@gmail.com'),
  ('8wuS06DCjCTqv8AD6qTUX', 'person5', 'person5@gmail.com'),
  ('HCN4HAjIj3lIKB9tb9doc', 'person10', 'person10@gmail.com'),
  ('Hk0yPR8DvmIC7WYOvDkgP', 'person6', 'person6@gmail.com'),
  ('KHuSxKyVy6AGwuIW3-o1y', 'person7', 'person7@gmail.com'),
  ('RfVkWYLz7t9xWnECw8zfo', 'person2', 'person2@gmail.com'),
  ('sPcDYztwcEjYTEIYLP8h3', 'person8', 'person8@gmail.com'),
  ('tIzOGGdf-95KfrApfy6yq', 'person1', 'jkdld@kjkjkj.com'),
  ('Vn9vc1d5XFxE4T4B0PVGe', 'person4', 'afkklfljlkj@kjkjkj.com'),
  ('ySEt2NHE0HvW0sAtX97mK', 'person3', 'afkklfljlkj@kjkjkj.com');


--
-- Table structure for table `todolists`
--

DROP TABLE IF EXISTS todolists;
SET character_set_client
= utf8mb4 ;
CREATE TABLE todolists
(
  `User_Id` varchar
(50) NOT NULL,
  `ToDoList_Id` varchar
(50) NOT NULL,
  `ToDoList_Name` varchar
(50) NOT NULL,
  `Reminder` datetime DEFAULT NULL,
  PRIMARY KEY
(`ToDoList_Id`),
  FOREIGN KEY
(`User_Id`) REFERENCES `users`
(`User_Id`) ON
DELETE CASCADE
) ENGINE=InnoDB
DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
--
-- Dumping data for table `todolists`
--
INSERT INTO 
todolists
VALUES
  ('RfVkWYLz7t9xWnECw8zfo', '-gEwx6en9qLEr0ZRuE5Q-', 'cleaning material', '2019-11-03 00:00:00'),
  ('Hk0yPR8DvmIC7WYOvDkgP', '0U8YAoKhi31TGu9BHPYjt', 'furniture', '2019-10-02 00:00:00'),
  ('Vn9vc1d5XFxE4T4B0PVGe', '3UthG7gWxIAcI-WbXAM9j', 'grocery1', '2019-05-29 00:00:00'),
  ('ySEt2NHE0HvW0sAtX97mK', '6oWRF5tlAh234uyPUHn76', 'house stuff 123', '2019-07-09 00:00:00'),
  ('8vS4PDKvV-aXUgnSu1I4B', 'BvDSlKNJeadmhjtyANlBG', 'library', '2019-04-02 00:00:00'),
  ('Vn9vc1d5XFxE4T4B0PVGe', 'iLI-Z83ooba6RQAglkwyk', 'laundry', '2019-05-02 00:00:00'),
  ('ySEt2NHE0HvW0sAtX97mK', 'ITGAUPXcvRQJRTHVuZYyJ', 'shopping', '2019-07-09 00:00:00'),
  ('KHuSxKyVy6AGwuIW3-o1y', 'Lr8AxOBnJ6U_j7XiAl4Vq', 'fruits', '2019-10-02 00:00:00'),
  ('sPcDYztwcEjYTEIYLP8h3', 'lZSG7Ww5h84e9J5LOxe1T', 'digital stuff', '2019-10-02 00:00:00'),
  ('HCN4HAjIj3lIKB9tb9doc', 'MsOjgJCz0KuUQ9z_4NTUu', 'language', '2019-09-02 00:00:00'),
  ('8wuS06DCjCTqv8AD6qTUX', 'NEeJQhlvb7r4O3hMsd7CI', 'housing', '2019-04-02 00:00:00'),
  ('8wuS06DCjCTqv8AD6qTUX', 'PKcCDX58hzwDZAv3ETGzC', 'course', '2019-04-02 00:00:00'),
  ('HCN4HAjIj3lIKB9tb9doc', 'Pyqn2KQCP_VAJc2WUZ3Q3', 'digital stuff', '2019-10-02 00:00:00'),
  ('RfVkWYLz7t9xWnECw8zfo', 'rUv1kviNl2EWDH1lwsopq', 'clothing', '2019-10-02 00:00:00'),
  ('tIzOGGdf-95KfrApfy6yq', 'sJDNvkiIpkARhvdkC_sMt', 'meetings', '2019-04-09 00:00:00'),
  ('Hk0yPR8DvmIC7WYOvDkgP', 'SLAeE8gDpTg0S36tF4MNm', 'stuff for kitchen', '2019-10-02 00:00:00'),
  ('KHuSxKyVy6AGwuIW3-o1y', 't9iy-ihFkcgYyhm18Nqxb', 'snacks', '2019-10-02 00:00:00'),
  ('8vS4PDKvV-aXUgnSu1I4B', 'W41mpsUE1I5FXUbJWoOql', 'school', '2019-04-02 00:00:00');
--
-- Table structure for table `todos`
--
DROP TABLE IF EXISTS todos;

SET character_set_client
= utf8mb4 ;
CREATE TABLE todos
(
  `ToDoList_Id` varchar
(50) NOT NULL,
  `Todo_Id` varchar
(50) NOT NULL,
  `Todo_Name` varchar
(100) NOT NULL,
  `Done` enum
('true','false') DEFAULT 'false',
  `Due_date` datetime DEFAULT NULL,
  `Tag` varchar
(50) DEFAULT NULL,
  PRIMARY KEY
(`Todo_Id`),
  FOREIGN KEY
(`ToDoList_Id`) REFERENCES `todolists`
(`ToDoList_Id`) ON
DELETE CASCADE
) ENGINE=InnoDB
DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
--
-- Dumping data for table `todos`
--
INSERT INTO 
todos
VALUES
  ('0U8YAoKhi31TGu9BHPYjt', '-lN3LY3dCMjGWuMStvhKS', 'buy 2 seat sofa', 'false', '2019-05-11 00:00:00', 'important'),
  ('BvDSlKNJeadmhjtyANlBG', '0Zl3I9F7pahr60VchlB4S', 'complete the new book', 'false', '2019-05-11 00:00:00', 'important'),
  ('MsOjgJCz0KuUQ9z_4NTUu', '4aAdJk8-x1D0HuIzySQn_', 'study for dutch', 'false', '2019-05-11 00:00:00', 'important'),
  ('0U8YAoKhi31TGu9BHPYjt', '73CotpwppPym2aTQkye0v', 'buy the stuff for the bedroom', 'false', '2019-05-11 00:00:00', 'important'),
  ('BvDSlKNJeadmhjtyANlBG', 'BE47ZxJYLY6_wXWodJNRl', 'give the book back', 'false', '2019-05-11 00:00:00', 'important'),
  ('PKcCDX58hzwDZAv3ETGzC', 'EvaKslrpsLvIMa7w9tnS4', 'prepare for the next class', 'false', '2019-05-11 00:00:00', 'important'),
  ('Lr8AxOBnJ6U_j7XiAl4Vq', 'FDbqiidUvi1lzeloEPeKS', 'buy some apple from albert heijn', 'false', '2019-05-11 00:00:00', 'important'),
  ('Lr8AxOBnJ6U_j7XiAl4Vq', 'fw7b-88-yyyk7yH5f_TD8', 'buy some banana from albert heijn', 'false', '2019-05-11 00:00:00', 'important'),
  ('3UthG7gWxIAcI-WbXAM9j', 'Gn_j4OOH6yz7Ju0kfnhlF', 'cheese', 'false', '2019-05-11 00:00:00', 'important'),
  ('3UthG7gWxIAcI-WbXAM9j', 'hBdPUT0OI2FpMRRSux8M4', 'buy bread', 'false', '2019-05-11 00:00:00', 'important'),
  ('-gEwx6en9qLEr0ZRuE5Q-', 'HEBnYHFdEXNTHBqpb-6Cv', 'buy sth 2', 'true', '2019-05-11 00:00:00', 'important'),
  ('ITGAUPXcvRQJRTHVuZYyJ', 'JratTyrx7beVdvYoI8qvH', 'buy some stuff from action', 'false', '2019-05-11 00:00:00', 'important'),
  ('0U8YAoKhi31TGu9BHPYjt', 'k_chI-gfscNeH-JdkFddG', 'buy dining table and chairs', 'false', '2019-05-11 00:00:00', 'important'),
  ('lZSG7Ww5h84e9J5LOxe1T', 'KLkHVZReKTowBejB2RtYF', 'buy a keyboard for laptop', 'false', '2019-05-11 00:00:00', 'important'),
  ('Lr8AxOBnJ6U_j7XiAl4Vq', 'lcbZXwQO6B3_gvUk9seTs', 'buy some orange from albert heijn', 'false', '2019-05-11 00:00:00', 'important'),
  ('BvDSlKNJeadmhjtyANlBG', 'MsRc4TQx40JOvnQGSGc9U', 'take a new book', 'false', '2019-05-11 00:00:00', 'important'),
  ('lZSG7Ww5h84e9J5LOxe1T', 'Mt-w70LpwfeAwOcUfdtmP', 'buy a mouse for laptop', 'false', '2019-05-11 00:00:00', 'important'),
  ('PKcCDX58hzwDZAv3ETGzC', 'OmeIADQidTlUKrwSwMfiG', 'do the homeworks', 'false', '2019-05-11 00:00:00', 'important'),
  ('ITGAUPXcvRQJRTHVuZYyJ', 'P8tG6FGZHHR8me-IW0YZh', 'buy some stuff from albert heijn', 'false', '2019-05-11 00:00:00', 'important'),
  ('lZSG7Ww5h84e9J5LOxe1T', 'QTvzJhWLlmg9YYU3j6MDp', 'buy a monitor for laptop', 'false', '2019-05-11 00:00:00', 'important'),
  ('3UthG7gWxIAcI-WbXAM9j', 'W9CS_zik_crTXbM2BeqaS', 'buy stuff for breakfast', 'false', '2019-05-11 00:00:00', 'important'),
  ('0U8YAoKhi31TGu9BHPYjt', 'wJj3VTdcq0jngm_ECD_nK', 'buy 3 seat sofa', 'false', '2019-05-11 00:00:00', 'important'),
  ('ITGAUPXcvRQJRTHVuZYyJ', 'xr1UGozTjwwf92EeXLfgB', 'buy some stuff from lidl', 'false', '2019-05-11 00:00:00', 'important'),
  ('3UthG7gWxIAcI-WbXAM9j', 'Xw31tfx0fp8pvd8ClC1KE', 'potatoes', 'false', '2019-05-11 00:00:00', 'important'),
  ('-gEwx6en9qLEr0ZRuE5Q-', 'Z7G6bsE4NFNPm9tGqIDBC', 'buy sth', 'false', '2019-05-11 00:00:00', 'important'),
  ('3UthG7gWxIAcI-WbXAM9j', 'ztqrZLSrEUhO0El871W5m', 'chili peppers', 'false', '2019-05-11 00:00:00', 'important'),
  ('0U8YAoKhi31TGu9BHPYjt', 'ZUB8p0IiJJs5UrgSf0Ka8', 'buy the carpets and curtains', 'false', '2019-05-11 00:00:00', 'important');
