import userController from "../controllers/userController.js";

export default class navView {
	constructor() {
		this.userController = new userController();

		this.navButtons = document.querySelectorAll(".btnSubmit");
		this.btnRedirect();
	}

	btnRedirect() {
		console.log(true);
	}
}

console.log(false);
