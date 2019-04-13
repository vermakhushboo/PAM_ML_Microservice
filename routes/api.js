const express = require('express')
const Router = express.Router()
const { generateClient, analyze } = require('../lib/sentimental_analysis')
const client = generateClient('./keys/gcp.json')

Router.get('/', async (req, res) => {
    const result = await analyze(client, "Hello World")

    res.json(result)
})

module.exports = Router