<template>
  <v-app>
    <v-navigation-drawer app>
      <v-list class="pa-0">
        <v-list-tile avatar>
          <v-list-tile-avatar>
            <img src="https://randomuser.me/api/portraits/men/85.jpg">
          </v-list-tile-avatar>

          <v-list-tile-content>
            <v-list-tile-title>John Leider</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
      <v-list>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>Home</v-list-tile-title>
        </v-list-tile>

        <v-list-group
          prepend-icon="account_circle" >
          <v-list-tile slot="activator">
            <v-list-tile-title>Elements</v-list-tile-title>
          </v-list-tile>

          <v-list-group>
            <v-list-tile slot="activator">
              <v-list-tile-title @click="setElement(1)">Seats</v-list-tile-title>
            </v-list-tile>
          </v-list-group>
          <v-list-group>
            <v-list-tile slot="activator">
              <v-list-tile-title @click="setElement(2)">Stage</v-list-tile-title>
            </v-list-tile>
          </v-list-group>
          <v-list-group>
            <v-list-tile slot="activator">
              <v-list-tile-title @click="setElement(3)">Stair</v-list-tile-title>
            </v-list-tile>
          </v-list-group>
        </v-list-group>
        <v-list-group prepend-icon="account_circle">
          <v-list-tile slot="activator">
            <v-list-tile-title>Rotations</v-list-tile-title>
          </v-list-tile>

          <v-list-group no-action>
            <v-list-tile slot="activator">
              <v-list-tile-title>Opcion</v-list-tile-title>
            </v-list-tile>

          </v-list-group>

          <v-list-group no-action>
            <v-list-tile slot="activator">
              <v-list-tile-title>Opcion</v-list-tile-title>
            </v-list-tile>

            
          </v-list-group>
        </v-list-group>
        <v-list-group prepend-icon="account_circle">
          <v-list-tile slot="activator">
            <v-list-tile-title>Zone</v-list-tile-title>
          </v-list-tile>

          <v-list-group no-action>
            <v-list-tile slot="activator">
              <v-list-tile-title @click="setZone(0)">Regular</v-list-tile-title>
            </v-list-tile>
          </v-list-group>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Boletiman</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-content>
      <v-container fluid>
        <router-view :key="$route.path" :selected-element="selectedElement"></router-view>
      </v-container>
    </v-content>
    <v-footer app></v-footer>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data : function() {
    return {
      //
      zoneId: 0,
      elementId: 1,
      elements: [
        { id: 0, name: 'clear', color: 'white', icon: '' },
        { id: 1, name: 'seat', color: 'green', icon: 'event_seat' },
        { id: 2, name: 'stage', color: 'brown', icon: 'fullscreen' },
        { id: 3, name: 'stair', color: 'grey', icon: 'line_weight' }
      ],
      zones: [
        { id: 0, name: 'Regular', price: 1, color: '#fff' }
      ]
    }
  },
  mounted : function() {
    this.$root.$on('optchoosed', ($event) => {
      this.setElement($event.id);
    })
    this.$root.$on('optclear', ($event) => {
      this.setElement(0);
    })
  },
  methods : {
    setElement : function(id) {
      this.elementId = id;
    },
    setZone : function(id) {
      this.zoneId = id;
    }
  },
  computed : {
    selectedElement : function() {
      return this.elements[this.elementId];
    },
    selectedZone : function() {
      return this.zones[this.zoneId]
    }
  }
}
</script>
