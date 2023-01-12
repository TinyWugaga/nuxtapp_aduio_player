<template>
  <div class="ModalContent absolute top-14 left-0 w-full rounded-b-xl flex justify-center items-center bg-primary-green-dark/20">
    <slot />
  </div>
</template>

<style lang="scss">
.ModalContent {
  height: -webkit-fill-available;
}
</style>