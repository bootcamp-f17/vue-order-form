// Define a custom filter called "currency"
Vue.filter('currency', function(value) {
  return '$' + value.toFixed(2);
});


var demo = new Vue({

  el: '#main',

  data: {
    services: [
      {
        name: 'Web Development',
        price: 300
      },
      {
        name: 'Design',
        price: 400
      },
      {
        name: 'Integration',
        price: 250
      },
      {
        name: 'Training',
        price: 220
      }

    ]

  },

  methods: {
    total: function() {

      var total = 0;


      return total;

    }

  }


});