const { getAuth } = require("firebase-admin/auth");

const middlewares = {
  auth: async (req, res, next) => {
    try {
      await getAuth().verifyIdToken(req.headers.authorization);
      return next();
    } catch (e) {
      console.error(e);
    }
  },
};

module.exports = middlewares;
