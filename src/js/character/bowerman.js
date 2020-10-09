import Character from '../app';

export default class Bowerman extends Character { // лучник
  constructor() {
    super('Bowerman');
    this.attack = 25;
    this.defence = 25;
  }
}
