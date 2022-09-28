// imports

import express from "express";
import mongoose from "mongoose";

// app config

export const APP = express();
export { mongoose as MONGOOSE };
export const PORT = process.env.PORT || 4040;

// mongoose connection

export const CONNECTION_URL =
  "mongodb+srv://abdurrahman-abdullah:ix8lhoUV60CIFGOs@cluster0.ltaqq5x.mongodb.net/instaDB?retryWrites=true&w=majority";

export const CONNECTION_URL_ACCESS = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
