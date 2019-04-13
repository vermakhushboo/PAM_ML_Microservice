const express = require('express')
const { generateClient, analyze } = require('../lib/sentimental_analysis')
const { RecogniseAudioEmotion } = require('../lib/sentiment_emotion_analysis')
const client = generateClient('./keys/gcp.json')

const Router = express.Router()

Router.post('/text', async (req, res) => {
    try {
        const result = await analyze(client, req.body.text)
        res.json(result)
    } catch (err) {
        res.status(500).json(err)
    }
})

Router.post('/audio', async (req, res) => {
    try {
        const result = await RecogniseAudioEmotion()
        res.json(result)
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = Router