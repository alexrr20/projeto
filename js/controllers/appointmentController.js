import appointmentModel from "../models/appointmentModel.js";

export default class appointmentController {
	constructor() {
		this.appointments = localStorage.appointments
			? JSON.parse(localStorage.appointments)
			: [];
	}

	newAppointment(user, testCenter, testType, schedule, payment) {
		const newId =
			this.appointments.length > 0
				? this.appointments[this.appointments.length - 1].id + 1
				: 1;
		this.appointments.push(
			new appointmentModel(
				newId,
				user,
				testCenter,
				schedule,
				testType,
				payment
			)
		);
		localStorage.setItem("appointments", JSON.stringify(this.appointments));
	}

	storeTempInfo(testCenterName) {
		localStorage.setItem("tempAppointment", testCenterName);
	}

	getTempInfo() {
		return localStorage.getItem("tempAppointment") !== null
			? localStorage.getItem("tempAppointment")
			: null;
	}
}
