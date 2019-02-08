const app = require('express')();
const server = require('http').Server(app);
const cors = require('cors');

app.use(cors())

server.listen(8000, () => console.log('connected to port 8000!'));
