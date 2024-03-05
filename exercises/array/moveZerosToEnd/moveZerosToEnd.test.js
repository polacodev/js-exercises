/* eslint-disable no-undef */
const exercises = require('../../index')

describe('Move Zeros To End', () => {
  it("should return '[2, 4, 6, 8, 0, 0, 0]'", () => {
    const input = [0, 2, 0, 4, 6, 0, 8]
    const output = [2, 4, 6, 8, 0, 0, 0]
    const response = exercises.moveZerosToEnd(input)
    expect(output).toEqual(response)
  })

  it("should return '[1, 2, 3]'", () => {
    const input = [1, 2, 3]
    const output = [1, 2, 3]
    const response = exercises.moveZerosToEnd(input)
    expect(output).toEqual(response)
  })

  it("should return '[5, 6, 7, 0, 0, 0]'", () => {
    const input = [0, 0, 0, 5, 6, 7]
    const output = [5, 6, 7, 0, 0, 0]
    const response = exercises.moveZerosToEnd(input)
    expect(output).toEqual(response)
  })

  it("should return '[4,5,6,0,0,0]'", () => {
    const input = [4, 5, 6, 0, 0, 0]
    const output = [4, 5, 6, 0, 0, 0]
    const response = exercises.moveZerosToEnd(input)
    expect(output).toEqual(response)
  })
})
