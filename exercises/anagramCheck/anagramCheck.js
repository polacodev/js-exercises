const anagramCheck = (input1, input2) => {
	let response = true;

	if (input1.length !== input2.length) return false;

	for (let i = 0; i < input1.length; i++) {
		if (!input2.includes(input1[i]))
		{
			return false
		}
	}
	return response;
}

module.exports = anagramCheck;
