import Component from '@ember/component';

export default Component.extend({
  tagName: 'image-carousel',

  // ----- Attributes (Private) -----
  carousel: [
    {
      imageUrl: '/assets/image-carousel/dance-contemp.jpg',
      content: 'Get a true valuation of what your home is worth today.'
    },
    {
      imageUrl: '/assets/image-carousel/john-legend.jpg',
      content: 'Prepared by one of our experienced preferred agents with knowledge of your area.'
    },
    {
      imageUrl: '/assets/image-carousel/weeknd.jpg',
      content: 'No obligation or cost.'
    }
  ],
});
