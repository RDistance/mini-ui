<script setup lang="ts">
 // import Button from './components/button/Button.jsx';
 //import {Button} from 'shindou-ui';
  const onsubmit = () => {
    console.log(1111)
  }

</script>

<template>
  <div>
    <!-- <Button>123</Button> -->
    <SButton>123</SButton>
    <!-- <Button type="primary"  :disabled="true" size="large" :block="true" @click="onsubmit">按钮</Button> -->
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
