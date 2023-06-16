//Модуль App - отвечающий за запуск приложения
const {Game, GameSavingData, readGameSaving:loadGame, writeGameSaving:saveGame,} = require('./game.js')

const game = new Game()
game.start()

