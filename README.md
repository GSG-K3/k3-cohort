# k3-cohort
<h2>It is a website that designed for k3 cohort. The home page is used to register and login. The user can login by fill his/her username and password in the form, when he/she login, the k3 member information will displayed to him on the second page of the website. </h2>

<a href=>K3 Cohort</a>

<h3>User Journy:</h3>
<p>As a user i should be able to sign up in this website.<br>
As a user i should be able to sign in  and i can check k3 members.</p>
<h3>How To Run Our project:</h3>
<ol> 
<li>clone repo.</li>
<li>in terminal: npm i.</li>
<li>create database in heroku.</li>
<li>create config.env file in the project</li>
<li>take the database url from heroku and save it in config.env file like this: DATABASE_URL = < your database from heroku ></li>
<li>in the terminal : npm start.</li>
<li>open localhost:3000 and the project will run.</li>

</ol>

<h3>File Structure:</h3>
<p>
   - public
     - acounts
        - index.js
        - index.css
        - index.html
      - k3-info
        - k3Info.css
        - k3Info.html
        - k3Info.js
- server
 - controllers 
    - authontication
       - index.js
    - error.js
    - helpers.js
    - index.js
 - models
    - database
       - queries
          - getData.js
          - postData.js
       - build.js
       - build.sql
       - connection.js
 - routes
    - index.js
 - app.js
 - index.js</p>

<h3>DB Schema:</h3>
<img src="https://user-images.githubusercontent.com/55299644/75762882-133ac780-5d44-11ea-9f28-920900094b49.png">

<h3>Team</h3>
<ul>
<li>Abood</li>
<li>Duha</li>
<li>Hanan</li>
<li>Tasneem</li>
</ul>