import userController from "../controllers/userController.js";
import testCentersController from "../controllers/testCentersController.js";

export default class adminView {
	constructor() {
		this.userController = new userController();
		this.testCentersController = new testCentersController();

		this.centerDD = document.querySelectorAll("#centerDD")[0];
		this.usersDD = document.querySelectorAll("#usersDD")[0];
		this.selectCenter = document.querySelectorAll("#btnSelectCenter")[0];
		this.selectUser = document.querySelectorAll("#btnSelectUser")[0];
		this.removeCenter = document.querySelectorAll("#btnRemoveCenter")[0];
		this.removeUser = document.querySelectorAll("#btnRemoveUser")[0];
		this.saveChanges = document.querySelectorAll("#btnSaveChanges")[0];
		this.saveChangesCenter = document.querySelectorAll(
			"#btnSaveChangesCenter"
		)[0];
		this.users = this.userController.users;
		this.testCenters = this.testCentersController.testCenters;
		this.inpCenter = document.querySelectorAll(".inpCenter");
		this.inpUser = document.querySelectorAll(".inpUser");

		this.fillDDUser();
		this.bindRemoveUser();
		this.bindSelectUser();
		this.bindSaveChanges();
		this.fillDDCenter();
		this.bindSelectTestCenter();
		this.bindRemoveCenter();
		this.bindSaveChangesCenter();
	}

	fillDDCenter() {
		for (let i = 0; i < this.testCenters.length; i++) {
			let option = document.createElement("option");
			option.innerHTML = `${this.testCenters[i].testCenterName}`;
			option.setAttribute(
				"value",
				`${this.testCenters[i].testCenterName}`
			);
			this.centerDD.appendChild(option);
		}
	}

	fillDDUser() {
		for (let i = 0; i < this.users.length; i++) {
			let option = document.createElement("option");
			option.innerHTML = `${this.users[i].usersName} / ${this.users[i].email}`;
			option.setAttribute("value", `${this.users[i].email}`);
			this.usersDD.appendChild(option);
		}
	}

	bindSelectTestCenter() {
		this.selectCenter.addEventListener("click", () => {
			let testCenterInfo = this.testCentersController.getTestCenterInfo(
				this.centerDD.value
			);
			this.inpCenter[0].value = testCenterInfo.testCenterName;
			this.inpCenter[1].value = testCenterInfo.address;
			this.inpCenter[2].value = testCenterInfo.contact.email;
			this.inpCenter[3].value = testCenterInfo.contact.phone;
			this.inpCenter[4].value = testCenterInfo.openHours;
			this.inpCenter[5].value = testCenterInfo.website;
			this.inpCenter[6].value = testCenterInfo.Latlng;
		});
	}

	bindSelectUser() {
		this.selectUser.addEventListener("click", () => {
			let userInfo = this.userController.getUserInfoById(
				this.usersDD.selectedIndex
			);
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

	bindRemoveCenter() {
		this.removeCenter.addEventListener("click", () => {
			this.testCentersController.removeTestCenter(
				this.centerDD.selectedIndex
			);

			history.go(0);
		});
	}

	bindRemoveUser() {
		this.removeUser.addEventListener("click", () => {
			this.userController.removeUser(this.usersDD.selectedIndex);

			history.go(0);
		});
	}

	bindSaveChangesCenter() {
		this.saveChangesCenter.addEventListener("click", () => {
			this.testCentersController.editCenter(
				this.centerDD.selectedIndex,
				this.inpCenter[0].value,
				this.inpCenter[1].value,
				this.inpCenter[2].value,
				this.inpCenter[3].value,
				this.inpCenter[4].value,
				this.inpCenter[5].value,
				this.inpCenter[6].value
			);
		});
	}

	bindSaveChanges() {
		this.saveChanges.addEventListener("click", () => {
			this.userController.editUser(
				this.usersDD.selectedIndex,
				this.inpUser[0].value,
				this.inpUser[1].value,
				this.inpUser[2].value,
				this.inpUser[3].value,
				this.inpUser[4].value,
				this.inpUser[5].value,
				this.inpUser[6].value,
				this.inpUser[7].value
			);
		});
	}
}
