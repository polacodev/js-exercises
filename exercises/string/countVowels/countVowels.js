const countVowels = (input) => {
  const vowels = 'aeiou'
  let count = 0

  for (let i = 0; i < input.length; i++) {
    if (vowels.includes(input[i])) {
      count++
    }
  }
  return count
}

module.exports = countVowels
