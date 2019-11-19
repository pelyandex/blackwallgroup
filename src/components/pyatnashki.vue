<template>
    <div class="pyatnashki">
      <p class="star">{{cost}}</p>
        <transition-group class="mainWindow" name="card" tag="div">
            <div class='box'
            :id='item'
            v-for="item in boxie"
            :class="{hole: item === 16}"
            :key="item"
            @click.once="interval"
            @click="clicked">{{item === 16 ? '' : item }}</div>
        </transition-group>
      <p class="star">{{timeParse}}</p>
    </div>
</template>

<script>
export default {
  data() {
    return {
    cost: 0,
    timeStart: 0,
    timeEnd: 0,
    different: null,
    boxie: [],
    array: [1, -1, 4, -4]
    };
   },
   computed: {
     minutes() { return Math.floor((this.different % 3600000) / 60000); },
     seconds() { return Math.floor((this.different % 60000) / 1000); },
     timeParse() {
       return (this.minutes < 10 ? '0' + this.minutes : this.minutes) + ":"
       + (this.seconds < 10 ? '0' + this.seconds : this.seconds);
     },
    },
  methods: {
     interval() {
     if (!this.cost){
       this.timeStart = new Date().getTime();
       this.timeEnd = new Date().getTime();
       setInterval(() => {
         this.timeEnd = new Date().getTime();
         this.different = this.timeEnd - this.timeStart;
      }, 1000);
     }
    },
    clicked($event) {
      const temp = Number($event.target.id);
      let xcoord = this.boxie.indexOf(16); // индекс дырки в массиве
      let tempcoord = this.boxie.indexOf(temp); // индекс числа на который кликнул в массиве
      if (this.array.some((el) => el === tempcoord - xcoord)) { // если разница есть в зарез. массиве
        let tempArr = this.boxie.concat(); // копирование массива
        [tempArr[xcoord],tempArr[tempcoord]] = [tempArr[tempcoord], tempArr[xcoord]];// деструктур. присваивание
        this.boxie = tempArr; // добавление в реактивность
        this.checkwin(); // проверка условия
      }
    },
    checkwin() {
      if (this.boxie.every((el,ind,arr) => ind === arr.length - 1 ? el : el + 1 === arr[ind + 1])){
        alert("You're winner");
      }
    },
  },
  mounted() {
    this.boxie = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].sort(() => Math.random() - 0.5)
  },
}
</script>


<style lang="scss" scoped>
@keyframes stared {
  0%{opacity: 0;}
  100%{opacity: 1;}
}
@keyframes starting {
  0%{transform: scale(4)}
  50%{transform: scale(.5)}
  100%{transform: scale(1)}
}
.pyatnashki {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 99%;
  display: flex;
  overflow: hidden;
  justify-content: space-around;
  font-family: 'Indie Flower', cursive;
    @media screen and (max-width: 450px) {
      flex-direction: column;
    }
    p {
      width: 40%;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 45px;
    }
    .star{
      opacity: 0;
      animation: stared 4s ease-out 2s forwards;
        @media screen and (max-width: 450px) {
          width: 100%;
        }
    }
    .mainWindow {
        border: 1px solid;
        margin: 0 auto;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-gap: 1%;
        border: none;
        animation: starting 2s ease forwards;
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
            font-size: 40px;
            cursor: pointer;
                &:hover {
                    transform: scale(.95);
                }
        }
        .hole {
            background-image: url('../assets/shtrih.jpg');
            background-size: cover;
        }
        .card-move {
            transition: all 0.3s;
        }
    }
  }
</style>
