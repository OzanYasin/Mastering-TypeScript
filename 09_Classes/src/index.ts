class Player {
  public readonly first: string;
  public readonly last: string;
  public score: number = 0;

  constructor(first: string, last: string) {
    this.first = first;
    this.last = last;
  }
}

const elton = new Player('Elton', 'Steele');

// readonly -> Does not allow to change the property or method
// public -> It makes clear that property or method is reachable from outside.
// private -> It makes property or method is only accessible or usable inside the class.
