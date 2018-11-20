import {Socket} from "socket.io";

const server = require("http").createClient();
const io = require("socket.io")(server);
const port  = process.env.PORT || 3000;


io.on("connection", (socket: Socket) => {
    // called whenever a new client connects
});

server.listen(port);
