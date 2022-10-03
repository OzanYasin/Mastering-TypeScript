// A Recap of JS Classes

// Classes are templates for creating objects in JavaScript. They contain a few different important pieces which allow for creation and extension of customized (and nicely organized) objects.

class Player {
  #score = 0;
  #numLives = 10;
  constructor(first, last) {
    this.first = first;
    this.last = last;
  }
  getScore() {
    return this.#score;
  }
  updateScore(newScore) {
    this.#score = newScore;
  }
  loseLife() {
    this.numLives -= 1;
  }
  #secret() {
    console.log('SECRET MESSAGE!');
  }
}

const player1 = new Player('blue', 'steele');

// console.log(player1.#secret) // Error
