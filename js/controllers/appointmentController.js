import appointmentModel from "../models/appointmentModel.js";

export default class appointmentController {
	constructor() {
		this.appointments = localStorage.appointments
			? JSON.parse(localStorage.appointments)
			: [];
	}

	newAppointment(user, testCenter, date, testType) {}
}
