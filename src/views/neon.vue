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
  border: 1px solid;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 1%;
  border: none;
  font-family: "NEON";
  color:rgb(255, 0, 147);
  text-shadow: 0 0 80px red,0 0 30px FireBrick,0 0 6px DarkRed;
  font-weight: bold;
  font-size: 45px;
  @media screen and (min-width: 451px) {
    width: 500px;
    height: 500px;
  }
  @media screen and (max-width: 450px) {
      min-height: 300px;
      width: 85%;
  }
  .box {
    border-radius: 5%;
    border:2px solid;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 50px;
    cursor: pointer;
    &:hover {
      transform: scale(.95);
    }
  }
  #test {
background: radial-gradient(circle, rgba(181,12,12,0) 22%,
rgba(255,0,147,0.2123126769333743) 51%, rgba(0,0,0,0.5830991937873069) 87%);
  }
}

</style>
