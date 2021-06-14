export default class alertView {
	constructor() {}
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
