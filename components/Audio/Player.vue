<script setup lang="ts">
import { onMounted, onUnmounted } from "vue";
import AudioPlayer from "~~/utils/AudioPlayer";

const props = defineProps(["track"]);

const audioPlayerContainer = ref<HTMLElement | null>(null);
const audio = ref<AudioPlayer | null>(null);

const state = reactive({
  isPlaying: false,
  currentTime: 0,
  duration: 0,
  progress: 0,
});

const updateAudioTime = () => {
  if (audio.value) {
    state.currentTime = audio.value.currentTime;
    state.duration = audio.value.duration;
    state.progress = audio.value.hadPlayed;
  }
};

const updateAudioState = () => {
  if (audio.value) {
    state.isPlaying = audio.value.isPlaying;
  }
};

const playAudio = () => {
  audio.value?.play();
  updateAudioState();
};
const pauseAudio = () => {
  audio.value?.pause();
  updateAudioState();
};
const setAudioCurrentTime = (time: number) => {
  audio.value?.setCurrentTime(time);
  updateAudioState();
};

const createAudio = (url: string) => {
  const container = audioPlayerContainer.value;
  if (container) {
    const newAudio = new AudioPlayer({
      url,
      dom: audioPlayerContainer.value as HTMLElement,
    });

    audio.value = newAudio;

    newAudio.element?.addEventListener("loadeddata", updateAudioTime);
    newAudio.element?.addEventListener("timeupdate", updateAudioTime);
  }
};
const removeAudio = () => {
  if (audio.value) {
    audio.value.element?.removeEventListener("loadeddata", updateAudioTime);
    audio.value.element?.removeEventListener("timeupdate", updateAudioTime);
    audio.value.destroy();
  }
};

onMounted(() => {
  createAudio(props.track.src);
});

onUnmounted(() => {
  removeAudio();
});

defineExpose({
  playAudio,
  pauseAudio,
  state,
  setAudioCurrentTime,
});
</script>

<template>
  <div ref="audioPlayerContainer" />
</template>