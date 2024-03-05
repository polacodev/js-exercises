/* eslint-disable no-undef */
const exercises = require('../../index')

describe('Capitalize Words', () => {
  it("should return 'Capitalize The First Letter'", () => {
    const input = 'capitalize the first letter'
    const output = 'Capitalize The First Letter'
    const response = exercises.capitalizeWords(input)
    expect(output).toBe(response)
  })

  it("should return 'Hey My     Friend'", () => {
    const input = 'hey my     friend'
    const output = 'Hey My     Friend'
    const response = exercises.capitalizeWords(input)
    expect(output).toBe(response)
  })

  it("should return 'Keep Going, You Almost There'", () => {
    const input = 'keep going, you almost there'
    const output = 'Keep Going, You Almost There'
    const response = exercises.capitalizeWords(input)
    expect(output).toBe(response)
  })

  it("should return 'Good Morning Everyone'", () => {
    const input = 'Good morning everyone, i am here'
    const output = 'Good Morning Everyone, I Am Here'
    const response = exercises.capitalizeWords(input)
    expect(output).toBe(response)
  })
})
