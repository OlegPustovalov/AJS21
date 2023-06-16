//Модуль Game - отвечающий за работу приложения (загрузку и сохранение)
const Character = require("./domain.js")

class Game {
  start() {
    console.log('game started');
  }
}

class GameSavingData {
}

function readGameSaving() {
}

function writeGameSaving() {
}

module.exports = Game  //дефолтный класс
module.exports={
  GameSavingData,
  readGameSaving,
  writeGameSaving,
}

