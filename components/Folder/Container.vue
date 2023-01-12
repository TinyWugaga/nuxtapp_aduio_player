<template>
  <div class="FolderContainer relative w-full h-auto rounded-lg border-2 border-solid border-primary-green-dark grid">
    <slot />
  </div>
</template>

<style lang="scss">
.FolderContainer {
  > *:last-child {
    border-right: none;
  }
}
</style>