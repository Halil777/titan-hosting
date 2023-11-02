import express from "express";
import { users } from "../modules/constant.mjs";

const authRouter = express.Router();

authRouter.post("/sign-in", (req, res) => {
  const { username, password } = req.body;

  res.json(users);
});

export default authRouter;
