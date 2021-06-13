import userController from "../controllers/userController.js";
import testCentersController from "../controllers/testCentersController.js";

export default class adminView {
	constructor() {
		this.userController = new userController();
		this.testCentersController = new testCentersController();

		this.usersDD = document.querySelectorAll("#usersDD")[0];
		this.selectUser = document.querySelectorAll("#btnSelectUser")[0];
		this.removeUser = document.querySelectorAll("#btnRemoveUser")[0];
		this.users = this.userController.users;
		this.inpUser = document.querySelectorAll(".inpUser");

		this.fillDD();
		this.bindRemoveUser();
		this.bindSelectUser();
	}

	fillDD() {
		for (let i = 0; i < this.users.length; i++) {
			let option = document.createElement("option");
			option.innerHTML = `${this.users[i].usersName} / ${this.users[i].email}`;
			option.setAttribute("value", `${this.users[i].email}`);
			this.usersDD.appendChild(option);
		}
	}

	bindSelectUser() {
		this.selectUser.addEventListener("click", () => {
			let userInfo = this.userController.getUserInfo(
				this.usersDD.selectedIndex
			);
			console.log(userInfo.nif);
			this.inpUser[0].value = userInfo.usersName;
			this.inpUser[1].value = userInfo.dob;
			this.inpUser[2].value = userInfo.nif;
			this.inpUser[3].value = userInfo.city;
			this.inpUser[4].value = userInfo.gender;
			this.inpUser[5].value = userInfo.email;
			this.inpUser[6].value = userInfo.phone;
			this.inpUser[7].value = userInfo.password;
		});
	}

	bindRemoveUser() {
		this.removeUser.addEventListener("click", () => {
			this.userController.removeUser(this.usersDD.selectedIndex);
			this.usersDD.remove(
				this.usersDD.options[this.usersDD.selectedIndex].text
			);
		});
	}
}
