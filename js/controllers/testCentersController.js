import testCenterModel from "../models/testCenterModel.js";

export default class testCenterController {
	constructor() {
		this.testCenters = localStorage.testCenters
			? JSON.parse(localStorage.testCenters)
			: [];
	}

	addLike(testCenterName) {
		let testCenter = this.getTestCenterInfo(testCenterName);

		if (sessionStorage.getItem("loggedUser")) {
			let userLogged = sessionStorage.getItem("loggedUser");
		} else {
			let userLogged = localStorage.getItem("loggedUser");
		}

		for (let i = 0; i < this.users.length; i++) {
			if (this.users[i].email === email) {
				return this.users[i];
			}
		}

		testCenter.likes += 1;
		this.testCenters[testCenter.id].likes = testCenter.likes;
		localStorage.setItem("testCenters", JSON.stringify(this.testCenters));
		userLogged.likes.push(testCenter.id);
		return this.testCenters[testCenter.id].likes;
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
