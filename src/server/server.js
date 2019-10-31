/*
    File used to create and run a RESTfull API using mysql.
    The server runs on localhost:3000
*/

// Imports
const express = require('express')
const mysql = require('mysql')

const app = express()
const port = 3000

// Define mysql connection parameters
let connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'blog'
})

// Define API response routes
app.get('/posts/:numberPosts', (req, res) => {
    /*
        Define a route for the API who returns N posts
        ordered by post_date in ascending order
    */
    connection.query('SELECT * FROM post ORDER BY post_date ASC LIMIT ?', 
                     [parseInt(req.param('numberPosts'))], function (error, results, fields) {
        if (error) throw error;
        // Connected without erros
        res.send(results)
    })
})

app.get('/posts', (req, res) => {
    /*
        Define a route for the API who returns all the posts
        ordered by post_date in ascending order
    */
    connection.query('SELECT * FROM post ORDER BY post_date ASC', function (error, results, fields) {
        if (error) throw error;
        // Connected without erros
        res.send(results)
    })
})

app.use(function (req, res, next) {
    /*
        Define a mensage in case of error 404 (when trying to access a route
        that does not exist).
    */
    res.status(404).send("Sorry can't find that!")
})

app.use(function (err, req, res, next) {
    /*
        Define a mensage in case of error 500 (when some error occour during
        the server execution)
    */
    console.error(err.stack)
    res.status(500).send('Something broke!')
})

connection.connect(function(err) {
    /* 
        Try to connect with mysql with the parameters previously defined
        at 'connection' variable.
    */
    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }
   
    console.log('Successfully connected to database with thread id ' + connection.threadId);
});

// Start API server 
app.listen(port, () => console.log(`Server listening on port ${port}!`))
