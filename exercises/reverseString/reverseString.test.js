const exercises = require("../index")

describe('Reverse A String', () => {
	it('should return olleH', () => {
		const input = "Hello"
		const output = "olleH"
		const response = exercises.reverseString(input)
		expect(output).toMatch(response);
	});

	it('should return a', () => {
		const input = "a"
		const output = "a"
		const response = exercises.reverseString(input)
		expect(output).toMatch(response);
	});

	it('should return razatlaBsucraM', () => {
		const input = "MarcusBaltazar"
		const output = "razatlaBsucraM"
		const response = exercises.reverseString(input)
		expect(output).toMatch(response);
	});

	it('should return ereH mI', () => {
		const input = "Im Here"
		const output = "ereH mI"
		const response = exercises.reverseString(input)
		expect(output).toMatch(response);
	});
})
