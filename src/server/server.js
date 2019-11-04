/*
    File used to create and run a RESTfull API using mysql.
    The server runs on localhost:3000
*/

// Imports
const express = require('express')
const mysql = require('mysql')
const bodyParser = require('body-parser')

const app = express()
const port = 3000

// Define mysql connection parameters
let connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'blog'
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:4200"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Credentials", "true");
    next();
  });

// Define API response routes
app.get('/posts/:numberPosts', (req, res) => {
    /*
        Define a route for the API who returns N posts
        ordered by post_date in ascending order
    */
    let query = `
        SELECT p.id, p.user_id, p.title, p.body as content, date_format(p.post_date, '%M %d %Y, %H:%i') as date, u.name as author, 
        (
            SELECT COUNT(comment.post_id) FROM post 
            LEFT JOIN comment ON comment.post_id = post.id
            GROUP BY post.id
            HAVING post.id = p.id
        ) as numberComments
        FROM post p
        INNER JOIN user u ON u.id = p.user_id
        ORDER BY post_date DESC LIMIT ?
    `
    connection.query(query, [parseInt(req.params['numberPosts'])], function (error, results, fields) {
        if (error) throw error;
        // Connected without erros
        res.json({error: false, message: `List with ${req.params['numberPosts']} post(s)`, data: results})
    })
})

app.get('/post/:id', (req, res) => {
    /*
        Define a route for the API who returns data from
        a specific post with the id received as a argument
    */
    let query = `
        SELECT p.id, p.user_id, p.title, p.body as content, date_format(p.post_date, '%M %d %Y, %H:%i') as date, u.name as author
        FROM post p
        INNER JOIN user u ON u.id = p.user_id
        WHERE p.id = ?
    `
    connection.query(query, [parseInt(req.params['id'])], function (error, results, fields) {
        if (error) throw error;
        // Connected without erros
        res.json({error: false, message: `Data from post with id ${req.params['id']}`, data: results})
    })
})

app.get('/comments/:postId', (req, res) => {
    /*
        Define a route for the API who returns a list with
        the comments from a specific post with the id received
        as a argument
    */
    let query = `
        SELECT
            user.id as author_id, user.name as author, comment.content, date_format(comment.comment_date, '%M %d %Y, %H:%i') as date
        FROM
            comment
        INNER JOIN user ON
            user.id = comment.user_id
        WHERE comment.post_id = ?
    `
    connection.query(query, [parseInt(req.params['postId'])], function (error, results, fields) {
        if (error) throw error;
        // Connected without erros
        res.json({error: false, message: `List with comments from post with id ${req.params['postId']}`, data: results})
    })
})

app.post('/login/', (req, res) => {
    let username = req.body.username
    let password = req.body.password

    let query = "SELECT * FROM user WHERE username = ? and password = ?"

    connection.query(query, [username, password], function (error, results, fields) {
        if (error) throw error;
        res.json({error: false, message: "User with the username and password getted by req.params", data: results})
    })
})

app.post('/contact/', (req, res) => {
    let name = req.body.name
    let email = req.body.email
    let message = req.body.message

    let query = "INSERT INTO contact (name, email, message) VALUES (?, ?, ?)"

    connection.query(query, [name, email, message], function (error, results, fields) {
        if (error) throw error;
        res.json({error: false, message: "Added contact in databases"})
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
