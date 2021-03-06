import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return [
      {
        name: 'Bruno Mars 24K Magic',
        time: '7:00 PM',
        month: 'APR',
        day: 26,
        location: 'Toronto, Canada',
        imageUrl: '/assets/event-images/bruno-mars-24k-magic.jpg'
      }, {
        name: 'Veld',
        time: '7:00 PM',
        month: 'APR',
        day: 26,
        location: 'Toronto, Canada',
        imageUrl: '/assets/event-images/veld.jpg'
      }, {
        name: 'Waterfront',
        time: '7:00 PM',
        month: 'APR',
        day: 26,
        location: 'Toronto, Canada',
        imageUrl: '/assets/event-images/waterfront.jpg'
      }
    ]
  }
});
