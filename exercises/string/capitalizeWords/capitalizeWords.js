const capitalizeWords = (input) => {
	let response = input[0].toUpperCase()

	for (let i = 1; i < input.length; i++) {
		if (input[i - 1] === " " && input[i] !== " ") {
			response += input[i].toUpperCase()
		} else {
			response += input[i]
		}
	}
	return response
}

module.exports = capitalizeWords;
