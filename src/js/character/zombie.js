import Character from '../app';

export default class Zombie extends Character { // зомби
  constructor() {
    super('Zombie');
    this.attack = 40;
    this.defence = 10;
  }
}
