<script setup lang="ts">
import { SvgAlbumIcon as AlbumIcon } from "#components";

defineProps(["albums", "selectedAlbum"]);
defineEmits(["onChangeAlbum"]);
</script>

<template>
  <CardListContainer>
    <CardListItem
      v-for="(album, index) in albums"
      :key="index"
      :title="album"
      :icon="AlbumIcon"
      :isActive="selectedAlbum === album"
      @click="$emit('onChangeAlbum', album)"
    />
  </CardListContainer>
</template>