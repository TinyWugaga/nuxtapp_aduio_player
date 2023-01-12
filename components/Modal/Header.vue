<script setup>
defineProps(["title"]);
</script>

<template>
  <div class="ModalHeader absolute top-0 left-0 w-full h-14 rounded-t-xl flex justify-center items-center bg-primary-green-dark">
    <div class="ModalHeader__Buttons absolute top-4 left-4 flex gap-3">
      <p class="w-5 h-5 bg-slate-300 rounded-full"></p>
      <p class="w-5 h-5 bg-slate-300 rounded-full"></p>
      <p class="w-5 h-5 bg-slate-300 rounded-full"></p>
    </div>
    <h1 class="ModalHeader__Title relative w-full text-center text-typography-light font-Nerko text-4xl">
      <span>{{title}}</span>
    </h1>
  </div>
</template>