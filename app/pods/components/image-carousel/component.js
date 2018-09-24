import Component from '@ember/component';
import $ from 'jquery';

export default Component.extend({
	tagName: 'image-carousel',

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
      title: 'The Weeknd'
    }
	]
});
