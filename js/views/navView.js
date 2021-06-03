import userController from "../controllers/userController.js";

export default class navView {
	constructor() {
		this.userController = new userController();

		this.navButtons = document.querySelectorAll(".btnSubmit");
		this.btnRedirect();
	}

	btnRedirect() {
		console.log(false);
		this.navButtons[1].onclick = function () {
			location.href = ".../html/login.html";
		};
	}
}

console.log(true);
