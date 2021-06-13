import userController from "../controllers/userController.js";
import testCentersController from "../controllers/testCentersController.js";
import appointmentController from "../controllers/appointmentController.js";

export default class indexView {
	constructor() {
		this.testCentersController = new testCentersController();
		this.userController = new userController();

		this.btnSubmit = document.querySelectorAll(".search-item-container");
		this.bindBtnSubmit();
	}

	bindBtnSubmit() {
		this.btnSubmit[3].addEventListener("click", () => {
			if (!this.userController.isLogged()) {
				window.location.href = "../../html/login.html";
				return;
			} else {
			}
		});
	}
}
