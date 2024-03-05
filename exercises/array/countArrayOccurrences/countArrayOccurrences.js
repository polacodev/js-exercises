/* eslint-disable no-prototype-builtins */
const countArrayOccurrences = (input) => {
  const response = {}
  let count = 0

  for (let i = 0; i < input.length; i++) {
    if (response.hasOwnProperty(input[i])) {
      response[input[i]] = response[input[i]] + 1
    } else {
      count = 1
      response[input[i]] = count
    }
  }

  return response
}

module.exports = countArrayOccurrences
