export default class faqView {
	constructor() {
		this.accordion();
		this.addDropdown();
	}

	accordion() {
		let acc = document.getElementsByClassName("accordion");

		for (let i = 0; i < acc.length; i++) {
			acc[i].addEventListener("click", function () {
				this.classList.toggle("active");

				let panel = this.nextElementSibling;
				if (panel.style.maxHeight) {
					panel.style.maxHeight = null;
				} else {
					panel.style.maxHeight = panel.scrollHeight + "px";
				}
			});
		}
	}

	addDropdown() {
		let inpCategoria = document.querySelectorAll("#inpCategoria")[0];
		let dropdown = document.querySelectorAll(".dropdown")[0];
		let dropdownList = document.querySelectorAll(".dropdownList")[0];

		inpCategoria.addEventListener("focus", () => {
			dropdown.classList.replace("hidden", "shown");
		});

		inpCategoria.addEventListener("focusout", () => {
			setTimeout(function () {
				dropdown.classList.replace("shown", "hidden");
			}, 140);
		});

		for (let i = 0; i < dropdownList.childNodes.length; i++) {
			if (dropdownList.childNodes[i].nodeName == "LI") {
				dropdownList.childNodes[i].addEventListener("click", () => {
					console.log(i);
					if (i == 1) {
						window.location.href = "faq.html#resultHeaderTest";
					} else if (i == 3) {
						window.location.href = "faq.html#resultHeaderCOVID";
					} else if (i == 5) {
						window.location.href = "faq.html#resultHeaderViagem";
					} else if (i == 7) {
						window.location.href = "faq.html#resultHeaderTTT";
					}
				});
			}
		}
	}
}
