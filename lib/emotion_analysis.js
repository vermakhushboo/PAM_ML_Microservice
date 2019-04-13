const requestPromise = require('request-promise')
const config = require('../config')

const urlEndpoint = "https://proxy.api.deepaffects.com/text/generic/api/latest/sync/text_recognise_emotion"

const getEmotions = async (text) => {
  try {
    const result = await requestPromise({
      uri: urlEndpoint + `?apikey=${config.deepfacts_api_key}`,
      method: 'POST',
      body: {
        content: text
      },
      json: true
    })
    return result.response
  } catch (err) {
    throw err
  }
}

module.exports = {
  getEmotions
}
