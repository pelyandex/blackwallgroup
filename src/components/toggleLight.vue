<template>
    <div class="wrapper">
      <div class="toggle">
          <input class="toggle-input" type="checkbox" @click="click"/>
          <div class="toggle-bg"></div>
          <div class="toggle-switch" >
          <div class="toggle-switch-figure"></div>
          <div class="toggle-switch-figureAlt"></div>
          </div>
      </div>
    </div>
</template>

<script>
export default {
  methods: {
    click() {
      this.$emit('toggle');
    },
  },
};
</script>
<style lang="scss">
.wrapper {
  padding-top: 7%;
  text-align: center;
}
@mixin crater($top, $left, $size) {
  content: '';
  position: absolute;
  top: $top;
  left: $left;
  width: $size;
  height: $size;
  background-color: #EFEEDA;
  border-radius: 100%;
  border: 4px solid #DEE1C5;
}

@mixin cloudBubble($top, $right, $width, $height, $deg) {
  content: '';
  display: block;
  position: relative;
  top: $top;
  right: $right;
  width: $width;
  height: $height;
  border: 8px solid #D4D4D2;
  border-radius: 100%;
  border-right-color: transparent;
  border-bottom-color: transparent;
  transform: rotateZ($deg);
  background-color: #fff;
}
.toggle {
  position: relative;
  display: inline-block;
  width: 100px;
  margin-left: 100px;
  padding: 4px;
  border-radius: 40px;
}

.toggle:before,
.toggle:after {
  content: '';
  display: table;
}

.toggle:after {
  clear: both;
}

.toggle-bg {
  position: absolute;
  top: -4px;
  left: -4px;
  width: 100%;
  height: 100%;
  background-color:white;
  border-radius: 40px;
  border: 4px solid;
  transition: all .1s cubic-bezier(0.250, 0.460, 0.450, 0.940);
}

.toggle-input {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 1px solid red;
  border-radius: 40px;
  z-index: 2;
  opacity: 0;
}

.toggle-switch {
  position: relative;
  width: 40px;
  height: 40px;
  margin-left: 50px;
  background-image: url('../assets/shtrih.jpg');
  background-size: contain;
  border: 3px solid darkgray;
  border-radius: 50%;
  transition: all .1s cubic-bezier(0.250, 0.460, 0.450, 0.940);
}

.toggle-switch-figure {
  position: absolute;
  bottom: -14px;
  left: -50px;
  display: block;
  width: 80px;
  height: 30px;
  border: 8px solid #D4D4D2;
  border-radius: 20px;
  background-color: #fff;
  transform: scale(0.4);
  transition: all .12s cubic-bezier(0.250, 0.460, 0.450, 0.940);
  &:after {
    @include cloudBubble(-65px, -42px, 15px, 15px, 70deg);
  }
  &:before {
    @include cloudBubble(-25px, -10px, 30px, 30px, 30deg);
  }
}

.toggle-switch-figureAlt {
  @include crater(5px, 2px, 2px);

  box-shadow:
    42px -7px 0 -3px #FCFCFC,
    75px -10px 0 -3px #FCFCFC,
    54px 4px 0 -4px #FCFCFC,
    83px 7px 0 -2px #FCFCFC,
    63px 18px 0 -4px #FCFCFC,
    44px 28px 0 -2px #FCFCFC,
    78px 23px 0 -3px #FCFCFC;

  transition: all .12s cubic-bezier(0.250, 0.460, 0.450, 0.940);
  transform: scale(0);
}

.toggle-switch-figureAlt:before {
  @include crater(-6px, 18px, 7px);
}

.toggle-switch-figureAlt:after {
  @include crater(19px, 15px, 2px);
}

/////////////////////////////////////////////////
// Night State
/////////////////////////////////////////////////
.toggle-input:checked ~ .toggle-switch {
  margin-left: 0;
  box-shadow: 0 0 80px red,0 0 30px FireBrick,0 0 6px DarkRed;
  background-image: none;
border-color:#ff0093;
background-color:#80004a;
}

.toggle-input:checked ~ .toggle-bg {
  background-color:black;
}

.toggle-input:checked ~ .toggle-switch .toggle-switch-figure {
  margin-left: 40px;
  opacity: 0;
  transform: scale(0.1);
}

.toggle-input:checked ~ .toggle-switch .toggle-switch-figureAlt {
  transform: scale(1);
}
</style>
