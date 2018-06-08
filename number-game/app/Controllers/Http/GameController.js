'use strict'


class GameController {

    render ({ request }) {
      /** get number from the url query string */
      const guessedNumber = Number(request.input('number'))
  
      /** if number is not specified, let the user know about it */
      if (!guessedNumber) {
        return 'Please specify a number by passing ?number=<num> to the url'
      }
  
      /** generate a random number */
      const randomNumber = Math.floor(Math.random() * 20) + 1
  
      /** let the user know about the match */
      return randomNumber === guessedNumber
      ? 'Matched'
      : `Match failed. The actual number is ${randomNumber}`
    }
  }
  
  module.exports = GameController