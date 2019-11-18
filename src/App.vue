<template>
    <div id="app">
      <p class="star" :class="{timeOfTheDay:!timeOfTheDay}">{{cost}}</p>
      <router-view
      @clicked.once='interval'
      @clicked='clicked'
      :boxie='boxie'/>
      <p class="star" :class="{timeOfTheDay:!timeOfTheDay}">{{timeParse}}</p>
      <toggleLight id='toggleLight' class="star" @toggle='toggle'/>
    </div>
</template>

<script>
import toggleLight from './components/toggleLight.vue';
import './assets/fonts/fonts.css';

export default {
  name: 'app',
  data() {
    return {
      cost: 0,
      timeStart: 0,
      timeEnd: 0,
      different: null,
      boxie: [],
      gameOver: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 'test'],
      timeOfTheDay: true,
    };
  },
  computed: {
    /*eslint-disable */
    //расчет времени
    minutes() { return Math.floor((this.different % 3.6e6) / 6e4); },
    seconds() { return Math.floor((this.different % 6e4) / 1000); },
    timeParse() {
      return (this.minutes < 10 ? '0' + this.minutes : this.minutes) + ":"
      + (this.seconds < 10 ? '0' + this.seconds : this.seconds);
    },
    //расчет крайних координат после каждого хода
    xcoord() { return this.boxie.indexOf('test'); },
    leftClick() { return this.xcoord - 1; },
    rightClick() { return this.xcoord + 1; },
    topClick() { return this.xcoord - 4; },
    bottomClick() { return this.xcoord + 4; },
  },
  components: {
    toggleLight,
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
      /* eslint-disable */
      let temp = Number($event.target.id);
      if (temp !== 'test' && temp === this.boxie[this.rightClick] || temp === this.boxie[this.leftClick] || temp === this.boxie[this.bottomClick] || temp === this.boxie[this.topClick]) {
        let tempArr = this.boxie.concat(); // копирую прошлый массив для послед. модификаций
        this.cost = this.cost + 1; // увеличиваю счетчик клика
        // Блок оптимизации отрисовки анимаций
        $event.target.style.transitionProperty= 'transform';
        $event.target.style.transitionDuration= '.3s';
        document.getElementById('test').style.transitionProperty= 'transform';
        document.getElementById('test').style.transitionDuration= '.3s';
        // Конец блока
        // Блок анимаций
        switch(temp){
          case (this.boxie[this.leftClick]):
            $event.target.style.transform = 'translateX(104%)';
            document.getElementById('test').style.transform = 'translateX(-104%)';
            tempArr[this.leftClick] = 'test';
            tempArr[this.leftClick + 1] = temp;
          break;
          case(this.boxie[this.rightClick]):
            $event.target.style.transform = 'translateX(-104%)';
            document.getElementById('test').style.transform = 'translateX(104%)';
            tempArr[this.rightClick] = 'test';
            tempArr[this.rightClick - 1] = temp;
          break;
          case(this.boxie[this.topClick]):
            $event.target.style.transform = 'translateY(104%)';
            document.getElementById('test').style.transform = 'translateY(-104%)';
            tempArr[this.topClick] = 'test';
            tempArr[this.topClick + 4] = temp;
          break;
          case(this.boxie[this.bottomClick]):
            $event.target.style.transform = 'translateY(-104%)';
            document.getElementById('test').style.transform = 'translateY(104%)';
            tempArr[this.bottomClick] = 'test';
            tempArr[this.bottomClick - 4] = temp;
          break;
        }
        //
        setTimeout(($event) => {
        // Блок оптимизации и остановки текущих анимаций
          $event.target.style.transitionProperty= '';
          $event.target.style.transitionDuration= '';
          document.getElementById('test').style.transitionProperty= '';
          document.getElementById('test').style.transitionDuration= '';
          $event.target.style.transform = '';
          document.getElementById('test').style.transform = '';
        // Конец блока
        // Присвоение модифицированного блока => реактивному
          this.boxie = tempArr;
        // Проверка на выигрыш =>
          this.checkwin();
        }, 300, $event);
      }
    },
    toggle() {
      //Смена роута и background'a.
      document.querySelector('.bg').classList.toggle('bg_vision');
      if (this.timeOfTheDay) {
        this.$router.push('neon');
      } else {
        this.$router.push('/');
      }
      this.timeOfTheDay = !this.timeOfTheDay;
    },
    checkwin() {
    /*
    (P.S.: Я решил задумываться о возможной победе, только когда в нижней строке собираются нужные числа.
    Не исключаю, что есть проверка лучше, но я решил оставить всё так. ) */
    if (this.boxie[15] === 'test' && this.boxie[14] === 15 && this.boxie[13] === 14 && this.boxie[12] === 13) {
      // Рекурсивная функция для проверки условия
      const recurs = function(arr1, arr2, n1 = 0, n2 = 0) {
        let firstValue = arr1[n1];
        let secondValue = arr2[n2];
        if (firstValue === 'test' && secondValue === 'test'){
          return "ТЫ ПОБЕДИЛ(а), С МЕНЯ ШАМПАНСКОЕ";
        }
        else if (firstValue === secondValue) {
          return recurs(arr1, arr2, n1 + 1, n2 + 1)
        }
        return 'Осталось немного'
      }
      alert(recurs(this.boxie,this.gameOver, this.boxie[0], this.gameOver[0]));
    }
    },
  },
  mounted() {
    // Я знаю, что правильно использовать обработчики в роутере, я их как-раз изучаю сейчас.
    if (window.location.hash === '#/neon') { this.$router.push('/'); }
    this.boxie = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 'test'].sort(() => Math.random() - 0.5);
  },
};
</script>

<style lang="scss">
@keyframes stared {
  0%{opacity: 0;}
  100%{opacity: 1;}
}
body{
  outline: 1px solid;
  padding: 0;
  margin: 0;
  #app {
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
    #toggleLight {
      position: absolute;
      top: -10%;
      right: 10%;
        @media screen and (max-width: 450px) {
          top: 0;
          right: -15%;
        }
    }
    .star{
      opacity: 0;
      animation: stared 4s ease-out 2s forwards;
        @media screen and (max-width: 450px) {
          width: 100%;
        }
    }
  }
  .bg {
    display: none;
    width:100vw;
    height:100vh;
    background-image: url('./assets/bg.jpg');
    background-size:cover;
  }
  .bg_vision {
    display: block;
  }
  .timeOfTheDay {
    font-family: "NEON";
    color:rgb(255, 0, 147);
    text-shadow: 0 0 80px red,0 0 30px FireBrick,0 0 6px DarkRed;
    font-weight: bold;
    font-size: 45px;
  }
}

</style>
