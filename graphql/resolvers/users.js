const User = require("../../models/User");

module.exports = {
  Mutation: {
    register(_, args, context, info) {
      // TO DO: Validate user data
      // TO DO: Make sure user doesnt already exist
      // TO DO: hash password and create an auth token
    },
  },
};
