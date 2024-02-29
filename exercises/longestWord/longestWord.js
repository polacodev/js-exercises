const longestWord = (input) => {
	let response = ""

	const wordList = input.split(" ");

	for (let i = 0; i < wordList.length; i++) {
		if (wordList[i].length > response.length) {
			response = wordList[i]
		}
	}

	return response
}

module.exports = longestWord;
