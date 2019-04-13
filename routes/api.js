const express = require('express')
const { generateClient, analyze } = require('../lib/sentimental_analysis')
const { getEmotions } = require('../lib/emotion_analysis')
const { RecogniseAudioEmotion } = require('../lib/sentiment_emotion_analysis')
const client = generateClient('./keys/gcp.json')

const Router = express.Router()

Router.post('/text', async (req, res) => {
    if (!req.body.text) return res.status(400).json({
        error: "Bad Request"
    })

    const text = req.body.text

    try {
        const sentiments = await analyze(client, text)
        const emotions = await getEmotions(text)
        res.json({
            sentiments,
            emotions
        })
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