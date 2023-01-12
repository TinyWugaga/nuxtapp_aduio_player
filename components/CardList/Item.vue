<script setup lang="ts">
withDefaults(
  defineProps<{
    title: string;
    icon: object;
    isActive?: boolean;
  }>(),
  {
    isActive: false,
  }
);
</script>

<template>
  <div
    class="CardListItem relative w-full border-b-2 border-solid border-primary-green-dark text-typography-dark hover:text-white hover:bg-blend-darken hover:bg-primary-green-dark/50"
    :class="isActive ? 'bg-primary-green-dark/25': ''"
  >
    <div class="px-6 flex items-center py-6 gap-4 font-Nerko text-2xl">
      <component
        v-if="icon"
        :is="icon"
      />
      <p>{{title}}</p>
    </div>
  </div>
</template>