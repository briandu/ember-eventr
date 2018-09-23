import Route from '@ember/routing/route';

export default Route.extend({
	model() {
		return {
			eventInfo: {
				name: 'Bruno Mars 24K Magic',
				time: '7:00 PM',
				month: 'APR',
				day: 26,
				location: 'Toronto, Canada',
				imageUrl: '/assets/event-images/bruno-mars-24k-magic.jpg'
			},
			eventGroups: [
				{
					name: 'Party Animals',
					description: 'lorem ipsum',
					images: [
						`/assets/eventr-profiles/profile-${this.randomNum()}.jpeg`,
						`/assets/eventr-profiles/profile-${this.randomNum()}.jpeg`,
						`/assets/eventr-profiles/profile-${this.randomNum()}.jpeg`,
					]
				}, {
					name: "Let's Hang Out",
					description: 'lorem ipsum',
					images: [
						`/assets/eventr-profiles/profile-${this.randomNum()}.jpeg`,
						`/assets/eventr-profiles/profile-${this.randomNum()}.jpeg`,
						`/assets/eventr-profiles/profile-${this.randomNum()}.jpeg`,
					]
				}, {
					name: "What's up!",
					description: 'lorem ipsum',
					images: [
						`/assets/eventr-profiles/profile-${this.randomNum()}.jpeg`,
						`/assets/eventr-profiles/profile-${this.randomNum()}.jpeg`,
						`/assets/eventr-profiles/profile-${this.randomNum()}.jpeg`,
					]
				}
			]
		}
	},

	randomNum() {
		return Math.floor(Math.random() * 16) + 1 ;
	}
});
