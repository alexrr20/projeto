import testCenterModel from "../models/testCenterModel.js";

export default class testCenterController {
	constructor() {
		this.testCenters = localStorage.testCenters
			? JSON.parse(localStorage.testCenters)
			: [];
	}

	addLike(testCenterName, removeOrAdd) {
		let testCenter = this.getTestCenterInfo(testCenterName);
		if (removeOrAdd === true) {
			testCenter.likes += 1;
		} else {
			testCenter.likes -= 1;
		}
		this.testCenters[testCenter.id].likes = testCenter.likes;
		localStorage.setItem("testCenters", JSON.stringify(this.testCenters));
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

	addComment(testCenterName, commentToAdd, user, rating) {
		let testCenter = this.getTestCenterInfo(testCenterName);
		let comment = {
			userComment: user,
			comment: commentToAdd,
			userRating: rating,
		};

		testCenter.comments.push(comment);
		this.testCenters[testCenter.id].comments = testCenter.comments;
		localStorage.setItem("testCenters", JSON.stringify(this.testCenters));
		return this.testCenters[testCenter.id].comments;
	}

	storeTempInfo(testCenterName) {
		localStorage.setItem("tempTestCenter", testCenterName);
	}

	getTempInfo() {
		return localStorage.getItem("tempTestCenter") !== null
			? localStorage.getItem("tempTestCenter")
			: null;
	}

	removeTemp() {
		localStorage.removeItem("tempTestCenter");
	}

	findLikes() {
		return this.testCenters.sort((a, b) => (a.likes < b.likes ? 1 : -1));
	}
}
