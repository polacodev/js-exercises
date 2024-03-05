/**
 * @param {*} text
 * input 		--> abcddddefghi
 * output 	--> defghi
 * @returns the longest Non Repeated string
 */
const getLongestNonRepeatedString = (text) => {
	let response = ""
	let responseAux = ""

	for (let i = 0; i < text.length; i++) {
		if (text[i] !== text[i + 1]) {
			responseAux += text[i]
		} else {
			if (responseAux.length > response.length) {
				response = responseAux + text[i]
				responseAux = ""
			}
		}
	}

	if (responseAux.length > response.length) {
		response = responseAux
		responseAux = ""
	}

	return response;
}

// const input = "abcddddefgh"
// const res = getLongestNonRepeatedString(input)

module.exports = getLongestNonRepeatedString;
