const admin = require('firebase-admin/app')

const serviceAccount = require('../..firebase-service-account-key.json')

admin.initializeApp({
  credential: admin.cert(serviceAccount),
})
