import Component from '@ember/component';

export default Component.extend({
	tagName: 'event-card',

	mouseEnter() {		
		this.$().css('transform', 'translateY(-.4em)');
		this.$().addClass('animate');
	},

	mouseLeave() {
		this.$().css('transform', 'translateY(0)');
		this.$().removeClass('animate');
	}
});
