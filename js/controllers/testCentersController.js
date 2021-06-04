import testCenterModel from "../models/testCenterModel.js";

export default class testCenterController {
	constructor() {
		this.testCenters = localStorage.testCenters
			? JSON.parse(localStorage.testCenters)
			: [];
	}

	addLike(testCenterName) {
		let testCenter = this.getTestCenterInfo(testCenterName);
		testCenter.likes += 1;
		return testCenter.likes;
	}

	getTestCenters() {
		return this.testCenters;
	}

	getTestCenterInfo(testCenterName) {
		for (let i = 0; i < this.testCenters.length; i++) {
			if (this.testCenters[i].testCenterName === testCenterName) {
				return this.testCenters[i];
			}
		}
	}
}
