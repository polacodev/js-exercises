/* eslint-disable no-undef */
const exercises = require('../../index')

describe('Count Array Occurrences', () => {
  it("should return '{ 1: 3, 2: 2, 3: 1, 4: 1, 5: 1 }'", () => {
    const input = [1, 2, 1, 3, 4, 2, 5, 1]
    const output = { 1: 3, 2: 2, 3: 1, 4: 1, 5: 1 }
    const response = exercises.countArrayOccurrences(input)
    expect(output).toEqual(response)
  })

  it("should return '{ 1: 2, 2: 2, 3: 3 }'", () => {
    const input = [1, 2, 3, 1, 2, 3]
    const output = { 1: 2, 2: 2, 3: 2 }
    const response = exercises.countArrayOccurrences(input)
    expect(output).toEqual(response)
  })

  it("should return '{ 5: 1, 6: 1, 7: 1 }'", () => {
    const input = [5, 6, 7]
    const output = { 5: 1, 6: 1, 7: 1 }
    const response = exercises.countArrayOccurrences(input)
    expect(output).toEqual(response)
  })
})
