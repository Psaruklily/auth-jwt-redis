const User = require('../database/model/User');

module.exports = {
    createUser: (payload) => User.create(payload),
}