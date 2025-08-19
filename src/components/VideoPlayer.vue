<template>
  <div>
  <button @click="setSpeed(0.5)">0.5x</button>
  <button @click="setSpeed(0.75)">0.75x</button>
  <button @click="setSpeed(1)">1x</button>
    <video ref="videoRef" controls width="640">
      <source src="/sample.mp4" type="video/mp4" />
    </video>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const videoRef = ref<HTMLVideoElement | null>(null)

function setSpeed(rate: number) {
  if (videoRef.value) videoRef.value.playbackRate = rate
}
</script>