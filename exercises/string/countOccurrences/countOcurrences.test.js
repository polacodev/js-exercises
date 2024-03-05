/* eslint-disable no-undef */
const exercises = require('../../index.js')

describe('countOccurrences', () => {
  test('should return defghi', () => {
    const input = 'abcdef'
    const output = [{ a: 1 }, { b: 1 }, { c: 1 }, { d: 1 }, { e: 1 }, { f: 1 }]
    const response = exercises.countOccurrences(input)
    expect(output).toEqual(response)
  })

  test('should return ababababababab', () => {
    const input = 'aabbccdead'
    const output = [{ a: 3 }, { b: 2 }, { c: 2 }, { d: 2 }, { e: 1 }]
    const response = exercises.countOccurrences(input)
    expect(output).toEqual(response)
  })

  test('should return abbcdeffgh', () => {
    const input = 'asdqweadsqweasd'
    const output = [{ a: 3 }, { s: 3 }, { d: 3 }, { q: 2 }, { w: 2 }, { e: 2 }]
    const response = exercises.countOccurrences(input)
    expect(output).toEqual(response)
  })
})
