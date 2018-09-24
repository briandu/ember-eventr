import Controller from '@ember/controller';
import { computed }  from '@ember/object';

export default Controller.extend({
	buttonText: 'GOING',

	profiles: computed(function() {
		let profiles = [];
		for (var i = 1; i < 17; i++) {
			profiles.push(`/assets/eventr-profiles/profile-${i}.jpeg`)
		}
		return profiles;
	}),

	actions: {
		toggleButton() {
			this.set('buttonText', this.buttonText === 'GOING' ? 'JOIN' : 'GOING')
		}
	}
});
