/* eslint-disable no-undef */
const exercises = require('../../index.js')

describe('longestNonRepeatedString', () => {
  test('should return defghi', () => {
    const input = 'abcdddefghi'
    const output = 'defghi'
    const response = exercises.getLongestNonRepeatedString(input)
    expect(output).toBe(response)
  })

  test('should return ababababababab', () => {
    const input = 'abababababababb'
    const output = 'ababababababab'
    const response = exercises.getLongestNonRepeatedString(input)
    expect(output).toBe(response)
  })

  test('should return abbcdeffgh', () => {
    const input = 'abbcdeffgh'
    const output = 'bcdef'
    const response = exercises.getLongestNonRepeatedString(input)
    expect(output).toBe(response)
  })
})
