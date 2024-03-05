const exercises = require("../../index")

describe("Count Substrings", () => {
	it("should return '3'", () => {
		const input1 = "ababab"
		const input2 = "ab"
		const output = 3
		const response = exercises.countSubstrings(input1, input2)
		expect(output).toBe(response);
	});

	it("should return '4'", () => {
		const input1 = "edeedeedeede"
		const input2 = "ede"
		const output = 4
		const response = exercises.countSubstrings(input1, input2)
		expect(output).toBe(response);
	});

	it("should return '7'", () => {
		const input1 = "holaholaholaholaholaholahola"
		const input2 = "hola"
		const output = 7
		const response = exercises.countSubstrings(input1, input2)
		expect(output).toBe(response);
	});

	it("should return '2'", () => {
		const input1 = "elpepeelpepe"
		const input2 = "elpepe"
		const output = 2
		const response = exercises.countSubstrings(input1, input2)
		expect(output).toBe(response);
	});
})
