<template>
  <div>
    <video ref="videoRef" controls width="640">
      <source src="/sample.mp4" type="video/mp4" />
    </video>
    <div>
      <button @click="setSpeed(0.5)">0.5x</button>
      <button @click="setSpeed(0.75)">0.75x</button>
      <button @click="setSpeed(1)">1x</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
const videoRef = ref<HTMLVideoElement | null>(null)

function setSpeed(rate: number) {
  if (videoRef.value) videoRef.value.playbackRate = rate
}

function stepFrame(forward = true) {
  if (!videoRef.value) return
  const fps = 25 // This is an estimate
  videoRef.value.currentTime += (forward ? 1 : -1) / fps
}

function togglePlayback() {
  if (!videoRef.value) return
  if (videoRef.value.paused) {
    videoRef.value.play()
  } else {
    videoRef.value.pause()
  }
}

function handleKey(e: KeyboardEvent) {
  if (e.key === ',') stepFrame(false)
  if (e.key === '.') stepFrame(true)
  if (e.code === 'Space') {
    e.preventDefault()
    togglePlayback() 
  }
}

onMounted(() => window.addEventListener('keydown', handleKey))
onUnmounted(() => window.removeEventListener('keydown', handleKey))
</script>