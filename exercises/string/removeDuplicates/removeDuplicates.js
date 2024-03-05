const removeDuplicates = (input) => {
	let response = ""

	for (let i = 0; i < input.length; i++) {
		if (!response.includes(input[i])) {
			response += input[i]
		}
	}

	return response
}

module.exports = removeDuplicates;
