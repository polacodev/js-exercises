/* eslint-disable no-undef */
const exercises = require('../../index')

describe('getLongestRepeatedString', () => {
  it('should return aaa', () => {
    const input = 'aabbccdaaabddcbb'
    const output = 'aaa'
    const response = exercises.getLongestRepeatedString(input)
    expect(output).toBe(response)
  })

  it('should return ccc', () => {
    const input = 'abbccddabcdccc'
    const output = 'ccc'
    const response = exercises.getLongestRepeatedString(input)
    expect(output).toBe(response)
  })
})
