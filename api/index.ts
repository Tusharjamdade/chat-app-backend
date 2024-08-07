import http from 'http';
import express, { Request, Response } from 'express';
import socketio, { Server as SocketIOServer, Socket } from 'socket.io';
import cors from 'cors';

import { addUser, removeUser, getUser, getUsersInRoom} from './user';
import router from './router';
export interface User {
    id: string;
    name: string;
    room: string;
  }
const app = express();
const server = http.createServer(app);
const io: SocketIOServer = new SocketIOServer(server);

app.use(cors());
app.use(router);
app.get("/",(req,res)=>{
    res.json({
      msg:"hi there"
    })
})
server.on("connect",()=>{
  console.log("connected")
})
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server has started on port ${PORT}.`));
