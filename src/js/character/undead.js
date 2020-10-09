import Character from '../app';

export default class Undead extends Character { // нежить
  constructor() {
    super('Undead');
    this.attack = 25;
    this.defence = 25;
  }
}
