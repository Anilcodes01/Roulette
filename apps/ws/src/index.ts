import { WebSocketServer } from "ws";
import { UserManager } from "./UserManager";

const wss = new WebSocketServer({ port: 8000 });

wss.on("connection", function connection(ws, request) {
    const url = request.url;
    const queryParams = new URLSearchParams(url?.split('?')[1]);
    const name = queryParams.get('name') || 'defaultName';
    UserManager.getInstance().addUser(ws, name)
    

  ws.on("message", function message(data) {
    console.log("received: %s", data);
  });

  ws.send("something");
});
