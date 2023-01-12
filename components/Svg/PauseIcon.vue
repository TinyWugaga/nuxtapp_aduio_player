<script setup>
defineProps({
  width: {
    type: String,
    default: "1em",
  },
  height: {
    type: String,
    default: "1em",
  },
});
</script>

<template>
  <svg
    :width="width"
    :height="height"
    viewBox="0 0 24 24"
  >
    <path
      fill="currentColor"
      d="M9 6a1 1 0 0 1 1 1v10a1 1 0 1 1-2 0V7a1 1 0 0 1 1-1zm6 0a1 1 0 0 1 1 1v10a1 1 0 1 1-2 0V7a1 1 0 0 1 1-1z"
    >
    </path>
  </svg>
</template>