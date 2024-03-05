/* eslint-disable no-undef */
const exercises = require('../../index')

describe('Palindrome Check', () => {
  it('should return true', () => {
    const input = 'radar'
    const response = exercises.palindromeCheck(input)
    expect(response).toBeTruthy()
  })

  it('should return true', () => {
    const input = 'rotator'
    const response = exercises.palindromeCheck(input)
    expect(response).toBeTruthy()
  })

  it('should return true', () => {
    const input = 'kayak'
    const response = exercises.palindromeCheck(input)
    expect(response).toBeTruthy()
  })

  it('should return false', () => {
    const input = 'wowo'
    const response = exercises.palindromeCheck(input)
    expect(response).toBeFalsy()
  })
})
