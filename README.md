
<h1 align="center"  >Rookies Web App</h1><br/><br/>
<p align="center">
  <img  src="https://i.ibb.co/D1d0tdz/Capture-d-cran-2022-07-28-124624.png">
</p><br/><br/><br/>

<h1 align="center"  >Context and origins</h1><br/><br/>

<p align="center"> 
this app has been designed for the needs of the third(and the last) student project during our remote web app developper training session at the Wild Code School.We have been connected to Rookies, our partner company which came with some specific needs :</p>

<p align="center">Rookies is a French start-up, located in Marseille. Jérôme Santoni & Elyes Sahli met each others during their studies, facing up the same  problem : They experienced troubles to find a company to work with ,for their studies projects.</p>

<p align="center">school have ressources ( students) who need to practise and show they skills trough concrete application .
Companies have projects  but sometimes lack of  ressources . For both of them, life could be made more simple with a proper solution : Then was born Rookies, a Platform dedicated to the connexion between schools and companies.
</p><br/><br/>


<p align="center"> Data base  designed with MYSQL Workbench. The App design is based on  a Fimga wireframe, provided by the company.</p><br/><br/>

<p align="center" > <img src="https://i.ibb.co/b7JFy3M/database.png"></p><br/><br/><br/><br/>





<h1 align="center"  >Structure</h1><br/><br/>

<p align="center">This APP is coded  with JavaScript and React framework. It uses Node and Express JS for the back-end side.
Database was designed with MYSQL and Workbench. CSS with Tailwind css. This repo contains a Master branch ( which is  the final version provided),  a Dev branch used  all along  the  project, to add new features and code testing.</p>


<br/><br/>
<h1 align="center"  >Setup & Use</h1><br/><br/>



1. In your IDE, install plugins **Prettier - Code formatter** and **ESLint** and configure them
2. Clone this repo
3. in the root folder, run command `npm run setup` : this script  gonna install all dependencies and tools  needed on both frontend and backend folders.
4. Replace frontend .env.sample with your own backend path and right port configuration.
5. To launch the backend server,  you gonna need to fill and replace the .env.sample  with your own database  credentials.

<br/><br/>
<h1 align="center"  >Available Commands </h1><br/><br/>

- `setup` : Initialization of frontend and backend, as well as all toolings
- `dev` : Starts both servers (frontend + backend) in one terminal
- `dev-front` : Starts the React frontend server
- `dev-back` : Starts the Express backend server
- `lint` : Runs validation tools, and refuses unclean code based on the air b&b standards. (will be executed on every _commit_)
- `fix` : Fixes linter errors (run it if `lint` growls on your code !)<br/><br/>


<br/><br/>
<h1 align="center"  >Used Dependencies</h1><br/><br/><br/><br/>

### Frontend<br/><br/>

- _react-router-dom_ : npm package that enables you to implement dynamic routing in a web app.
- _react-toastify_ : a really simple to use feature which provides toasts for better UX experience.
- _Yup_ :  a librairie for Front Data validation ,  especially for  form inputs .Combined to  react-hook-forms.
- _react-Hook-Form_ : a solution to avoid  to rerender when  listening to  input . it makes  as well easier  when there is  a lot of combined states.
- _react-datepicker_ : to make the connexion  between react-hook-form  registers components and  the need of the projects,  where we needed to save dates in  hook states.
- _axios_: to make  API use easier, as well as promises.
-_tailwindcss_ : Css Framework, light and  really smooth to use .<br/><br/>

### Backend<br/><br/>
- _Argon2_ : popular hashing algorithm, used to  hash sensitive datas like passwords.
- _Cookie-parser_ : Parse Cookie header and populate req.cookies with an object keyed by the cookie names. 
- _cors_ : allow to bypass the Access-Control-Allow-Origin headers, which specify which origins can access the API.
- _dotenv_ : lightweight npm package that automatically loads environment variables from a . env file into the process
- _express_ :  back-end side . its a web application framework based on node  that provides a robust set of features for web and mobile applications
- _joi_ : The most powerful data validator for JavaScript.
- _multer_ : Multer is a node. js middleware for handling multipart/form-data , which is primarily used for uploading files.
- _mysql2_ : MySQL client for Node
- _uuid_ : Generate random UUID to  encrypt data.<br/><br/>



### Commons<br/><br/>


- _Concurrently_ : Allows for several commands to run concurrently in the same CLI
- _Husky_ : Allows to execute specific commands that trigger on _git_ events
- _Vite_ : Alternative to _Create-React-App_, packaging less tools for a more fluid experience
- _ESLint_ : "Quality of code" tool, ensures chosen rules will be enforced
- _Prettier_ : "Quality of code" tool as well, focuses on the styleguide
- _ Airbnb Standard_ : One of the most known "standards", even though it's not officially linked to ES/JS
- _Nodemon_ : Allows to restart the server everytime a .js file is udated<br/><br/>

<h1 align="center"  >To go further</h1><br/><br/><br/><br/>


<p align="center"> This app has been  coded with a lot of passion  by Baqué Wendy, Manzetti Lionel and Genin Alexandre. If you have some questions or if you have special enqueries about code, feel free to contact us via GitHub :</p>
<p align="center">@wendybaque</p>
<p align="center">@disrupt3d</p>
<p align="center">@LionelManzetti</p>

<p align="center">Special thanks to  Julien  Richard who assisted us a lot  with his generous help and advices , and  to  rookies staff for this opportunity.
We wish you  a lot of success with your company and projects ! </p>


