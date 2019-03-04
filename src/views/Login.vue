<template>
  <v-form class="form"
          ref="form"
          v-model="valid"
          lazy-validation>
    <v-layout align-center
              justify-center
              column
              fill-height>
      <v-flex xs12
              sm6
              class="inputs">
        <v-text-field v-model="login"
                      :rules="[rules.required, rules.min3]"
                      label="Login"
                      required></v-text-field>
      </v-flex>
      <v-flex xs12
              sm12
              class="inputs">
        <v-text-field v-model="password"
                      :rules="[rules.required, rules.min3]"
                      type="password"
                      required
                      label="Password"></v-text-field>
      </v-flex>
      <v-flex xs12
              sm10
              class="inputs">
        <center>
          <v-btn small
                 block
                 outline
                 @click="logining"
                 color="green">Log In</v-btn>
        </center>
      </v-flex>
    </v-layout>
  </v-form>
</template>

<script>
import router from "../router.js";
export default {
  data: () => ({
    login: "Admin",
    password: "Q7gH9E1ljKGf/",
    rules: {
      required: value => !!value || "Required.",
      min3: v => v.length >= 3 || "Min 3 characters",
      emailMatch: () => "The email and password you entered don't match"
    },
    valid: true
  }),
  methods: {
    logining: function() {
      if (this.$refs.form.validate()) {
        axios
          .post("/login", {
            username: this.login,
            password: this.password
          })
          .then(res => {
            axios.defaults.headers.common["token"] = res.data.token;
            localStorage.setItem('token', res.data.token)
            router.push("main");
          })
          .catch();
      }
    }
  }
};
</script>

<style>
.inputs {
  width: 200px;
  max-height: 80px;
}
.form {
  height: 100%;
}
</style>
