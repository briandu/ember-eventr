import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { computed }  from '@ember/object';

export default Component.extend({
	tagName: 'top-nav',

	logoUrl: '/assets/eventr-logo.svg',

	userService: service('user'),

	actions: {
		setActive() {
			this.set('logoUrl', '/assets/eventr-logo-animated.gif');
		},

		setInactive() {
			this.set('logoUrl', '/assets/eventr-logo.svg');
		}
	}
});
