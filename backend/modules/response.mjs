import { errorMessage } from "./message.mjs";

export const response = (error, message, body) => {
  return {
    error: error,
    message: message,
    body: body,
  };
};

export const badRequest = (req, res) => {
  res.status(400).json(response(true, errorMessage, null));
  res.end();
};
