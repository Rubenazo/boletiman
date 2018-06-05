var app = new Vue({
  el: '#app',
  data: {
    x: 10,
    y: 10,
    elements: [
      { id: 0, name: 'clear', color: 'white', icon: '' },
      { id: 1, name: 'seat', color: 'green', icon: 'event_seat' },
      { id: 2, name: 'stage', color: 'brown', icon: 'fullscreen' },
      { id: 3, name: 'stair', color: 'grey', icon: 'line_weight' }
    ],
    zones: [
      { id: 0, name: 'Regular', price: 1, color: '#fff' }
    ],
    elementId: 1,
    rotation: 0,
    zoneId: 0,
    newZone: {
      name: '',
      price: '',
      color: '#1e88e5'
    }
  },
  computed: {
    element: function() {
      return this.elements[this.elementId];
    },
    zone: function() {
      return this.zones[this.zoneId];
    },
    stage: function() {
      var stage = [];
      for (let i = 0; i < this.y; i++) {
        stage.push([]);
        for (let j = 0; j < this.x; j++) {
          stage[i].push({});
        }
      }
      return stage;
    }
  },
  methods: {
    ticktrInit: function() {
      if (this.x && this.y) {
        $('.tabs').tabs('select', 'ticktr');
      }
    },

    putSeat: function(td) {
      // small delay to prevent crash between the inserted element and the mouseover binding
      setTimeout(function() {
        td.html(app.element.id == 0 ? '' : '<i class="material-icons">' + app.element.icon + '</i>');
        td.find('i').addClass(app.element.color + '-text');
        td.find('i').addClass('rot' + app.rotation);
        if (app.elementId == 1) {
          td.css({background: app.zone.color});
          td.find('i').addClass('seat');
        } else {
          td.css({background: '#fff'});
        }
        app.stage[td.data('x')][td.data('y')] = {
          element: app.elementId,
          rotation: app.rotation,
          zone: app.elementId == 1 ? app.zoneId : 0
        };
      }, 10);
    },

    addZone: function() {
      if (this.newZone.name && this.newZone.price) {
        this.zones.push({
          id: this.zones.length,
          name: this.newZone.name,
          price: this.newZone.price,
          color: this.newZone.color,
        });
        this.newZone.name = '';
        this.newZone.price = '';
      }
    }
  }
});
