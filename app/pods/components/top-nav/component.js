import Component from '@ember/component';
import { inject as service } from '@ember/service';
import storage from 'ember-eventr/utils/storage';


export default Component.extend({
	tagName: 'top-nav',

	logoUrl: '/assets/eventr-logo.svg',
	panelActive: false,

	userService: service('user'),

	actions: {
		setActive() {
			this.set('logoUrl', '/assets/eventr-logo-animated.gif');
		},

		setInactive() {
			this.set('logoUrl', '/assets/eventr-logo.svg');
		},

    togglePanel() {
			this.toggleProperty('panelActive');
		},
		
    logout() {
			storage.set('user', {
				loggedIn: false
			})
    },
	}
});
