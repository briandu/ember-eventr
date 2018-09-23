import Controller from '@ember/controller';
import { reads }  from '@ember/object/computed';
import $ from 'jquery';

export default Controller.extend({
	appController: Ember.inject.controller('application'),
	pageClasses: reads('appController.currentRouteName'),
});
