<script setup lang="ts">
import { AudioPlayer, AudioProgressBar } from "#components";
import { watchEffect } from "vue";

defineProps(["currentTrack"]);
defineEmits(["onChangePrevTrack", "onChangeNextTrack"]);

const player = ref<typeof AudioPlayer | null>(null);
const progressBar = ref<typeof AudioProgressBar | null>(null);

watchEffect(() => {
  if (player.value && progressBar.value) {
    !player.value.state.isPlaying &&
      progressBar.value.setProgressBarLength(player.value.state.progress);
  }
});

const onChangeProgressBar = (newProgressBarLength: number) => {
  if (player.value) {
    const duration = player.value.state.duration;
    player.value.setAudioCurrentTime(newProgressBarLength * duration);
  }
};
</script>

<template>
  <div
    v-if="currentTrack"
    class="AudioController relative w-full h-full p-8 flex flex-col justify-center items-center gap-5"
  >
    <ClientOnly>
      <AudioPlayer
        ref="player"
        :key="currentTrack?.id || 0"
        :track="currentTrack"
      />
    </ClientOnly>
    <h3 class="font-Nerko text-2xl"> {{ currentTrack.name }}</h3>
    <AudioProgressBar
      ref="progressBar"
      @onMoveEnd="onChangeProgressBar"
    />
    <div
      v-if="player"
      class="ControlBar flex justify-center items-center gap-10"
    >
      <SvgPlayPrevIcon
        width="32px"
        height="32px"
        @click="$emit('onChangePrevTrack')"
      />
      <SvgPlayIcon
        v-if="!player.state.isPlaying"
        @click="player.playAudio"
        width="48px"
        height="48px"
      />
      <SvgPauseIcon
        v-else
        @click="player.pauseAudio"
        width="48px"
        height="48px"
      />
      <SvgPlayNextIcon
        width="32px"
        height="32px"
        @click="$emit('onChangeNextTrack')"
      />
    </div>
  </div>
</template>

<style lang="scss">
.AudioController {
  max-width: 640px;

  .ProgressBar {
    &::after {
      content: "";

      position: absolute;
      top: 0;
      left: 0;

      width: calc(var(--progress, 0) * 100%);
      height: 100%;
    }
  }

  .ControlBar {
    svg {
      color: inherit;
    }
  }
}
</style>