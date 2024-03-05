const stringCompression = (input) => {
  let response = ''
  let count = 1

  for (let i = 0; i < input.length; i++) {
    if (input[i] === input[i + 1]) {
      count++
    } else {
      response += input[i] + count
      count = 1
    }
  }
  return response
}

module.exports = stringCompression
