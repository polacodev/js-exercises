const intersectionOfTwoArrays = (input1, input2) => {
  const response = []

  for (let i = 0; i < input1.length; i++) {
    if (input2.includes(input1[i])) {
      response.push(input1[i])
    }
  }
  return response
}

module.exports = intersectionOfTwoArrays
