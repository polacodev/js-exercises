const exercises = require("../../index")

describe('Count Vowels', () => {
	it('should return 3', () => {
		const input = "JavaScript"
		const output = 3
		const response = exercises.countVowels(input)
		expect(output).toBe(response);
	});

	it('should return 5', () => {
		const input = "what about now"
		const output = 5
		const response = exercises.countVowels(input)
		expect(output).toBe(response)
	});

	it('should return 3', () => {
		const input = "let me think"
		const output = 3
		const response = exercises.countVowels(input)
		expect(output).toBe(response)
	});

	it('should return 4', () => {
		const input = "coming soon"
		const output = 4
		const response = exercises.countVowels(input)
		expect(output).toBe(response)
	});
})
