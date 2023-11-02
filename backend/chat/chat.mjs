import express from "express";
const http = require("http");
const socketIo = require("socket.io");

const chatRouter = express.Route();

const server = http.createServer(app);
const io = socketIo(server);

io.on("connection", (socket) => {
  console.log("A user connected");

  socket.on("chat message", (message) => {
    io.emit("chat message", message);
  });

  socket.on("disconnect", () => {
    console.log("User disconnected");
  });
});
