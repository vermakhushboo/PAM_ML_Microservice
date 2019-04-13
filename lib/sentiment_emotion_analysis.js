const DeepAffects = require('deep-affects');
const secrets = require('../keys/secrets')

const defaultClient = DeepAffects.ApiClient.instance;

// Configure API key authorization: UserSecurity
const UserSecurity = defaultClient.authentications["UserSecurity"];
UserSecurity.apiKey = secrets.deepfacts_api_key;

const apiInstance = new DeepAffects.EmotionApi();

const RecogniseAudioEmotion = (content) => {
  return new Promise((resolve, reject) => {
    const body = {
      content
    }
    apiInstance.syncRecogniseEmotion(body, (error, data, response) => {
      if (error) reject(error)
      else resolve(data)
    })
  })
}

module.exports = {
  RecogniseAudioEmotion
}
