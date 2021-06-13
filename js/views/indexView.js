import userController from "../controllers/userController.js";
import testCentersController from "../controllers/testCentersController.js";

export default class indexView {
	constructor() {
		this.testCentersController = new testCentersController();
		this.userController = new userController();
	}
}
