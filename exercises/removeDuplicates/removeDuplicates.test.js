const exercises = require("../index")

describe("Remove Duplicates", () => {
	it("should return 'progamin'", () => {
		const input = "programming"
		const output = "progamin"
		const response = exercises.removeDuplicates(input)
		expect(output).toBe(response);
	});

	it("should return 'true'", () => {
		const input = "elpepe"
		const output = "elp"
		const response = exercises.removeDuplicates(input)
		expect(output).toBe(response);
	});

	it("should return 'tomrwland'", () => {
		const input = "tomorrowland"
		const output = "tomrwland"
		const response = exercises.removeDuplicates(input)
		expect(output).toBe(response);
	});

	it("should return 'intervw'", () => {
		const input = "interview"
		const output = "intervw"
		const response = exercises.removeDuplicates(input)
		expect(output).toBe(response);
	});
})
