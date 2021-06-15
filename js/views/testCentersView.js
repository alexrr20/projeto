import testCentersController from "../controllers/testCentersController.js";
import userController from "../controllers/userController.js";
import appointmentController from "../controllers/appointmentController.js";

export default class testCentersView {
	constructor() {
		this.testCentersController = new testCentersController();
		this.userController = new userController();
		this.appointmentController = new appointmentController();

		this.bindAddTestCenters();

		this.listItems = document.querySelectorAll(".info");

		/* POR ALGUMA RAZÃO NÃO FUNCIONA ASSIM
    this.btnGosto = document.querySelectorAll("#btnGosto")[0];*/

		this.bindShowInfo();
		this.inpFocus();
		this.addToggle();
		this.rangeSlide();
		this.search();
		this.initMap();
		this.addMarkers();
		this.markerList = [];
		this.addDropdown();
	}

	// Initialize and add the map
	initMap() {
		// The location of Porto
		const porto = { lat: 41.149566, lng: -8.610218 };
		// The map, centered at Porto
		window.map = new google.maps.Map(document.getElementById("map"), {
			zoom: 12,
			center: porto,
			streetViewControl: false,
			styles: [
				{
					elementType: "geometry",
					stylers: [
						{
							color: "#242f3e",
						},
					],
				},
				{
					elementType: "labels.text.fill",
					stylers: [
						{
							color: "#746855",
						},
					],
				},
				{
					elementType: "labels.text.stroke",
					stylers: [
						{
							color: "#242f3e",
						},
					],
				},
				{
					featureType: "administrative.locality",
					elementType: "labels.text.fill",
					stylers: [
						{
							color: "#d59563",
						},
					],
				},
				{
					featureType: "poi",
					elementType: "labels.text.fill",
					stylers: [
						{
							color: "#d59563",
						},
					],
				},
				{
					featureType: "poi.park",
					elementType: "geometry",
					stylers: [
						{
							color: "#263c3f",
						},
					],
				},
				{
					featureType: "poi.park",
					elementType: "labels.text.fill",
					stylers: [
						{
							color: "#6b9a76",
						},
					],
				},
				{
					featureType: "road",
					elementType: "geometry",
					stylers: [
						{
							color: "#38414e",
						},
					],
				},
				{
					featureType: "road",
					elementType: "geometry.stroke",
					stylers: [
						{
							color: "#212a37",
						},
					],
				},
				{
					featureType: "road",
					elementType: "labels.text.fill",
					stylers: [
						{
							color: "#9ca5b3",
						},
					],
				},
				{
					featureType: "road.highway",
					elementType: "geometry",
					stylers: [
						{
							color: "#746855",
						},
					],
				},
				{
					featureType: "road.highway",
					elementType: "geometry.stroke",
					stylers: [
						{
							color: "#1f2835",
						},
					],
				},
				{
					featureType: "road.highway",
					elementType: "labels.text.fill",
					stylers: [
						{
							color: "#f3d19c",
						},
					],
				},
				{
					featureType: "transit",
					elementType: "geometry",
					stylers: [
						{
							color: "#2f3948",
						},
					],
				},
				{
					featureType: "transit.station",
					elementType: "labels.text.fill",
					stylers: [
						{
							color: "#d59563",
						},
					],
				},
				{
					featureType: "water",
					elementType: "geometry",
					stylers: [
						{
							color: "#17263c",
						},
					],
				},
				{
					featureType: "water",
					elementType: "labels.text.fill",
					stylers: [
						{
							color: "#515c6d",
						},
					],
				},
				{
					featureType: "water",
					elementType: "labels.text.stroke",
					stylers: [
						{
							color: "#17263c",
						},
					],
				},
			],
		});

		infoWindow = new google.maps.InfoWindow();

		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition((position) => {
				const pos = {
					lat: position.coords.latitude,
					lng: position.coords.longitude,
				};
				infoWindow.setPosition(pos);
				infoWindow.setContent("Location found");
				infoWindow.open(map);
				map.setCenter(pos);
				// Add circle overlay and bind to marker
				window.circle = new google.maps.Circle({
					map: window.map,
					radius: 0, // 10 miles in metres
					fillColor: "#2cce6c",
				});
				window.circle.bindTo("center", infoWindow, "position");
			});
		}
	}

	addMarkers() {
		let testCenters = this.testCentersController.getTestCenters();

		testCenters.forEach((item, index) => {
			let location = item.Latlng.split(",");
			let Lat = parseFloat(location[0]);
			let lng = parseFloat(location[1]);
			let myLatlng = new google.maps.LatLng(Lat, lng);

			let contentString = `<div><h4>${item.testCenterName}</h4></div>`;
			let infowindow = new google.maps.InfoWindow({
				content: contentString,
			});

			let marker = new google.maps.Marker({
				position: myLatlng,
			});

			// To add the marker to the map, call setMap();
			marker.setMap(window.map);

			marker.addListener("click", () => {
				infowindow.open(window.map, marker);
			});
		});
	}

	addDropdown() {
		let inpOrdem = document.querySelectorAll("#inpOrdem")[0];
		let dropdown = document.querySelectorAll(".dropdownOrdem")[0];
		let dropdownList = document.querySelectorAll(".dropdownList2")[0];

		inpOrdem.addEventListener("focus", () => {
			dropdown.classList.replace("hidden2", "shown");
		});

		inpOrdem.addEventListener("focusout", () => {
			setTimeout(function () {
				dropdown.classList.replace("shown", "hidden2");
			}, 140);
		});

		for (let i = 0; i < dropdownList.childNodes.length; i++) {
			if (dropdownList.childNodes[i].nodeName == "LI") {
				dropdownList.childNodes[i].addEventListener("click", () => {
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

	showRankingLikes() {
		let sortedArray = this.testCentersController.findLikes();
		let testCenterName =
			document.querySelectorAll(".container2-1")[0].childNodes[3]
				.innerHTML;
		let testCenterInfo =
			this.testCentersController.getTestCenterInfo(testCenterName);
		for (let i = 0; i < 3; i++) {
			if (sortedArray[i].id == testCenterInfo.id) {
				let divContainer =
					document.querySelectorAll(".medalhasContainer")[0];
				let divMedalha = document.createElement("div");
				divMedalha.innerHTML = `<p><span class="bold">${
					i + 1
				}º</span> Lugar</p><p>Likes</p>`;
				divContainer.appendChild(divMedalha);
			}
		}
		console.log("none");
	}

	showRankingComments() {
		let sortedArray = this.testCentersController.findComments();
		let testCenterName =
			document.querySelectorAll(".container2-1")[0].childNodes[3]
				.innerHTML;
		let testCenterInfo =
			this.testCentersController.getTestCenterInfo(testCenterName);
		for (let i = 0; i < 3; i++) {
			if (sortedArray[i].id == testCenterInfo.id) {
				let divContainer =
					document.querySelectorAll(".medalhasContainer")[0];
				let divMedalha = document.createElement("div");
				divMedalha.innerHTML = `<p><span class="bold">${
					i + 1
				}º</span> Lugar</p><p>Comentários</p>`;
				divContainer.appendChild(divMedalha);
			}
		}
	}

	showRankingTestsDone() {
		let sortedArray = this.testCentersController.findTestsDone();
		let testCenterName =
			document.querySelectorAll(".container2-1")[0].childNodes[3]
				.innerHTML;
		let testCenterInfo =
			this.testCentersController.getTestCenterInfo(testCenterName);
		for (let i = 0; i < 3; i++) {
			if (sortedArray[i].id == testCenterInfo.id) {
				let divContainer =
					document.querySelectorAll(".medalhasContainer")[0];
				let divMedalha = document.createElement("div");
				divMedalha.innerHTML = `<p><span class="bold">${
					i + 1
				}º</span> Lugar</p><p>Testes Feitos</p>`;
				divContainer.appendChild(divMedalha);
			}
		}
	}

	addToggle() {
		document
			.querySelectorAll("#filtroToggle")[0]
			.addEventListener("click", () => {
				let panel = document.querySelectorAll(".filtros1")[0];
				if (panel.style.maxHeight) {
					panel.style.maxHeight = null;
					filtroToggle.innerHTML = "Mostrar";
				} else {
					panel.style.maxHeight = panel.scrollHeight + "px";
					filtroToggle.innerHTML = "Esconder";
				}
			});
	}

	rangeSlide() {
		["mousemove", "change"].forEach((evt) =>
			document.querySelectorAll(".range")[0].addEventListener(evt, () => {
				document.getElementById(
					"rangeValue"
				).innerHTML = `<span class="bold">${
					document.querySelectorAll(".range")[0].value
				}</span> Km`;
				let valueM =
					document.querySelectorAll(".range")[0].value * 1000;
				window.circle.setRadius(valueM);
				/*
				for (let i = 0; i < markerList.length; i++) {
					console.log(window.circle.distanceFrom(markerList[i]));
				}*/
			})
		);
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

	inpFocus() {
		document.querySelectorAll("#inpPosto")[0].focus();
	}

	bindAddAppointment() {
		let testCenterName =
			document.querySelectorAll(".container2-1")[0].childNodes[3]
				.innerHTML;
		document
			.querySelectorAll(".wrapper")[0]
			.addEventListener("click", () => {
				this.testCentersController.storeTempInfo(testCenterName);
				window.location.href = "../../html/marcacao.html";
			});
	}

	bindBtnAddComment() {
		document
			.querySelectorAll("#btnAddComment")[0]
			.addEventListener("click", () => {
				if (!this.userController.isLogged()) {
					this.displayMessage(
						"Necessita de iniciar sessão para adicionar um comentário",
						"rgb(240, 135, 55)"
					);
					return;
				}
				let commentToAdd =
					document.querySelectorAll("#addComentario")[0].value;
				let user = this.userController.getLoggedUser();
				let testCenterName =
					document.querySelectorAll(".container2-1")[0].childNodes[3]
						.innerHTML;
				let radios = document.querySelectorAll(".radioStar");
				for (let i = 0; i < radios.length; i++) {
					if (radios[i].checked) {
						var rating = i + 1;
					}
				}
				this.testCentersController.addComment(
					testCenterName,
					commentToAdd,
					user,
					rating
				);
				this.loadComments(testCenterName);
			});
	}

	likeType(testCenterName) {
		let testCenterInfo =
			this.testCentersController.getTestCenterInfo(testCenterName);
		if (this.userController.checkLike(testCenterInfo.id) === false) {
			document.querySelectorAll("#btnGosto")[0].className =
				"btnSecondary like";
			document.querySelectorAll(
				"#btnGosto"
			)[0].innerHTML = `<p id="likeP">Gosto</p><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-thumb-up" width="35" height="35" viewBox="0 0 24 24" stroke-width="2.1" stroke="#2cce6c" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M7 11v8a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1v-7a1 1 0 0 1 1 -1h3a4 4 0 0 0 4 -4v-1a2 2 0 0 1 4 0v5h3a2 2 0 0 1 2 2l-1 5a2 3 0 0 1 -2 2h-7a3 3 0 0 1 -3 -3" />
      </svg>`;
		} else {
			document.querySelectorAll("#btnGosto")[0].className =
				"btnSecondary dislike";
			document.querySelectorAll(
				"#btnGosto"
			)[0].innerHTML = `<p id="likeP">Remover Gosto</p><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-x" width="34" height="34" viewBox="0 0 24 24" stroke-width="2" stroke="rgb(240, 135, 55)" fill="none" stroke-linecap="round" stroke-linejoin="round">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>`;
		}
		return document.querySelectorAll("#btnGosto")[0];
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

	likeStars(testCenterName) {
		let testCenter =
			this.testCentersController.getTestCenterInfo(testCenterName);
		let ratingStars = document.querySelectorAll(".ratingStar");
		for (let i = 0; i < testCenter.rating; i++) {
			ratingStars[i].style.color = "#2cce6c";
		}
	}

	loadComments(testCenterName) {
		let testCenter =
			this.testCentersController.getTestCenterInfo(testCenterName);
		let commentsDiv = document.querySelectorAll(".comentariosContainer")[0];
		while (commentsDiv.firstChild) {
			commentsDiv.firstChild.remove();
		}
		for (let i = 0; i < testCenter.comments.length; i++) {
			let newComment = document.createElement("div");
			newComment.setAttribute("class", "comentario");
			newComment.innerHTML = `
            <img src="../img/user.svg" alt="user" class="comentarioIcon">
            <p class="comentarioUser"><span class="bold">${testCenter.comments[i].userComment}</span> diz</p>
            <p class="comentarioTexto"><span class="bold">"</span>${testCenter.comments[i].comment}<span class="bold">"</span></p>
          `;
			commentsDiv.appendChild(newComment);
		}
	}

	loadAvailableTests(testCenterName) {
		let testCenter =
			this.testCentersController.getTestCenterInfo(testCenterName);
		let stringContainer = document.querySelectorAll(
			".container2-1bottom"
		)[0];
		let testString = "Este posto realiza os seguintes testes: ";
		if (testCenter.availableTests.rapido == true) {
			testString += `<span class="bold"> Rápido </span>/`;
		}
		if (testCenter.availableTests.pcr == true) {
			testString += `<span class="bold"> PCR </span>/`;
		}
		if (testCenter.availableTests.serologico == true) {
			testString += `<span class="bold"> Serológico </span>/`;
		}
		if (testCenter.availableTests.anticorpos == true) {
			testString += `<span class="bold"> Anticorpos </span>/`;
		}
		testString = testString.slice(0, -1);
		let testStringHTML = document.createElement("p");
		testStringHTML.setAttribute("id", "pTestes");
		testStringHTML.innerHTML = `${testString}`;
		stringContainer.prepend(testStringHTML);
	}

	bindLike() {
		document
			.querySelectorAll("#btnGosto")[0]
			.addEventListener("click", () => {
				let testCenterName =
					document.querySelectorAll(".container2-1")[0].childNodes[3]
						.innerHTML;
				if (this.userController.isLogged()) {
					let testCenterInfo =
						this.testCentersController.getTestCenterInfo(
							testCenterName
						);
					this.userController.addLike(testCenterInfo.id);
					let newLikes = this.testCentersController.addLike(
						testCenterName,
						this.userController.checkLike(testCenterInfo.id)
					);
					console.log(newLikes);
					let likeCounter =
						document.querySelectorAll("#likeCounter")[0];
					likeCounter.innerHTML = `${newLikes}`;
					this.likeType(testCenterName);
				} else {
					this.displayMessage(
						"Necessita de iniciar sessão para adicionar um gosto",
						"rgb(240, 135, 55)"
					);
				}
			});
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
            <a href="#container2">
            <div class="info">
              <h5>${
					this.testCentersController.getTestCenters()[i]
						.testCenterName
				}</h5>
              <h6>${this.testCentersController.getTestCenters()[i].address}</h6>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-map-2 mapIcon" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#00d06f" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <line x1="18" y1="6" x2="18" y2="6.01" />
              <path d="M18 13l-3.5 -5a4 4 0 1 1 7 0l-3.5 5" />
              <polyline points="10.5 4.75 9 4 3 7 3 20 9 17 15 20 21 17 21 15" />
              <line x1="9" y1="4" x2="9" y2="17" />
              <line x1="15" y1="15" x2="15" y2="20" />
            </svg>
          </a>`;
			ul.appendChild(li);
		}
	}

	bindShowInfo() {
		for (let i = 0; i < this.listItems.length; i++) {
			this.listItems[i].addEventListener("click", () => {
				if (document.querySelectorAll("#container2").length != 0) {
					document.querySelectorAll("#container2")[0].remove();
				}
				let testCenterName =
					document.querySelectorAll(".info")[i].childNodes[1]
						.innerHTML;
				let testCenter =
					this.testCentersController.getTestCenterInfo(
						testCenterName
					);
				let main = document.querySelectorAll("main")[0];
				let newDiv = document.createElement("div");
				newDiv.setAttribute("id", "container2");
				newDiv.innerHTML = `        <div class="container2-1">
            <h3>Nome</h3>
            <h2>${testCenter.testCenterName}</h2>
            <div class="medalhas">
              <h3>Medalhas</h3>
			  <div class="medalhasContainer">
			  </div>
            </div>
            <div class="postoInfoContainer">
              <div class="postoInfo">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-map-pin iconInfo" width="20" height="20" viewBox="0 0 24 24" stroke-width="2" stroke="#2CCE6C" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                  <circle cx="12" cy="11" r="3" />
                  <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
                </svg>
                <div class="postoInfoText">
                  <h4>Morada</h4>
                  <p>${testCenter.address}</p>
                </div>
              </div>
              <div class="postoInfo">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-phone iconInfo" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.8" stroke="#2CCE6C" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                  <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                </svg>
                <div class="postoInfoText">
                  <h4>Contacto</h4>
                  <p>${testCenter.contact.email} / ${testCenter.contact.phone}</p>
                </div>
              </div>
              <div class="postoInfo">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-clock iconInfo" width="20" height="20" viewBox="0 0 24 24" stroke-width="2" stroke="#2CCE6C" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                  <circle cx="12" cy="12" r="9" />
                  <polyline points="12 7 12 12 15 15" />
                </svg>
                <div class="postoInfoText">
                  <h4>Horário</h4>
                  <p>${testCenter.openHours}</p>
                </div>
              </div>
              <div class="postoInfo">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-world iconInfo" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2CCE6C" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                  <circle cx="12" cy="12" r="9" />
                  <line x1="3.6" y1="9" x2="20.4" y2="9" />
                  <line x1="3.6" y1="15" x2="20.4" y2="15" />
                  <path d="M11.5 3a17 17 0 0 0 0 18" />
                  <path d="M12.5 3a17 17 0 0 1 0 18" />
                </svg>
                <div class="postoInfoText">
                  <h4>Website</h4>
                  <p>${testCenter.website}</p>
                </div>
              </div>
            </div>
            <div class="container2-1bottom">
            <div class="btnContainer">
              <div class="wrapper">
                <a class="cta" href="#">
                  <span>Marcar teste aqui</span>
                  <span>
                    <svg
                      width="30px"
                      height="30px"
                      viewBox="0 0 66 43"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                    >
                      <g
                        id="arrow"
                        stroke="none"
                        stroke-width="1"
                        fill="none"
                        fill-rule="evenodd"
                      >
                        <path
                          class="one"
                          d="M40.1543933,3.89485454 L43.9763149,0.139296592 C44.1708311,-0.0518420739 44.4826329,-0.0518571125 44.6771675,0.139262789 L65.6916134,20.7848311 C66.0855801,21.1718824 66.0911863,21.8050225 65.704135,22.1989893 C65.7000188,22.2031791 65.6958657,22.2073326 65.6916762,22.2114492 L44.677098,42.8607841 C44.4825957,43.0519059 44.1708242,43.0519358 43.9762853,42.8608513 L40.1545186,39.1069479 C39.9575152,38.9134427 39.9546793,38.5968729 40.1481845,38.3998695 C40.1502893,38.3977268 40.1524132,38.395603 40.1545562,38.3934985 L56.9937789,21.8567812 C57.1908028,21.6632968 57.193672,21.3467273 57.0001876,21.1497035 C56.9980647,21.1475418 56.9959223,21.1453995 56.9937605,21.1432767 L40.1545208,4.60825197 C39.9574869,4.41477773 39.9546013,4.09820839 40.1480756,3.90117456 C40.1501626,3.89904911 40.1522686,3.89694235 40.1543933,3.89485454 Z"
                          fill="#fff0d2"
                        ></path>
                        <path
                          class="two"
                          d="M20.1543933,3.89485454 L23.9763149,0.139296592 C24.1708311,-0.0518420739 24.4826329,-0.0518571125 24.6771675,0.139262789 L45.6916134,20.7848311 C46.0855801,21.1718824 46.0911863,21.8050225 45.704135,22.1989893 C45.7000188,22.2031791 45.6958657,22.2073326 45.6916762,22.2114492 L24.677098,42.8607841 C24.4825957,43.0519059 24.1708242,43.0519358 23.9762853,42.8608513 L20.1545186,39.1069479 C19.9575152,38.9134427 19.9546793,38.5968729 20.1481845,38.3998695 C20.1502893,38.3977268 20.1524132,38.395603 20.1545562,38.3934985 L36.9937789,21.8567812 C37.1908028,21.6632968 37.193672,21.3467273 37.0001876,21.1497035 C36.9980647,21.1475418 36.9959223,21.1453995 36.9937605,21.1432767 L20.1545208,4.60825197 C19.9574869,4.41477773 19.9546013,4.09820839 20.1480756,3.90117456 C20.1501626,3.89904911 20.1522686,3.89694235 20.1543933,3.89485454 Z"
                          fill="#fff0d2"
                        ></path>
                        <path
                          class="three"
                          d="M0.154393339,3.89485454 L3.97631488,0.139296592 C4.17083111,-0.0518420739 4.48263286,-0.0518571125 4.67716753,0.139262789 L25.6916134,20.7848311 C26.0855801,21.1718824 26.0911863,21.8050225 25.704135,22.1989893 C25.7000188,22.2031791 25.6958657,22.2073326 25.6916762,22.2114492 L4.67709797,42.8607841 C4.48259567,43.0519059 4.17082418,43.0519358 3.97628526,42.8608513 L0.154518591,39.1069479 C-0.0424848215,38.9134427 -0.0453206733,38.5968729 0.148184538,38.3998695 C0.150289256,38.3977268 0.152413239,38.395603 0.154556228,38.3934985 L16.9937789,21.8567812 C17.1908028,21.6632968 17.193672,21.3467273 17.0001876,21.1497035 C16.9980647,21.1475418 16.9959223,21.1453995 16.9937605,21.1432767 L0.15452076,4.60825197 C-0.0425130651,4.41477773 -0.0453986756,4.09820839 0.148075568,3.90117456 C0.150162624,3.89904911 0.152268631,3.89694235 0.154393339,3.89485454 Z"
                          fill="#fff0d2"
                        ></path>
                      </g>
                    </svg>
                  </span>
                </a>
              </div>
              <button id="btnGosto" class="btnSecondary"><p id="likeP">Gosto</p><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-thumb-up" width="35" height="35" viewBox="0 0 24 24" stroke-width="2.3" stroke="#2cce6c" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M7 11v8a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1v-7a1 1 0 0 1 1 -1h3a4 4 0 0 0 4 -4v-1a2 2 0 0 1 4 0v5h3a2 2 0 0 1 2 2l-1 5a2 3 0 0 1 -2 2h-7a3 3 0 0 1 -3 -3" />
              </svg></button>
            </div>
          </div>
        </div>
          </div>
          <div class="container2-2">
          <div class="avaliacoesContainer">
            <h3>Avaliações</h3>
            <div>
              <form class="rating ratingCima">
                <label>
                  <span class="icon ratingStar">★</span>
                  <span class="icon ratingStar">★</span>
                  <span class="icon ratingStar">★</span>
                  <span class="icon ratingStar">★</span>
                  <span class="icon ratingStar">★</span>
                </label>
              </form>
              <p><span class="bold" id="ratingCounter">${testCenter.rating}/5</span> Estrelas</p>
              <p><span class="bold" id="likeCounter">${testCenter.likes}</span> Gostos</p>
            </div>
          </div>
		  <div>
		  <h4 id="commentsHeader">Comentários</h4>
		  <div class="comentariosContainer">
          </div></div>
          <div class="addComentarioContainer">
            <h4>Deixar Avaliação</h4>
            <form class="addComentario">
              <div class="rating">
                <label>
                  <input class="radioStar" type="radio" name="stars" value="1" />
                  <span class="icon">★</span>
                </label>
                <label>
                  <input class="radioStar" type="radio" name="stars" value="2" />
                  <span class="icon">★</span>
                  <span class="icon">★</span>
                </label>
                <label>
                  <input class="radioStar" type="radio" name="stars" value="3" />
                  <span class="icon">★</span>
                  <span class="icon">★</span>
                  <span class="icon">★</span>   
                </label>
                <label>
                  <input class="radioStar" type="radio" name="stars" value="4" />
                  <span class="icon">★</span>
                  <span class="icon">★</span>
                  <span class="icon">★</span>
                  <span class="icon">★</span>
                </label>
                <label>
                  <input class="radioStar" type="radio" name="stars" value="5" />
                  <span class="icon">★</span>
                  <span class="icon">★</span>
                  <span class="icon">★</span>
                  <span class="icon">★</span>
                  <span class="icon">★</span>
                </label>
              </div>
              <div id="commentAddContainer">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-message-2" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="#1e1c41" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                  <path d="M12 20l-3 -3h-2a3 3 0 0 1 -3 -3v-6a3 3 0 0 1 3 -3h10a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3h-2l-3 3" />
                  <line x1="8" y1="9" x2="16" y2="9" />
                  <line x1="8" y1="13" x2="14" y2="13" />
                </svg>
                <input type="text" placeholder="Comentário" id="addComentario">
                <button type="button" id="btnAddComment" class="btnSecondary"><p>Adicionar Comentário</p><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circle-plus" width="30" height="30" viewBox="0 0 24 24" stroke-width="2" stroke="#2cce6c" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                  <circle cx="12" cy="12" r="9" />
                  <line x1="9" y1="12" x2="15" y2="12" />
                  <line x1="12" y1="9" x2="12" y2="15" />
                </svg></button>
              </div>
            </form>
          </div>
        </div>
`;
				main.appendChild(newDiv);
				console.log(this.likeType(testCenterName));
				this.bindLike();
				this.loadComments(testCenterName);
				this.loadAvailableTests(testCenterName);
				this.likeStars(testCenterName);
				this.bindBtnAddComment();
				this.bindAddAppointment();
				this.showRankingComments();
				this.showRankingLikes();
				this.showRankingTestsDone();
			});
		}
	}
}
