async function main() {
    // Imports the Google Cloud client library
    const language = require('@google-cloud/language');
  
    // Instantiates a client
    const client = new language.LanguageServiceClient({
        keyFilename: "./keys/gcp.json"
    });
  
    // The text to analyze
    const text = 'Hello, world!';
  
    const document = {
      content: text,
      type: 'PLAIN_TEXT',
    };
  
    // Detects the sentiment of the text
    const [result] = await client.analyzeSentiment({document: document});
    const sentiment = result.documentSentiment;
  
    console.log(`Text: ${text}`);
    console.log(`Sentiment score: ${sentiment.score}`);
    console.log(`Sentiment magnitude: ${sentiment.magnitude}`);
  }
  
  main().catch(console.error);