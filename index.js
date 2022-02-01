// running express function
const express = require("express");
const server = express();
const cors = require("cors");
const { appendFile } = require("fs");

// middleware
app.use(cors());
app.use(express.json());

server.listen(5000, () => {
    console.log(`Server has started on port 5000`)
})