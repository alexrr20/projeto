export default class Posto {
	constructor(
		name,
		address,
		contact,
		website,
		availableTests,
		likes,
		rating
	) {
		this.name = name;
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
