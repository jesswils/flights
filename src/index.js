import express from 'express';
import fetchAllFlights from './api.js'
import cors from 'cors'

const app = express();

app.use(cors())

app.get("/api/flights", (req, res, next) => {
    fetchAllFlights().then((data) => {
        res.status(200).send({ data })
    }).catch((err) => {
        next(err)
    })
})

app.listen(3001)