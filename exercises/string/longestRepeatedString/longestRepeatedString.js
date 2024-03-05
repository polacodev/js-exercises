const getLongestRepeatedString = (input) => {
  let response = ''
  let responseAux = ''

  for (let i = 0; i < input.length; i++) {
    if (input[i] === input[i + 1]) {
      responseAux += input[i]
    } else {
      responseAux += input[i]
      response = (responseAux.length > response.length ? responseAux : response)
      responseAux = ''
    }
  }
  return response
}

module.exports = getLongestRepeatedString
