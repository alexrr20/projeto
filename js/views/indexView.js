import userController from "../controllers/userController.js";
import testCentersController from "../controllers/testCentersController.js";
import appointmentController from "../controllers/appointmentController.js";

export default class indexView {
	constructor() {
		this.testCentersController = new testCentersController();
		this.userController = new userController();

		this.btnSubmit = document.querySelectorAll(".search-item-container");
		this.bindBtnSubmit();
		this.addTestCenters();
		this.search();
		this.bindSelectItem();
		this.toggleDD();
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

	addTestCenters() {
		let ul = document.querySelectorAll(".dropdownList")[0];
		for (
			let i = 0;
			i < this.testCentersController.getTestCenters().length;
			i++
		) {
			let li = document.createElement("li");
			li.innerHTML = `              <h5>${
				this.testCentersController.getTestCenters()[i].testCenterName
			}</h5>
          <h6>${this.testCentersController.getTestCenters()[i].address}</h6>`;
			ul.appendChild(li);
		}
	}

	search() {
		let inpPosto = document.querySelectorAll(".si-1")[0];
		inpPosto.addEventListener("keyup", () => {
			let value = inpPosto.value.toUpperCase();
			let ul = document.querySelectorAll(".dropdownList")[0];
			let li = ul.getElementsByTagName("li");
			for (let i = 0; i < li.length; i++) {
				let h5 = li[i].getElementsByTagName("h5")[0];
				let txtValue = h5.textContent || h5.innerText;
				if (txtValue.toUpperCase().indexOf(value) > -1) {
					li[i].style.display = "";
				} else {
					li[i].style.display = "none";
				}
			}
		});
	}

	bindSelectItem() {
		let ul = document.querySelectorAll(".dropdownList");
		let inp = document.querySelectorAll(".search-item");

		for (let i = 0; i < ul[0].childNodes.length; i++) {
			ul[0].childNodes[i].addEventListener("click", () => {
				inp[0].value = ul[0].childNodes[i].childNodes[1].innerHTML;
			});
		}

		for (let i = 0; i < ul[1].childNodes.length; i++) {
			if (i == 1 || i == 3 || i == 5 || i == 7) {
				ul[1].childNodes[i].addEventListener("click", () => {
					if (i == 1) {
						inp[1].value = "Teste Rápido";
					} else if (i == 3) {
						inp[1].value = "Teste PCR";
					} else if (i == 5) {
						inp[1].value = "Teste Serológico";
					} else if (i == 7) {
						inp[1].value = "Teste de Anticorpos";
					}
				});
			}
		}
	}

	toggleDD() {
		let inp = document.querySelectorAll(".search-item");
		let dropdown = document.querySelectorAll(".dropdown")[0];
		let dropdown2 = document.querySelectorAll(".dropdown2")[0];

		inp[0].addEventListener("focus", () => {
			dropdown.classList.replace("hidden", "shown");
		});

		inp[0].addEventListener("focusout", () => {
			setTimeout(function () {
				dropdown.classList.replace("shown", "hidden");
			}, 140);
		});

		inp[1].addEventListener("focus", () => {
			dropdown2.classList.replace("hidden", "shown");
		});

		inp[1].addEventListener("focusout", () => {
			setTimeout(function () {
				dropdown2.classList.replace("shown", "hidden");
			}, 140);
		});
	}
}
