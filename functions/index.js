/* eslint-disable max-len */
const functions = require("firebase-functions");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
  // browsers like chrome need these headers to be present in response if the api is called from other than its base domain
  response.set("Access-Control-Allow-Origin", "*"); // you can also whitelist a specific domain like "http://127.0.0.1:4000"
  response.set("Access-Control-Allow-Headers", "Content-Type");
  functions.logger.info("Hello logs!", {structuredData: true});
  // response.send("Hello from Firebase!");
  const data = {message: "Hello From Firebase!"};
  response.status(200).json({data});
});
