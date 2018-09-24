import Service from '@ember/service';
import storage from 'ember-eventr/utils/storage';
import { computed }  from '@ember/object';

export default Service.extend({
	active: false,

	userLoggedIn: computed('active', function() {
		console.log('test');
		if (storage.get('user')) {
			return storage.get('user').loggedIn;
		}
	})
});
