/* eslint-disable no-undef */
const exercises = require('../../index')

describe('Intersection Of Two Arrays', () => {
  it("should return '[3, 4]'", () => {
    const input1 = [1, 2, 3, 4]
    const input2 = [3, 4, 5, 6]
    const output = [3, 4]
    const response = exercises.intersectionOfTwoArrays(input1, input2)
    expect(output).toEqual(response)
  })

  it("should return '[7, 8, 9, 10]'", () => {
    const input1 = [6, 7, 8, 9, 10]
    const input2 = [7, 8, 9, 10]
    const output = [7, 8, 9, 10]
    const response = exercises.intersectionOfTwoArrays(input1, input2)
    expect(output).toEqual(response)
  })

  it("should return '[5, 6, 7, 8]'", () => {
    const input1 = [5, 6, 7, 8]
    const input2 = [5, 6, 7, 8]
    const output = [5, 6, 7, 8]
    const response = exercises.intersectionOfTwoArrays(input1, input2)
    expect(output).toEqual(response)
  })

  it("should return '[]'", () => {
    const input1 = [1, 2, 3]
    const input2 = [4, 5, 6]
    const output = []
    const response = exercises.intersectionOfTwoArrays(input1, input2)
    expect(output).toEqual(response)
  })
})
