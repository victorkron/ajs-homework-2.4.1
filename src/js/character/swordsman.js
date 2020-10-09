import Character from '../app';

export default class Swordsman extends Character { // фехтовальщик
  constructor() {
    super('Swordsman');
    this.attack = 40;
    this.defence = 10;
  }
}
