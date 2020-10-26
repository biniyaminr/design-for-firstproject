const express = require('express');

const app = express();

app.get('/', (req, res)=> {
    res.send("Welcome!");
})

const PORT = process.env.PORT |8000 ;

app.listen(PORT,console.log(`Server up and running at port ${PORT}`));