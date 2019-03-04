<template>
<div>
  <v-container>
    <v-layout text-center
              wrap>
      <v-expansion-panel>
        <v-expansion-panel-content v-for="(domain,i) in domains"
                                   :key="i">
          <template v-slot:header>
            <div>
              <a :href="'http://' + domain.domain"
                 class="headline">{{domain.domain}} </a><var class="blockquote">{{domain.work_dir}}</var>
            </div>
          </template>
          <v-card>
            <v-divider />
            <v-layout wrap
                      row>
              <v-flex xs12
                      sm6
                      md4
                      lg3>
                <v-list dense>
                  <template v-for="(port, portName) in domain.port_range">
                    <v-divider v-if="Object.keys(domain.port_range)[0] !== portName" :key="'port_list_divider' + portName"></v-divider>
                    <v-list-tile :key="'port' + portName">
                      <v-list-tile-content>{{portName}}</v-list-tile-content>
                      <v-list-tile-content class="align-end">{{port}}</v-list-tile-content>
                    </v-list-tile>
                  </template>
                </v-list>
              </v-flex>
              <v-flex xs12
                      sm6
                      md4
                      lg3
                      class="item">
                <v-layout column
                          wrap
                          class="ml-4">
                  <v-flex xs12
                          sm6
                          md4
                          lg3
                          class="item ">
                    <v-switch v-model="domain.enabled"
                              class="pt-0 mt-1 "
                              @change="switchDomain($event, domain.prefix)"
                              :label="`Домен ${domain.enabled ? 'включен' : 'выключен'}.`"></v-switch>
                  </v-flex>
                  <v-flex xs12
                          sm6
                          md4
                          lg3
                      class="pr-2">
                    <v-textarea label="Конфиг"
                                v-model="domain.package_json_config"></v-textarea>
                  </v-flex>
                </v-layout>
              </v-flex>
              <v-flex d-flex
                      xs12
                      sm6
                      md4
                      lg3
                      offset-sm6
                      offset-md3
                      offset-lg3>
                <v-layout align-end
                          justify-end
                          row
                          fill-height>
                  <v-btn flat
                         icon
                         color="red">
                    <v-icon>delete</v-icon>
                  </v-btn>
                  <v-btn flat
                         icon
                         color="success">
                    <v-icon>save</v-icon>
                  </v-btn>
                </v-layout>
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
        prefix: "my",
        domain: "my.login.buhojmedved.ru",
        work_dir: "/home/login/www/my.login/",
        enabled: true,
        owner: "login",
        package_json_config: {},
        port_range: {
          backend: 8081,
          frontend: 8082,
          dev: 8083
        }
      }
    ]
  }),
  mounted() {
    var that = this;
    axios
      .get("/my/domains")
      .then(res => {
        that.domains = res.data;
      })
      .catch(() => {});
  },
  methods: {
    getPosrtName: function(aPorts, i) {
      return Object.keys(aPorts)[i];
    },
    switchDomain: function(oEvent, prefix) {
      var that = this;
      axios
        .patch("/my/domains", {
          prefix: prefix,
          switch: oEvent
        })
        .then(res => {
          // that.domains = res.data;
        })
        .catch(() => {});
    }
  }
};
</script>

<style>
.item,
.item > div {
  min-width: 180px;
}
</style>
