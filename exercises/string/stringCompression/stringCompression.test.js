const exercises = require("../../index")

describe("String Compression", () => {
	it("should return 'a2b1c5a3'", () => {
		const input = "aabcccccaaa"
		const output = "a2b1c5a3"
		const response = exercises.stringCompression(input)
		expect(output).toBe(response);
	});

	it("should return 'b3e2r1'", () => {
		const input = "bbbeer"
		const output = "b3e2r1"
		const response = exercises.stringCompression(input)
		expect(output).toBe(response)
	});

	it("should return 'a1'", () => {
		const input = "a"
		const output = "a1"
		const response = exercises.stringCompression(input)
		expect(output).toBe(response)
	});

	it("should return 'w3s2d1w2f1c2r1'", () => {
		const input = "wwwssdwwfccr"
		const output = "w3s2d1w2f1c2r1"
		const response = exercises.stringCompression(input)
		expect(output).toBe(response)
	});
})
