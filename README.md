# FindMyRoomate
Looking for a roomate? Sign up and find it!



<h2> Technologies </h2>
<ul>
  <li>React</li>
  <li>JavaScript</li>
  <li>MongoDB</li>
  <li>Express</li>
  <li>NodeJs</li>
  <li>PassportJS</li>
  <li>HTML5</li>
  <li>CSS</li>
  </ul>
<br>

## Requirements

NodeJs
Previous installation of Nodejs is required. If you don't have it, go to <a>https://nodejs.org/es/download/</a>.
The user must have  Node >= 8.10 y npm >= 5.6 installed in his machine.

MongoDb
Expects a Mongo Server to be running on Mongo Atlas DataBase, and it uses a database called "BouDB" with the collections "users", "shops", "products".
If running locally, install MongoDB. To install it just go to: <a href="https://www.mongodb.com/download-center/community">MongoDB Community Server</a>

Once installed, on the project's root run npm install mongodb --save to install the MongoDB driver as well as its dependencies.
<br>

## Installation
For this project, you are expected to run front-end and backend. So, make sure tou are running the server before running the front.
To run backend:
1. Get in the folder of the project
2. Open the public folder
2. Install dependencies with the package manager [yarn](https://yarnpkg.com/)
3. Deploy the project

```bash
cd FindMyRoomate
cd public
npm install yarn
yarn install
yarn start
```
Server runs on http://localhost:8000

To run frontend:
1. Get in the folder of the project
2. Open the front folder
2. Install dependencies with the package manager [yarn](https://yarnpkg.com/)
3. Deploy the project

```bash
cd FindMyRoomate
cd front
npm install yarn
yarn install
yarn start
```
Server runs on http://localhost:3000

In order to run the sockets correctly, change the variable host of the file ./front/src/components/MyProfile.js for:
```bash
"ws://localhost:8000/"
```

<h2>IMPORTANT!</h2>

In order to run locally you must create a .env file containing any environment variables;  DB_NAME= <database_name>,
 DB_URL=<URL_OfYour_Database> , SECRET= <secret_Session_Key>. This is going to be required by the dotenv module.

<br>
<h2> Link </h2>

<a>https://bou-solution.herokuapp.com</a>

<br>

## Authors

[Allan Roy Corinaldi Castaño]<a>(https://github.com/ar-corinaldi)</a>

[Daniella Arteaga Mendoza]<a>(https://github.com/dartm05)</a>

<br>

## License
[MIT](https://choosealicense.com/licenses/mit/)
