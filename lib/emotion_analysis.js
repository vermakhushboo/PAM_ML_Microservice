const requestPromise = require('request-promise')
const secrets = require('../keys/secrets')

const urlEndpoint = "https://proxy.api.deepaffects.com/text/generic/api/latest/sync/text_recognise_emotion"

const getEmotions = async (text) => {
  try {
    const result = await requestPromise({
      uri: urlEndpoint + `?apikey=${secrets.deepfacts_api_key}`,
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
