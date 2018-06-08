'use strict'


class GameController {

    render ({ request, view }) {
      const guessedNumber = Number(request.input('number'))
      const randomNumber = Math.floor(Math.random() * 20) + 1
  
      /** rendering view */
      return view.render('game', { guessedNumber, randomNumber })
    }
  }
  
  module.exports = GameController