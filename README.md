
# e-commerce-backend

  <p align="left">
    <img src="https://img.shields.io/github/repo-size/deeparkrish/e-commerce-backend" />
    <img src="https://img.shields.io/github/languages/top/deeparkrish/e-commerce-backend"  />
    <img src="https://img.shields.io/github/issues/deeparkrish/e-commerce-backend" />
    <img src="https://img.shields.io/github/last-commit/deeparkrish/e-commerce-backend" >   
    <img src="https://img.shields.io/github/languages/deeparkrish/e-commerce-backend" >   
  </p>
  [![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)<br />

 ## Description
  A app that uses the latest technologies(MySQL2, Express, Sequelize) to build the back end for an e-commerce site.
  
 
  ## Table of Contents 
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Process](#process)
  * [Technologies](#technologies)
  * [Pseudocode](#pseudocode)
  * [MockUp](#mockup)
  * [ProjectDemo](#projectdemo)
  * [Testing](#testing)
  * [ProjectRepo](#projectrepo)
  * [Contribution](#contribution)
  
  
  ##  Installation
    npm init
    npm install  express mysql2  sequelize dotenv

  ##  Usage
  ### To access SQL :   
    mysql -u root -p
    Enter passwrd when promted
    source db/schema.sql
  ### To Seed database:
    npm run seed
  ### Start the app
    node server.js

  ## License 
  [![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)<br />
  This app is covered under ISC license.
  
   ## Process
  The user is provided with a functional Express.js API
  * At start a .env file is created where ,the user adds the database name, MySQL username, and MySQL password to an environment    variable file(dtoenv)
  * He is able to connect to a database using Sequelize
  * Then he enters schema(mysql) and seed commands(npm run seed) upon which,
    a development database is created(ecommerce_db) and is seeded with test data
  * When the app is invoked, the server is started and the Sequelize models are synced to the database.
  * When the user opens API GET routes in Insomnia/Postman for categories, products, or tags, 
    the data for each of these routes is displayed in a formatted JSON object.
  * The user can test API POST, PUT, and DELETE routes in Insomnia and he shall be able to successfully create,read,update, 
    and delete data in the database.
    
  ## Technologies
   The MySQL2  and Sequelize packages to connect your Express.js API to a MySQL database and the dotenv package to use              environment variables to store sensitive data, like MySQL username, password, and database name.


  ## Pseudocode
  ![Webpage](https://github.com/Deeparkrish/Team-Profile-Generator/blob/main/src/img/flow-chart.jpeg)

  
  
  
  ##  Mockup
   ![Webpage](https://github.com/Deeparkrish/Team-Profile-Generator/blob/main/src/img/mockup1.png)

  
  ##  ProjectDemo
  #### User input/HTML generation
  [![Youtube](https://img.youtube.com/vi/f3hP1mj1puE/0.jpg)](https://www.youtube.com/embed/f3hP1mj1puE)


  ## Testing
  ####  CRUD operations can be testted using following applications:
    Insomnia core / Postman  or your browser 
    link : http://localhost:3000/api/<routes>
  

  ## ProjectRepo 
  Git hub link: https://github.com/Deeparkrish/e-commerce-backend

  ## Contribution
  Created with ❤️ by [Deepa Krishnan](https://github.com/DeeparKrish/README-generator)


