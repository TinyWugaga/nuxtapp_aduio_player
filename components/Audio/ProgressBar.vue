<script setup lang="ts">
const emit = defineEmits(["onMoveEnd"]);

const progressBar = ref<HTMLElement | null>(null);
const progressBarLength = ref(0);

const progressBarIsMoving = ref(false);
const onMoveProgressBar = (e: MouseEvent) => {
  const onMouseLeave = (event: MouseEvent) => {
    // const duration = player.value.state.duration;
    // onChangeCurrentTime(progressBarLength.value * duration);
    emit("onMoveEnd", progressBarLength.value);
    window.removeEventListener("mousemove", onMouseMove);
    progressBarIsMoving.value = false;
  };
  const onMouseMove = (event: MouseEvent) => {
    progressBarIsMoving.value = true;
    onChangeProgressBar(event);
    window.addEventListener("mouseup", onMouseLeave, { once: true });
  };

  if (!progressBarIsMoving.value) {
    window.addEventListener("mousemove", onMouseMove);
  }
};

const onChangeProgressBar = (e: MouseEvent) => {
  if (progressBar.value) {
    const changeOffsetX = e.offsetX;
    const progressBarWidth = progressBar.value.offsetWidth;

    const newProgressBarLength =
      Math.floor((changeOffsetX / progressBarWidth) * 1000) / 1000;
    setProgressBarLength(newProgressBarLength);
  }
};

const setProgressBarLength = (length: number) => {
  let newLength = length;
  if (newLength > 1) newLength = 1;
  if (newLength < 0) newLength = 0;
  progressBarLength.value = newLength;
  if (progressBar.value) {
    progressBar.value.setAttribute("style", `--progress:${newLength}`);
  }
};

defineExpose({ setProgressBarLength });
</script>

<template>
  <div
    class="ProgressBar relative w-full after:bg-primary-blue-dark after:rounded"
    ref="progressBar"
    @mousedown="onMoveProgressBar"
  >
    <div class="relative bg-primary-blue w-full h-2 rounded" />
  </div>
</template>

<style lang="scss">
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
</style>