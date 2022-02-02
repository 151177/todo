// running express function
const express = require("express");
const server = express();
const cors = require("cors");
const { appendFile } = require("fs");

// MIDDLEWARE
// Cross-Origin Resource Sharing
// allows us to relax the security applied to an API
// by bypassing the Access-Control-Allow-Origin headers, 
// which specify which origins can access the API.
// CORS is a browser security feature that restricts cross-origin 
// HTTP requests with other servers and specifies 
// which domains access your resources.
server.use(cors());
// when creating a fullstack app
// we need to get data from the client side
// and we do so through the request.body object
// so this json gives us access to request.body as json data
server.use(express.json());

server.listen(5000, () => {
    // callback function to indicate the server has started
    console.log(`Server has started on port 5000`)
})