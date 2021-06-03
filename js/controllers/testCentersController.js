import testCenterModel from "../models/testCenterModel.js";

export default class testCenterController {
	constructor() {
		this.testCenters = localStorage.testCenters
			? JSON.parse(localStorage.testCenters)
			: [];
	}

	addLike(testCenterName) {
		const testCenter = this.testCenters.some(
			(testCenter) => testCenter.testCenterName === testCenterName
		);
		testCenter.likes += 1;
	}
}
