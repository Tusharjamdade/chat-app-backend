import http from 'http';
import express, { Request, Response } from 'express';
import socketio, { Server as SocketIOServer, Socket } from 'socket.io';
import cors from 'cors';
const PORT = process.env.PORT || 5000;
export interface User {
    id: string;
    name: string;
    room: string;
  }
const app = express();
const server = http.createServer(app);
const io: SocketIOServer = new SocketIOServer(server);

app.use(cors());
app.get("/",(req,res)=>{
    res.json({
      msg:"hi there"
    })
})
server.on("connect",()=>{
  console.log("connected")
})

server.listen(PORT, () => console.log(`Server has started on port ${PORT}.`));
