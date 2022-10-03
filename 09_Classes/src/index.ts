class Player {
  // public readonly first: string;
  // public readonly last: string;
  // public score: number = 0;

  constructor(
    public first: string,
    public last: string,
    protected _score: number = 0 // Parameter Properties (Also known as shortcut syntax)
  ) {}
  get fullName(): string {
    return `${this.first} ${this.last}`;
  }

  get score(): number {
    return this._score;
  }

  set score(newScore: number) {
    if (newScore < 0) {
      throw new Error('Score cannot be negative');
    }
    this._score = newScore;
  }
}

class SuperPlayer extends Player {
  public isAdmin: boolean = true;
  maxScore() {
    this._score = 999;
  }
}

interface Colorful {
  color: string;
}

interface Printable {
  print(): void;
}

class Jacket implements Colorful, Printable {
  constructor(public brand: string, public color: string) {}
  print(): void {
    console.log(`${this.color} ${this.brand} Jacket`);
  }
}

class Bike implements Colorful {
  constructor(public color: string) {}
}

const bike1 = new Bike('red');

const jacket1 = new Jacket('Prada', 'Black');

const elton = new Player('Elton', 'Steele');
// elton.fullName = 'Something Else' // It's readonly on default. So, it throws Error
elton.score = 33;

// readonly -> Does not allow to change the property or method
// public -> Available anywhere
// private -> Only available in the exact class you define it
// protected -> Available in the class you defined on & any classes that inherit from that class
