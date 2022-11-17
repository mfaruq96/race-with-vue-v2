<template>
  <div>
    <ul class="nav nav-tabs shadow-sm">
      <li
        v-for="tab in tabs"
        :key="tab"
        class="nav-item bg-light border btn btn-sm"
      >
        <a
          class="nav-link"
          :class="{ active: tab === selected }"
          @click="setTab(tab)"
        >
          {{ tab }}
        </a>
      </li>
    </ul>
    <slot></slot>
  </div>
</template>

<script>
import $ from "jquery";

export default {
  name: "TabNavComponent",

  props: {
    tabs: {
      type: Array,
      require: true,
    },
    selected: {
      type: String,
      require: true,
    },
  },

  methods: {
    setTab(tab) {
      this.$emit("selected", tab);
      $(document).ready(function () {
        $("#dataTable").DataTable();
      });
    },
  },
};
</script>

<style></style>
