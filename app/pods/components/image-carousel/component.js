import Component from '@ember/component';
import $ from 'jquery';

export default Component.extend({
	tagName: 'image-carousel',
	
	currentImage: 2,

  // ----- Attributes (Private) -----
  carousel: [
    {
      imageUrl: '/assets/image-carousel/dance-contemp.jpg',
      title: 'Contemporary Love'
    },
    {
      imageUrl: '/assets/image-carousel/john-legend.jpg',
      title: 'John Legend: Darkness and Light'
    },
    {
      imageUrl: '/assets/image-carousel/weeknd.jpg',
      title: 'No obligation or cost.'
    }
	],
	
	actions: {
		prevImage() {
			const currentImage = this.currentImage;
			console.log(currentImage);
			if (currentImage === 2) {
				$('.carousel').css('transform', 'translateX(-80%)');
				this.decrementProperty('currentImage')
			} else if (currentImage === 3) {
				$('.carousel').css('transform', 'translateX(0)');
				this.decrementProperty('currentImage')
			}
		},
		
		nextImage() {
			const currentImage = this.currentImage;
			console.log(currentImage);
			if (currentImage === 1) {
				$('.carousel').css('transform', 'translateX(0)');
				this.incrementProperty('currentImage');
			} else if (currentImage === 2) {
				$('.carousel').css('transform', 'translateX(80%)');
				this.incrementProperty('currentImage');
			} else {
				$('.carousel').css('transform', 'translateX(-80%)');
				this.incrementProperty('currentImage');
			}
		}
	}
});
