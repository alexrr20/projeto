export default class postoModel {
	constructor(
		testCenterName,
		address,
		contact,
		website,
		availableTests,
		openHours,
		likes,
		rating,
		comments
	) {
		this.testCenterName = testCenterName;
		this.address = address;
		this.contact = {
			email: contact.email,
			phone: contact.phone,
		};
		this.website = website;
		this.availableTests = availableTests;
		this.openHours = openHours;
		this.likes = likes;
		this.rating = rating;
		this.comments = [
			{
				userComment: comments.userComment,
				comment: comments.comment,
				userRating: comments.userRating,
			},
		];
	}
}
