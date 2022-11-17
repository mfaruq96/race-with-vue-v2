<template>
  <div id="app">
    <NavbarComponent />
    <router-view />
  </div>
</template>

<script>
import NavbarComponent from "@/components/learn/NavbarComponent.vue";

export default {
  components: {
    NavbarComponent,
  },
};
</script>
