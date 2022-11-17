<template>
  <div>
    <h3>Login</h3>
    <form @submit.prevent="submit">
      {{ form }}
      <div>
        <label for="email" class="mr-3">Email</label>
        <input type="text" name="email" id="email" v-model="form.email" />
      </div>
      <div>
        <label for="password" class="mr-3">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          v-model="form.password"
        />
      </div>
      <div>
        <button type="submit" class="btn btn-sm btn-primary">Sign In</button>
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
    };
  },

  methods: {
    ...mapActions({
      signIn: "auth/signIn",
    }),

    submit() {
      this.signIn(this.form)
        .then(() => {
          this.$router.push("/learn/dashboard");
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
};
</script>
