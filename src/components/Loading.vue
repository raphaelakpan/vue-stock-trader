<template>
  <div>
    <button class="button is-primary is-loading is-large overlay">Load</button>
  </div>
</template>

<style scoped>
  .overlay {
    position: fixed;
    display: block;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0,0,0,0.5);
    z-index: 2;
    cursor: pointer;
  }
</style>
