<script setup></script>

<template>
  <div class="flex flex-row w-screen h-screen">
    <div class="basis-1/4">
      <div id="info">Click the markers to show the label</div>
      <div id="markerLabel" class="hidden">
        <button id="closeButton">X</button>
        <div class="text" id="idNum"></div>
        <div class="text" id="magnitude"></div>
        <div class="text" id="coordinates"></div>
      </div>
    </div>
    <div class="basis-[75%]" id="scene-container"></div>
  </div>
</template>

<style scoped></style>
