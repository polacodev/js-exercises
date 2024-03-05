const countSubstrings = (input1, input2) => {
	let response = 0

	while(input1.indexOf(input2) !== -1)
	{
		input1 = input1.replace(input2, "")
		response++;
	}

	return response
}

module.exports = countSubstrings;
