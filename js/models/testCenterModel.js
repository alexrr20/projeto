export default class testCenterModel {
	constructor(
		id,
		testCenterName,
		address,
		contact,
		website,
		openHours,
		Latlng
	) {
		this.id = id;
		this.testCenterName = testCenterName;
		this.address = address;
		this.contact = {
			email: contact.email,
			phone: contact.phone,
		};
		this.website = website;
		this.availableTests = {
			rapido: true,
			pcr: true,
			serologico: true,
			anticorpos: true,
		};
		this.openHours = openHours;
		this.likes = 0;
		this.rating = 0;
		this.comments = [];
		this.Latlng = Latlng;
		this.testsDone = 0;
	}
}
