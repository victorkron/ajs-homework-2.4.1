import Character from '../app';

export default class Daemon extends Character { // демон
  constructor() {
    super('Daemon');
    this.attack = 10;
    this.defence = 40;
  }
}
