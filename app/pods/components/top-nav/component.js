import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
	tagName: 'top-nav',

	logoUrl: '/assets/eventr-logo.svg',

	actions: {
		setActive() {
			this.set('logoUrl', '/assets/eventr-logo-animated.gif');
		},

		setInactive() {
			this.set('logoUrl', '/assets/eventr-logo.svg');
		}
	}
});
