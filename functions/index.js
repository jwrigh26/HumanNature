/* eslint-disable max-len */
const functions = require("firebase-functions");

// const express = require("express");
const cors = require("cors");
// const app = express();

// Automatically allow cross-origin requests
// app.use(cors({origin: true}));

// Add middleware to authenticate requests
// app.use(myMiddleware);

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
  // browsers like chrome need these headers to be present in response if the api is called from other than its base domain
  // response.set("Access-Control-Allow-Origin", "*"); // you can also whitelist a specific domain like "http://127.0.0.1:4000"
  // response.set("Access-Control-Allow-Headers", "Content-Type");

  cors()(request, response, () => {
    functions.logger.info("Hello logs!", {structuredData: true});
    // response.send("Hello from Firebase!");
    const data = {message: "Hello From Firebase!"};
    response.status(200).json({data});
  });
});

// exports.helloWorld = functions.https.onCall((data, context) => {
//   // if (!context.auth) {
//   //   return {status: "error", code: 401, message: "Not signed in"};
//   // }
//   return new Promise((resolve, reject) => {
//     // find a user by data.uid and return the result
//     if (reject) {
//       reject(new Error("Something bad happened"));
//     }
//     resolve(data);
//   });
// });
