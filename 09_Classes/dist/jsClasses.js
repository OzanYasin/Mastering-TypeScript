// A Recap of JS Classes

// Classes are templates for creating objects in JavaScript. They contain a few different important pieces which allow for creation and extension of customized (and nicely organized) objects.

class Player {
  // static tells JS that property or method exist on the class itself and is not going to to exist on each individual instance.
  static description = 'Player In Our Game';
  #score = 0;
  #numLives = 10;
  constructor(first, last) {
    this.first = first;
    this.last = last;
  }
  get fullName() {
    return `${this.first} ${this.last}`;
  }
  set fullName(newName) {
    const [first, last] = newName.split(' ');
    this.first = first;
    this.last = last;
  }
  get score() {
    return this.#score;
  }
  set score(newScore) {
    if (newScore < 0) {
      throw new Error('Score must be positive!');
    }
    this.#score = newScore;
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

class AdminPlayer extends Player {
  constructor(first, last, powers) {
    super(first, last);
    this.powers = powers;
  }
  isAdmin = true;
}

const admin = new AdminPlayer('admin', 'mCadmin', ['delete', 'restore']);

const player1 = new Player('blue', 'steele');

// console.log(player1.#secret) // Error
// console.log(player1.fullName);
// player1.fullName = 'Ozan Yasin';
// console.log(player1);

// END
