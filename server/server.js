'use strict';

// load package
const express = require('express');
//const mysql = require('mysql');
const mysql = require('mysql');
const bodyParser = require("body-parser");


const PORT = 8080;
const HOST = '0.0.0.0';
const app = express();


app.use( bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const cors = require('cors');
app.use(cors());



//Database Connection
const connection = mysql.createConnection({
    host: '0.0.0.0',    //localhost: Used to  locally run app
    //host: "mysql1",
    user: "root",
    //password: "admin",
    password: "12345"
});



connection.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL Server!');
}); 





// direct it to given page
app.get('/', (req, res) => {
    res.send("PAGE WORKING");
})




// make a database and table if they already not exists
app.post('/init', (req, res) => {

    console.log("INSIDE INIT METHOD");

  // Create database if not exists
  connection.query(`CREATE DATABASE IF NOT EXISTS postdb`, function (error, result) {
    if (error) {
      console.log(error);
      res.status(500).send('Internal server error');
      return;
    }

    // Select the postdb database
    connection.query(`USE postdb`, function (error, results) {


      console.log("INSIDE INIT METHOD")

      if (error) {
        console.log(error);
        res.status(500).send('Internal server error');
        return;
      }

      // Delete all existing entries in the posts table if it exists
      connection.query(`DROP TABLE IF EXISTS posts`, function (error, result) {
        if (error) {
          console.log(error);
          res.status(500).send('Internal server error');
          return;
        }

        // Create posts table with ID (primary key), Topic, and Data columns
        connection.query(`CREATE TABLE posts (
          ID INT UNSIGNED NOT NULL AUTO_INCREMENT,
          TOPIC VARCHAR(100) NOT NULL,
          DATA VARCHAR(100) NOT NULL,
          PRIMARY KEY (ID)
        )`, function (error, result) {
          if (error) {
            console.log(error);
            res.status(500).send('Internal server error');
            return;
          }

          res.send('Database and table created (or reset) successfully!');
        });
      });
    });
  });
});




// add a post to posts table
app.post('/addPost', (req,res) => {
    var topic = req.body.topic;
    var data = req.body.data;
    var query = `INSERT INTO postdb.posts (topic, data) VALUES ("${topic}", "${data}")`;
    connection.query(query, function (error,result) {
        if (error) console.log(error);
        res.send('New post inserted');
    });
});





// get all posts from table
app.get('/getPosts', (req, res) => {
    console.log("GETTING POSTS")
    const sqlQuery = 'SELECT * FROM postdb.posts';
    connection.query(sqlQuery, function (error,result) {
        if (error) console.log(error);
        //res.json(result);
        res.send({ 'posts': result});
        console.log(JSON.stringify(result));
    });
});




 //serves the static files in the public folder
 app.use('/', express.static('public'));
 app.listen(PORT, HOST);
 console.log(`Running on http://${HOST}:${PORT}`);