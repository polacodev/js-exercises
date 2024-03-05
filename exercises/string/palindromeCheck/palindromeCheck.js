const palindromeCheck = (input) => {
	let reverseString = "";

	for (let i = 0; i < input.length; i++) {
		reverseString = input[i] + reverseString
	}
	return input === reverseString;
}

module.exports = palindromeCheck;
