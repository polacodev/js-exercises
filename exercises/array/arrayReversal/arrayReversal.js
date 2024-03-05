const arrayReversal = (input) => {
  const response = []
  input.forEach(element => {
    response.unshift(element)
  })
  return response
}

module.exports = arrayReversal
