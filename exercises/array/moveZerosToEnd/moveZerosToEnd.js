const moveZerosToEnd = (input) => {
  const responseZeros = []
  const responseNumbers = []

  input.forEach(element => {
    element === 0 ? responseZeros.push(element) : responseNumbers.push(element)
  })

  return [...responseNumbers, ...responseZeros]
}

module.exports = moveZerosToEnd
