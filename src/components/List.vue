<template>
<div>
  <v-container>
    <v-layout text-center
              wrap>
      <v-expansion-panel>
        <v-expansion-panel-content v-for="(domain,i) in domains"
                                   :key="i">
          <template v-slot:header>
            <div>Item</div>
          </template>
          <v-card>
            <v-layout align-start
                      justify-start
                      row
                      fill-height>
              <v-flex xs12
                      sm6
                      md4
                      lg3 class="item">
                <v-list dense>
                  <template v-for="(port, i) in domain.ports">
                    <v-divider :key="'port_list_divider' + i"></v-divider>
                    <v-list-tile :key="'port' + i">
                      <v-list-tile-content>{{port.port}}</v-list-tile-content>
                      <v-list-tile-content class="align-end">{{port.prot_description}}</v-list-tile-content>
                    </v-list-tile>
                  </template>
                </v-list>
              </v-flex>
              <v-flex xs12
                      sm6
                      md4
                      lg3 class="item">
                <v-switch v-model="domain.power" :label="`Домен ${domain.power ? 'включен' : 'выключен'}.`"></v-switch>
              </v-flex>
            </v-layout>
          </v-card>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-layout>
  </v-container>
  <v-fab-transition>
      <v-btn
        color="#e6e6fa"
        fab
        fixed
        bottom
        right>
        <v-icon>add</v-icon>
      </v-btn>
    </v-fab-transition>
  </div>
</template>

<script>
export default {
  data: () => ({
    domains: [
      {
        ports: [
          {
            port: "1234",
            prot_description: "text about app"
          },
          {
            port: "1234",
            prot_description: "text about app"
          },
          {
            port: "1234",
            prot_description: "text about app"
          },
          {
            port: "1234",
            prot_description: "text about app"
          }
        ],
        power: true
      },
      {
        ports: [
          {
            port: "1234",
            prot_description: "text about app"
          },
          {
            port: "1234",
            prot_description: "text about app"
          },
          {
            port: "1234",
            prot_description: "text about app"
          },
          {
            port: "1234",
            prot_description: "text about app"
          }
        ],
        power: true
      }
    ]
  })
};
</script>

<style>
.item {
  min-height: 50px;
  min-width: 80px;
  margin: 10px;
}
</style>
