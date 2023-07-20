//Create web server
const express = require('express');
//Create application
const app = express();
//Create port
const port = 3000;

//Create route
app.get('/', (req, res) => res.send('Hello World!'));

//Listen to port
app.listen(port, () => console.log(`Example app listening on port ${port}!`));