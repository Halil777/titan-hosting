// const http = require("http");
// const socketIo = require("socket.io");

// const server = http.createServer((req, res) => {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.end("Socket.io server");
// });

// const io = socketIo(server, {
//   cors: {
//     origin: "*",
//   },
// });

// io.on("connection", (socket) => {
//   console.log("A user connected");

//   socket.on("chat message", (msg) => {
//     io.emit("chat message", msg);
//   });

//   socket.on("disconnect", () => {
//     console.log("A user disconnected");
//   });
// });

// server.listen(3001, () => {
//   console.log("Server is running on port 3001");
// });

import express from "express";
import router from "./router/router.mjs";

const app = express();

const PORT = 7707;

app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));

app.use("/api", router);

app.listen(PORT, () => console.log("listening on port" + PORT));
