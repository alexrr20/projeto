import testCentersController from "../controllers/testCentersController.js";

export default class testCentersView {
	constructor() {
		this.testCentersController = new testCentersController();

		this.listItems = document.querySelectorAll(".info");
		this.bindShowInfo();
	}

	bindShowInfo() {
		for (let i = 0; i < this.listItems.length; i++) {
			this.listItems[i].addEventListener("click", () => {
				if (document.querySelectorAll("#container2").length != 0) {
					document.querySelectorAll("#container2")[0].remove();
				}
				let main = document.querySelectorAll("main")[0];
				let newDiv = document.createElement("div");
				newDiv.setAttribute("id", "container2");
				newDiv.innerHTML = `        <div class="container2-1">
            <h3>Nome</h3>
            <h2>NOME TESTE</h2>
            <div class="medalhas">
              <h3>Medalhas</h3>
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
                  <p>MORADA TESTE</p>
                </div>
              </div>
              <div class="postoInfo">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-phone iconInfo" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.8" stroke="#2CCE6C" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                  <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                </svg>
                <div class="postoInfoText">
                  <h4>Contacto</h4>
                  <p>CONTACTO TESTE</p>
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
                  <p>HORARIO TESTE</p>
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
                  <p>WEBSITE TESTE</p>
                </div>
              </div>
            </div>
          </div>
          <div class="container2-2">
            <h3>Avaliações</h3>
          </div>`;
				main.appendChild(newDiv);
			});
		}
	}
}
