/* eslint-disable no-undef */
const exercises = require('../../index')

describe('Longest Word', () => {
  it('should return sentence', () => {
    const input = 'This is a simple test sentence'
    const output = 'sentence'
    const response = exercises.longestWord(input)
    expect(output).toBe(response)
  })

  it('should return about', () => {
    const input = 'what about now'
    const output = 'about'
    const response = exercises.longestWord(input)
    expect(output).toBe(response)
  })

  it('should return think', () => {
    const input = 'let me think'
    const output = 'think'
    const response = exercises.longestWord(input)
    expect(output).toBe(response)
  })

  it('should return coming', () => {
    const input = 'coming soon'
    const output = 'coming'
    const response = exercises.longestWord(input)
    expect(output).toBe(response)
  })
})
