const functions = require("firebase-functions")
const express = require('express')

const app = express()

app.get('/baseballteams', (req, res) => {
    res.send('the Mets')
})

app.get('/basketball', (req, res) => {
    res.send('the Heat')
})

app.get('/my-little-ponies', (req, res) => {
    res.send('you found the secret page')
})

app.get('/yo', (req, res) => {
    res.send('YO')
})

exports.app = functions.https.onRequest(app)