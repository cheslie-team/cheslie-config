var env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    app: {
      name: 'cheslie-game'
    },
    port: process.env.PORT || 3000,
  },

  production: {
    app: {
      name: 'cheslie-game'
    },
    port: process.env.PORT,
  }
};

module.exports = config[env];