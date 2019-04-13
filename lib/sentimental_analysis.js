const language = require('@google-cloud/language');

const generateClient = function (keyPath) {
    return new language.LanguageServiceClient({
        keyFilename: keyPath
    })
}

const analyze = async function (client, text) {
    const document = {
      content: text,
      type: 'PLAIN_TEXT',
    };
  
    // Detects the sentiment of the text
    const [result] = await client.analyzeSentiment({document: document});
    const sentiment = result.documentSentiment;
  
    return sentiment
}

module.exports = {
    generateClient,
    analyze
}