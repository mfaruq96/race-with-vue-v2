<template>
  <div v-if="isSelected">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "TabComponent",

  props: {
    isSelected: {
      type: Boolean,
    },
  },
};
</script>
