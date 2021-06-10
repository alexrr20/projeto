import userController from "../controllers/userController.js";

export default class registerView {
	constructor() {
		this.userController = new userController();

		// register DOM
		this.registerUsersName = document.getElementById("inpUsersName");
		this.registerDOB = document.getElementById("inpDOB");
		this.registerNIF = document.getElementById("inpNIF");
		this.registerCity = document.getElementById("inpCity");
		this.registerGender = document.getElementById("inpGender");
		this.registerEmail = document.getElementById("inpEmail");
		this.registerPhone = document.getElementById("inpPhone");
		this.registerPw = document.getElementById("inpPw");
		this.registerPw2 = document.getElementById("inpPw2");
		this.registerButton = document.getElementById("btnCriar");
		this.bindRegisterForm();

		this.messages = document.querySelector("#messages");
		this.checkLoginStatus();
	}

	bindRegisterForm() {
		this.registerButton.addEventListener("click", () => {
			try {
				if (this.registerPw.value !== this.registerPw2.value) {
					console.log("yes");
					throw Error("As Passwords digitadas não coincidem!");
				}
				console.log("no");
				this.userController.register(
					this.registerUsersName.value,
					this.registerDOB.value,
					this.registerNIF.value,
					this.registerCity.value,
					this.registerGender.value,
					this.registerEmail.value,
					this.registerPhone.value,
					this.registerPw.value
				);
				this.displayMessage(
					"Utilizador registado com sucesso!",
					"success"
				);
			} catch (e) {
				this.displayMessage(e, "danger");
			}
		});
	}

	checkLoginStatus() {
		if (this.userController.isLogged()) {
			this.updateButtons("login");
		} else {
			this.updateButtons("logout");
		}
	}

	updateButtons(event) {
		switch (event) {
			case "login":
				this.loginButton.style.visibility = "hidden";
				this.logoutButton.style.visibility = "visible";
				break;
			case "logout":
				this.loginButton.style.visibility = "visible";
				this.logoutButton.style.visibility = "hidden";
		}
	}

	displayMessage(message, color) {
		Swal.fire({
			title: message,
			position: "bottom",
			background: color,
			allowEscapeKey: false,
			allowEnterKey: false,
			showConfirmButton: false,
			showCancelButton: false,
			backdrop: false,
			timer: 2000,
		});
	}
	
}
