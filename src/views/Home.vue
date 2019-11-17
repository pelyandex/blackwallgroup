<template>
  <div class="mainWindow">
    <div class='box'
    :id='item'
    v-for="item in boxie"
    :key="item"
    v-on:click="clicked">{{item === 'test' ? '' : item }}</div>
  </div>
</template>

<script>

export default {
  props: ['boxie'],
  methods: {
    clicked($event) {
      this.$emit('clicked', $event);
    },
  },
};
</script>

<style lang="scss" scoped>
@keyframes started {
  0%{transform: scale(4)}
  50%{transform: scale(.5)}
  100%{transform: scale(1)}
}
.mainWindow {
  width: 500px;
  height: 500px;
  border: 1px solid;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 1%;
  border: none;
  animation: started 2s ease forwards;
  .box {
    border-radius: 5%;
    border:2px solid;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 35px;
    cursor: pointer;
    &:hover {
      transform: scale(.95);
    }
  }
  #test {
    background-image: url('../assets/shtrih.jpg');
    background-size: cover;
  }
}

</style>
