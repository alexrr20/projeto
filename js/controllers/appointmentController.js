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

	storeTempInfo(testCenterName, testType, date) {
		let info = {
			testCenterName: testCenterName,
			testType: testType,
			date: date,
		};
		localStorage.setItem("tempAppointment", JSON.stringify(info));
	}

	getTempInfo() {
		return localStorage.getItem("tempAppointment") !== null
			? JSON.parse(localStorage.getItem("tempAppointment"))
			: null;
	}

	removeTemp() {
		localStorage.removeItem("tempAppointment");
	}
}
