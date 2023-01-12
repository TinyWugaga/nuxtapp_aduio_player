<script setup lang="ts">
import { SvgMusicIcon as MusicIcon } from "#components";

defineProps(["tracks", "selectedAlbum", "selectedTrack"]);
defineEmits(["onChangeTrack"]);
</script>

<template>
  <CardListContainer>
    <CardListItem
      v-for="track in tracks"
      :key="track.id"
      :title="track.name"
      :icon="MusicIcon"
      :isActive="selectedTrack === track.id"
      @click="$emit('onChangeTrack', track.id)"
    />
  </CardListContainer>
</template>