import Component from '@ember/component';

export default Component.extend({
	tagName: 'event-card',

  // ----- Injected Services -----
	router: service(),

	mouseEnter() {		
		this.$().css('transform', 'translateY(-.4em)');
		this.$().addClass('animate');
	},

	mouseLeave() {
		this.$().css('transform', 'translateY(0)');
		this.$().removeClass('animate');
	},

	click() {
		this.transitionTo('discover');
	}
	
});
