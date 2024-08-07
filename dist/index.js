const http = require('http');
const express = require('express');
const socketio = require('socket.io');
const cors = require('cors');

const PORT = process.env.PORT || 5000;

const app = express();
const server = http.createServer(app);
const io = socketio(server);

app.use(cors());

app.get("/", (req, res) => {
    res.json({
        msg: "hi there"
    });
});

server.on("connect", () => {
    console.log("connected");
});

server.listen(PORT, () => console.log(`Server has started on port ${PORT}.`));
