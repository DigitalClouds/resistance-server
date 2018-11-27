import {Socket} from "socket.io";

const server = require("http").createServer();
const io = require("socket.io")(server);
const port  = process.env.PORT || 3000;

console.log(`listening on ${port}`);
io.on("connection", (socket: Socket) => {
    // called whenever a new client connects
    console.log("client connected");
});

server.listen(port);
