import Component from '@ember/component';
import { inject as service } from '@ember/service';
import storage from 'ember-eventr/utils/storage';
import { computed } from '@ember/object';
import { reads }  from '@ember/object/computed';


export default Component.extend({
	tagName: 'top-nav',

	logoUrl: '/assets/eventr-logo.svg',
	panelActive: false,

	userService: service('user'),

	isLoggedIn: reads('userService.active'),

  click(event) {
		if (!this.$(event.target).hasClass('panel')) {
			console.log('test');
		}
	},

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
			this.toggleProperty('panelActive');
			this.set('userService.active', false);
			this.get('router').transitionTo('event');
    },
	}
});
