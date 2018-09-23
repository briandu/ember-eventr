import Component from '@ember/component';
import { computed }  from '@ember/object';

export default Component.extend({
	tagName: 'event-group-card',

	randomNumOfMembers: computed(function() {
		return Math.floor(Math.random() * 10) + 1 ;
	}),
});
