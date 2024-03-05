/* eslint-disable no-undef */
const exercises = require('../../index')

describe('Remove Duplicated Elements', () => {
  it("should return '[1, 2, 3, 4, 5]'", () => {
    const input = [1, 2, 2, 3, 4, 4, 5]
    const output = [1, 2, 3, 4, 5]
    const response = exercises.removeDuplicatedElements(input)
    expect(output).toEqual(response)
  })

  it("should return '[12, 4, 5, 7, 14]'", () => {
    const input = [12, 4, 12, 5, 7, 7, 14]
    const output = [12, 4, 5, 7, 14]
    const response = exercises.removeDuplicatedElements(input)
    expect(output).toEqual(response)
  })

  it("should return '[8]'", () => {
    const input = [8, 8, 8, 8, 8]
    const output = [8]
    const response = exercises.removeDuplicatedElements(input)
    expect(output).toEqual(response)
  })

  it("should return '[5, 8]'", () => {
    const input = [5, 8, 5, 8]
    const output = [5, 8]
    const response = exercises.removeDuplicatedElements(input)
    expect(output).toEqual(response)
  })
})
