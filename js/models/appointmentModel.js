export default class appointmentModel {
	constructor(id, user, testCenter, date, testType, payment) {
		this.id = id;
		this.user = user;
		this.testCenter = testCenter;
		this.date = date;
		this.testType = testType;
		this.payment = payment;
	}
}
