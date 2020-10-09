import Character from '../app';
import Bowerman from '../character/bowerman';
import Swordsman from '../character/swordsman';
import Magician from '../character/magician';
import Daemon from '../character/daemon';
import Undead from '../character/undead';
import Zombie from '../character/zombie';

const expectObj = {
  type: '-',
};

const bowermanObj = {
  type: 'Bowerman',
  attack: 25,
  defence: 25,
};

const swordsmanObj = {
  type: 'Swordsman',
  attack: 40,
  defence: 10,
};

const magicianObj = {
  type: 'Magician',
  attack: 10,
  defence: 40,
};

const daemonObj = {
  type: 'Daemon',
  attack: 10,
  defence: 40,
};

const undeadObj = {
  type: 'Undead',
  attack: 25,
  defence: 25,
};

const zombieObj = {
  type: 'Zombie',
  attack: 40,
  defence: 10,
};

describe('Character tests: ', () => {
  test.each([
    ['input is valid', '-', expectObj],
  ])(
    ('-> %s'),
    (name, inputData, expectation) => {
      const obj = new Character(inputData);

      expect(obj).toEqual(expectation);
    },
  );
});

test('Bowerman', () => {
  const obj = new Bowerman();
  expect(obj).toEqual(bowermanObj);
});

test('Swordsman', () => {
  const obj = new Swordsman();
  expect(obj).toEqual(swordsmanObj);
});

test('Magician', () => {
  const obj = new Magician();
  expect(obj).toEqual(magicianObj);
});

test('Daemon', () => {
  const obj = new Daemon();
  expect(obj).toEqual(daemonObj);
});

test('Undead', () => {
  const obj = new Undead();
  expect(obj).toEqual(undeadObj);
});

test('Zombie', () => {
  const obj = new Zombie();
  expect(obj).toEqual(zombieObj);
});
