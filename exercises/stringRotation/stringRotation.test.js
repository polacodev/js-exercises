const exercises = require("../index")

describe("String Rotation", () => {
	it("should return 'true'", () => {
		const input1 = "waterbottle"
		const input2 = "erbottlewat"
		const response = exercises.stringRotation(input1, input2)
		expect(response).toBeTruthy();
	});

	it("should return 'true'", () => {
		const input1 = "elpepe"
		const input2 = "lpepee"
		const response = exercises.stringRotation(input1, input2)
		expect(response).toBeTruthy();
	});

	it("should return 'true'", () => {
		const input1 = "tomorrowland"
		const input2 = "landtomorrow"
		const response = exercises.stringRotation(input1, input2)
		expect(response).toBeTruthy();
	});

	it("should return 'false'", () => {
		const input1 = "interview"
		const input2 = "viewintrr"
		const response = exercises.stringRotation(input1, input2)
		expect(response).toBeFalsy();
	});

	it("should return 'false'", () => {
		const input1 = "keyboard"
		const input2 = "boardkeys"
		const response = exercises.stringRotation(input1, input2)
		expect(response).toBeFalsy();
	});
})
