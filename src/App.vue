<template>
    <div id="app">
        <pyatnashki />
    </div>
</template>

<script>
import pyatnashki from './components/pyatnashki.vue';

export default {
  name: 'app',
  components: {
    pyatnashki,
  },
};
</script>

<style lang="scss">
  body{
    outline: 1px solid;
    padding: 0;
    margin: 0;
  }
</style>
