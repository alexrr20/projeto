export default class postoModel {
	constructor(
		id,
		testCenterName,
		address,
		contact,
		website,
		availableTests,
		openHours,
		likes,
		rating,
		comments,
		Latlng,
		testsMade
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
			rapido: availableTests.rapido,
			pcr: availableTests.pcr,
			serologico: availableTests.serologico,
			anticorpos: availableTests.anticorpos,
		};
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
		this.Latlng = Latlng;
		this.testsDone = testsDone;
	}
}
