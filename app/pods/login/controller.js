import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import storage from 'ember-eventr/utils/storage';

export default Controller.extend({
	userService: service('user'),

	actions: {
		authenticate() {
			storage.set('user', {
				loggedIn: true
			})
			this.transitionToRoute('discover');
		}
	}
});
