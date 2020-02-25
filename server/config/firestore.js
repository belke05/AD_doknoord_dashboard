const path = require("path");
console.log(process.env.private_key, "private keyyy");

const firestore_config = {
  apiKey: process.env.apiKey,
  authDomain: process.env.authDomain,
  databaseURL: process.env.databaseURL,
  projectId: process.env.projectId,
  storageBucket: process.env.storageBucket,
  messagingSenderId: process.env.messagingSenderId,
  appId: process.env.appId,
  measurementId: process.env.measurementId
};

const service_account = {
  type: "service_account",
  project_id: "delhaizedoknoord",
  private_key_id: process.env.private_key_id,
  private_key: process.env.private_key.replace(/\\n/g, "\n"),
  client_email:
    "firebase-adminsdk-jjaz1@delhaizedoknoord.iam.gserviceaccount.com",
  client_id: "112129576451566504758",
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  client_x509_cert_url: process.env.client_x509_cert_url
};

module.exports = {
  service_account,
  firestore_config
};
