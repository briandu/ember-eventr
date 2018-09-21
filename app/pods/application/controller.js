import Controller from '@ember/controller';
import { computed }  from '@ember/object';
import { reads }  from '@ember/object/computed';

export default Controller.extend({
	appController: Ember.inject.controller('application'),
	pageClasses: reads('appController.currentRouteName'),
});
