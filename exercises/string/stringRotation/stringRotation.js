const stringRotation = (input1, input2) => {
  const response = false

  if (input1.length !== input2.length) return false

  for (let i = 0; i < input1.length; i++) {
    input1 = input1.substring(1) + input1.charAt(0)
    if (input1 === input2) {
      return true
    }
  }

  return response
}

module.exports = stringRotation
