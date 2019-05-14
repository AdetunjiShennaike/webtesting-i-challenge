const enhancer = require('./enhancer.js');
// test away!

const item = {
  name: 'Fenrir',
  enhancement: 20,
  durability: 90,
}

const item2 = {
  name: 'Copper Sword',
  enhancement: 10,
  durability: 100
}

const item3 = {
  name: 'Broken Sword',
  enhancement: 0,
  durability:0
}

const item4 = {
  name: 'Something',
  enhancement: 15,
  durability: 100
}

describe('enhancer.js', () => {
  describe('succeed() method', () => {
    it('tests if ok', () => {
      expect(true).toBe(true);
    })

    //should remain 20
    it('should stay the same', () => {
      let calculate = enhancer.succeed(item)
      let result = calculate.enhancement
      expect(result).toBe(20)
    })

    //should increase by 1
    it('should increase by 1', () => {
      let calculate = enhancer.succeed(item2)
      let result = calculate.enhancement
      expect(result).toBe(11)
    })
  })

  describe('fail() method', () => {
    it('tests if ok', () => {
      expect(true).toBe(true);
    })

    //nothing changes
    it('should stay the same', () => {
      let calculate = enhancer.fail(item3)
      let result = calculate
      expect(result).toStrictEqual(item3)
    })

    //decrease the durability by 10
    it('10 less durability', () => {
      let calculate = enhancer.fail(item4)
      let result = calculate.durability
      expect(result).toBe(90)
    })

    //decrease the durability by 5
    it('5 less durability', () => {
      let calculate = enhancer.fail(item2)
      let result = calculate.durability
      expect(result).toBe(95)
    })

    //decreased enhancement
    it('1 less enhancement', () => {
      let calculate = enhancer.fail(item)
      let result = calculate.enhancement
      expect(result).toBe(19)
    })
  })

  describe('repair() method', () => {
    it('tests if ok', () => {
      expect(true).toBe(true);
    })

    //same maxed durability
    it('should stay the same', () => {
      let calculate = enhancer.repair(item2)
      let result = calculate.durability
      expect(result).toBe(100)
    })

    //should get repaired to 100
    it('should be repaired', () => {
      let calculate = enhancer.repair(item)
      let result = calculate.durability
      expect(result).toBe(100)
    })
  })
  
  describe('get() method', () => {
    it('tests if ok', () => {
      expect(true).toBe(true);
    })

    //produce the correct name
    it('output the correct enhanced name', () => {
      let result = enhancer.get(item2)
      expect(result).toBe('[+11] Copper Sword')
    })

    //should remain the same
    it('should output just the name', () => {
      let result = enhancer.get(item3)
      expect(result).toBe('Broken Sword')
    })
  })
})