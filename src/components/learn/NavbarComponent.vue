<template>
  <div>
    <div class="row">
      <div class="col-lg-12">
        <div class="card">
          <div class="card-body">
            <span class="mr-4">
              <router-link to="/learn/home">Home</router-link>
            </span>
            <template v-if="authenticated">
              <span class="mr-4"> {{ user.name }} </span>
              <span class="mr-4">
                <router-link to="/learn/dashboard">Dashboard</router-link>
              </span>

              <span class="mr-4">
                <a href="#" @click.prevent="signOut">Sign Out</a>
              </span>
            </template>
            <template v-else>
              <span class="mr-4">
                <router-link to="/learn/login">Sign In</router-link>
              </span>
            </template>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  computed: {
    ...mapGetters({
      authenticated: "auth/authenticated",
      user: "auth/user",
    }),
  },

  methods: {
    ...mapActions({
      signOutAction: "auth/signOut",
    }),

    signOut() {
      this.signOutAction().then(() => {
        this.$router.push("/learn/home");
      });
    },
  },
};
</script>
