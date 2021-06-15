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

		this.addDropdown();
	}

	bindRegisterForm() {
		this.registerButton.addEventListener("click", () => {
			for (let i = 0; i < this.userController.users.length; i++) {
				if (
					this.registerEmail.value ==
					this.userController.users[i].email
				) {
					this.displayMessage(
						"Existe uma conta com o email introduzido",
						"rgb(240, 135, 55)"
					);
					return;
				}
			}
			if (this.registerPw.value !== this.registerPw2.value) {
				this.displayMessage(
					"As palavras-passe não coincidem!",
					"rgb(240, 135, 55)"
				);
				return;
			}
			if (!document.querySelectorAll("#chk18")[0].checked) {
				this.displayMessage(
					"Tem de ter mais de 18 anos para se registar",
					"rgb(240, 135, 55)"
				);
				return;
			}
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
			this.displayMessage("Utilizador registado com sucesso!", "#1e1c41");
		});
	}

	addDropdown() {
		let inpGender = document.querySelectorAll("#inpGender")[0];
		let dropdown = document.querySelectorAll(".dropdown")[0];
		let dropdownList = document.querySelectorAll(".dropdownList")[0];

		inpGender.addEventListener("focus", () => {
			dropdown.classList.replace("hidden", "shown");
		});

		inpGender.addEventListener("focusout", () => {
			setTimeout(function () {
				dropdown.classList.replace("shown", "hidden");
			}, 140);
		});

		for (let i = 0; i < dropdownList.childNodes.length; i++) {
			if (dropdownList.childNodes[i].nodeName == "LI") {
				dropdownList.childNodes[i].addEventListener("click", () => {
					console.log(dropdownList.childNodes[i].innerHTML);
					inpGender.value = dropdownList.childNodes[i].innerHTML;
				});
			}
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
