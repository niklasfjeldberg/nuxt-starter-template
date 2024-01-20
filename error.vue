<template>
  <div>
    <p>
      {{ error }}
    </p>
  </div>
</template>

<script setup lang="ts">
defineProps({
  error: {
    type: Object,
    default: null,
  },
});
</script>
