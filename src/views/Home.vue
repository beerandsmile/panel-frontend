<template>
  <v-app>
     <v-toolbar color="#e6e6fa">
      <v-toolbar-title>Title</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn icon to="login"><v-icon>exit_to_app</v-icon></v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
  export default {
  }
</script>
