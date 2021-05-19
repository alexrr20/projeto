import userModel from "../models/userModel.js";

export default class userController {
	constructor() {
		this.users = localStorage.users ? JSON.parse(localStorage.users) : [];
	}
}
