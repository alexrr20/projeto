import userController from "../controllers/userController.js";

export default class navView {
	constructor() {
		this.userController = new userController();

		this.navButtons = document.querySelectorAll(".btnSubmit");
		this.btnTheme = document.querySelectorAll(".btnTheme")[0];
		this.imgLogo = document.querySelectorAll("#logo")[0];
		this.lightSVG = document.querySelectorAll(".lightSVG")[0];
		this.body = document.getElementsByTagName("body")[0];
		this.burger = document.querySelectorAll(".burger")[0];
		this.nav = document.querySelectorAll("#navbar")[0];

		this.bindBtnTheme();
		this.btnLoginChange();
		this.bindBtnBurger();
	}

	bindBtnBurger() {
		this.burger.addEventListener("click", () => {
			this.nav.classList.toggle("nav-active");
			if (this.nav.classList.contains("nav-active")) {
				for (child in this.burger.children) {
					this.burger.children[child].style.backgroundColor = "white";
				}
			} else {
				for (child in this.burger.children) {
					this.burger.children[child].style.backgroundColor =
						"#1abf5b";
				}
			}
		});
	}

	bindBtnTheme() {
		this.btnTheme.addEventListener("click", () => {
			this.body.classList.toggle("dark");
			this.imgLogo.src = "../../img/logo.svg";
		});

		this.btnTheme.addEventListener("mousedown", () => {
			this.lightSVG.style.visibility = "hidden";
		});

		this.btnTheme.addEventListener("mouseup", () => {
			this.lightSVG.style.visibility = "visible";
		});
	}

	btnLoginChange() {
		if (this.userController.isLogged()) {
			this.navButtons[1].innerHTML = "Logout";
			this.navButtons[1].addEventListener("click", () => {
				this.userController.logout();
			});
		}
	}
}
