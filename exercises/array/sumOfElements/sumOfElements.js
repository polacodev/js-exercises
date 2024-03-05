const sumOfElements = (input) => {
  let response = 0

  input.forEach(element => {
    response += element
  })
  return response
}

module.exports = sumOfElements
