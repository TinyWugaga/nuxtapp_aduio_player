<script setup lang="ts">
import { AlbumFolder, TrackFolder, AudioController } from "#components";

const items = [AlbumFolder, TrackFolder, AudioController];

const tracks = useTracks();
type Track = typeof tracks.value;

const selectedAlbum = ref("");
const selectedTrack = ref(0);

const albums = tracks.value.reduce<string[]>((acc, track) => {
  if (acc.includes(track.album)) return acc;
  return [...acc, track.album];
}, []);
const albumTracks = computed(() =>
  tracks.value.filter((track) => {
    return track.album === selectedAlbum.value;
  })
);
const currentTrack = computed(() =>
  tracks.value.find((track) => {
    return track.id === selectedTrack.value;
  })
);
const currentTrackOrder = computed(() =>
  albumTracks.value.findIndex((track) => {
    return track.id === selectedTrack.value;
  })
);

const onChangeAlbum = (name: string) => {
  selectedAlbum.value = name;
};
const onChangeTrackById = (trackId: number) => {
  selectedTrack.value = trackId;
};

const onChangeTrackByOrder = (order: number) => {
  if (order >= 0 && order < albumTracks.value.length)
    selectedTrack.value = albumTracks.value[order]?.id;
};
</script>

<template>
  <div class="Home w-full h-full flex px-16 py-9 ">
    <FolderContainer
      :items="items"
      class="grid-cols-[2fr_2fr_3fr] bg-primary-green drop-shadow-md"
    >
      <FolderItem
        v-for="(item, index) in items"
        :key="index"
        class="border-r-8 border-solid border-primary-green-dark"
      >
        <ClientOnly>
          <component
            :is="item"
            :selectedAlbum="selectedAlbum"
            :selectedTrack="selectedTrack"
            :albums="albums"
            :tracks="albumTracks"
            :currentTrack="currentTrack"
            @onChangeAlbum="onChangeAlbum"
            @onChangeTrack="onChangeTrackById"
            @onChangePrevTrack="() => onChangeTrackByOrder(currentTrackOrder - 1)"
            @onChangeNextTrack="() => onChangeTrackByOrder(currentTrackOrder + 1)"
          />
        </ClientOnly>
      </FolderItem>
    </FolderContainer>
  </div>
</template>