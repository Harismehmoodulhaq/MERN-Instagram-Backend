import cors from "cors";
import express from "express";
import { APP, CONNECTION_URL, PORT, MONGOOSE, CONNECTION_URL_ACCESS } from "./Common/common-config";

// middlewares

APP.use(express.json());
APP.use(cors())

// DB config
MONGOOSE.connect(CONNECTION_URL, CONNECTION_URL_ACCESS)
MONGOOSE.connection.once('open', () => {
    console.log("DB conneted")
})
// app routes

APP.get('/', (req, res) => res.status(200).send('Hello World'))
APP.post('/upload', (res, req) => {
    
})

//listen
APP.listen(PORT, () => console.log(`listening on localhost:${PORT}`))