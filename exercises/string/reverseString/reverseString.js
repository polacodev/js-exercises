const reverseString = (input) => {
	let response = ""

	for (let i = 0; i < input.length; i++) {
		response = input[i] + response
	}
	return response;
}

module.exports = reverseString;
