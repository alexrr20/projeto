import appointmentController from "../controllers/appointmentController.js";
import testCentersController from "../controllers/testCentersController.js";
import userController from "../controllers/userController.js";

export default class newAppointmentView {
	constructor() {
		this.appointmentController = new appointmentController();
		this.testCentersController = new testCentersController();
		this.userController = new userController();

		this.testCenterImport();
		this.bindAddTestCenters();
		this.addDropdown();
		this.bindTypeButtons();
		this.bindAddAppointment();
		this.search();
	}

	bindAddAppointment() {
		let btnContinue = document.querySelectorAll("#btnContinue")[0];
		let inpTestCenter = document.querySelectorAll("#inpPosto")[0];
		let inpSchedule = document.querySelectorAll("#inpHorario")[0];
		let radio = document.getElementsByName("radio");

		btnContinue.addEventListener("click", () => {
			if (this.userController.isLogged()) {
				var user = this.userController.getLoggedUser();
			} else {
				this.displayMessage(
					"Necessita de iniciar sessão antes de agendar um teste",
					"rgb(240, 135, 55)"
				);
				return;
			}
			for (let i = 0; i < radio.length; i++) {
				if (radio[i].checked) {
					var radioSelected = radio[i].className;
				}
			}
			let testCenter = inpTestCenter.value;
			let testType =
				document.querySelectorAll(".selected")[0].childNodes[1]
					.childNodes[1].alt;
			let schedule = inpSchedule.value;
			this.appointmentController.newAppointment(
				user,
				testCenter,
				testType,
				schedule,
				radioSelected
			);
		});
	}

	bindTypeButtons() {
		let btnTipo = document.querySelectorAll(".btnTipo");
		let btnTipoList = Array.from(btnTipo);

		for (let i = 0; i < btnTipoList.length; i++) {
			btnTipoList[i].addEventListener("click", () => {
				if (btnTipoList[i].classList.contains("faded")) {
					btnTipoList[i].classList.remove("faded");
				}
				btnTipoList[i].classList.add("selected");
				let newArray = btnTipoList.slice();
				newArray.splice(i, 1);
				for (let x = 0; x < newArray.length; x++) {
					newArray[x].classList.add("faded");
					if (newArray[x].classList.contains("selected")) {
						newArray[x].classList.remove("selected");
					}
				}
			});
		}
	}

	addDropdown() {
		let inpPosto = document.querySelectorAll("#inpPosto")[0];
		let dropdown = document.querySelectorAll(".dropdown")[0];
		let dropdownList = document.querySelectorAll(".dropdownList")[0];

		inpPosto.addEventListener("focus", () => {
			dropdown.classList.replace("hidden", "shown");
		});

		inpPosto.addEventListener("focusout", () => {
			setTimeout(function () {
				dropdown.classList.replace("shown", "hidden");
			}, 100);
		});

		for (let i = 0; i < dropdownList.childNodes.length; i++) {
			if (dropdownList.childNodes[i].nodeName == "LI") {
				dropdownList.childNodes[i].addEventListener("click", () => {
					inpPosto.value =
						dropdownList.childNodes[i].childNodes[1].innerHTML;
				});
			}
		}
	}

	testCenterImport() {
		let testCenter = this.testCentersController.getTempInfo();
		let inpPosto = document.querySelectorAll("#inpPosto")[0];

		if (testCenter === null) {
			return;
		} else {
			inpPosto.value = testCenter;
		}
		this.testCentersController.removeTemp();
	}

	bindAddTestCenters() {
		let ul = document.querySelectorAll(".dropdownList")[0];

		for (
			let i = 0;
			i < this.testCentersController.getTestCenters().length;
			i++
		) {
			let li = document.createElement("li");
			li.innerHTML = `
            <h5>${
				this.testCentersController.getTestCenters()[i].testCenterName
			}</h5>
          <h6>${this.testCentersController.getTestCenters()[i].address}</h6>`;
			ul.appendChild(li);
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

	search() {
		let inpPosto = document.querySelectorAll("#inpPosto")[0];
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
}
