/* eslint-disable no-prototype-builtins */
const countOccurrences = (input) => {
  const output = []
  let count = 0

  for (let i = 0; i < input.length; i++) {
    const obj = output.find((item) => item.hasOwnProperty(input[i]))
    if (obj) {
      obj[input[i]] = obj[input[i]] + 1
    } else {
      count = 1
      output.push({ [input[i]]: count })
    }
  }

  return output
}

module.exports = countOccurrences
