const exercises = require("../index")

describe('Anagram Check', () => {
	it('should return true', () => {
		const input1 = "listen"
		const input2 = "silent"
		const response = exercises.anagramCheck(input1, input2)
		expect(response).toBeTruthy();
	});

	it('should return true', () => {
		const input1 = "top"
		const input2 = "pot"
		const response = exercises.anagramCheck(input1, input2)
		expect(response).toBeTruthy();
	});

	it('should return true', () => {
		const input1 = "coronavirus"
		const input2 = "carnivorous"
		const response = exercises.anagramCheck(input1, input2)
		expect(response).toBeTruthy();
	});

	it('should return false', () => {
		const input1 = "evil"
		const input2 = "vilee"
		const response = exercises.anagramCheck(input1, input2)
		expect(response).toBeFalsy();
	});
})
