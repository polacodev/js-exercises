/* eslint-disable no-undef */
const exercises = require('../../index')

describe('Sum Of Elements', () => {
  it("should return '15'", () => {
    const input = [1, 2, 3, 4, 5]
    const output = 15
    const response = exercises.sumOfElements(input)
    expect(output).toBe(response)
  })

  it("should return '67'", () => {
    const input = [12, 4, 23, 5, 7, 2, 14]
    const output = 67
    const response = exercises.sumOfElements(input)
    expect(output).toBe(response)
  })

  it("should return '108'", () => {
    const input = [8, 2, 34, 8, 56]
    const output = 108
    const response = exercises.sumOfElements(input)
    expect(output).toBe(response)
  })

  it("should return '105'", () => {
    const input = [5, 8, 15, 77]
    const output = 105
    const response = exercises.sumOfElements(input)
    expect(output).toBe(response)
  })
})
