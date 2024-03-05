const removeDuplicatedElements = (input) => {
  const response = []
  input.forEach(element => {
    if (!response.includes(element)) {
      return response.push(element)
    }
  })
  return response
}

module.exports = removeDuplicatedElements
