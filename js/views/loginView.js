import userController from "../controllers/userController.js";

export default class loginView {
	constructor() {
		this.userController = new userController();

		// login DOM
		this.loginEmail = document.getElementById("inpEmail");
		this.loginPassword = document.getElementById("inpPw");
		this.loginButton = document.getElementById("btnLogin");
		this.sessionCheck = document.getElementById("chkSession");
		this.bindLoginForm();
	}

	bindLoginForm() {
		this.loginButton.addEventListener("click", () => {
			try {
				this.userController.login(
					this.loginEmail.value,
					this.loginPassword.value,
					this.sessionCheck
				);
				this.displayMessage(
					"Utilizador autenticado com sucesso!",
					"#1e1c41"
				);

				// Wait 1 second before reloading, so the user can see the login success message
				setTimeout(() => {
					window.history.back;
				}, 100);
			} catch (e) {
				this.displayMessage(e, "orange");
			}
		});
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
