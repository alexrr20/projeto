export default class postoModel {
	constructor(
		testCenterName,
		address,
		contact,
		website,
		availableTests,
		likes,
		rating
	) {
		this.testCenterName = testCenterName;
		this.address = address;
		this.contact = {
			email: contact.email,
			phone: contact.phone,
		};
		this.website = website;
		this.availableTests = availableTests;
		this.likes = likes;
		this.rating = rating;
	}
}
