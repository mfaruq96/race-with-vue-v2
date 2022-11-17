<template>
  <div class="home">
    <div class="row">
      <div class="col-lg-12">
        <div class="card">
          <div class="card-body">
            <p>TOKEN : {{ token }}</p>
            <button class="btn btn-sm btn-danger">Logout</button>
          </div>
        </div>
      </div>
    </div>
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "HomeView",

  components: {
    HelloWorld,
  },

  data() {
    return {
      token: localStorage.token,
    };
  },
};
</script>
