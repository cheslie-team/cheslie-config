var env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    game: {
      url: 'http://localhost',
      app: {
        name: 'cheslie-game'
      },
      port: 2204,
    },
    lobby: {
      url: 'http://localhost',
      app: {
        name: 'cheslie-lobby'
      },
      port: 2205,
    },
    board: {
      url: 'http://localhost',
      app: {
        name: 'cheslie-board'
      },
      port: 2206,
    }
  },

  production: {
    game: {
      url: 'http://cheslie-game.azurewebsites.net',
      app: {
        name: 'cheslie-game'
      },
      port: process.env.PORT,
    },
    lobby: {
      url: 'http://cheslie-lobby.azurewebsites.net',
      app: {
        name: 'cheslie-lobby'
      },
      port: process.env.PORT,
    },
    board: {
      url: 'http://cheslie-board.herokuapp.com',
      app: {
        name: 'cheslie-board'
      },
      port: process.env.PORT,
    }
  }
};

module.exports = config[env];