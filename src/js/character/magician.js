import Character from '../app';

export default class Magician extends Character { // волшебник
  constructor() {
    super('Magician');
    this.attack = 10;
    this.defence = 40;
  }
}
