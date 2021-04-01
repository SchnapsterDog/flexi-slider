<template>
  <div class="flexi-slider">
    <div class="flexi-slider__header">
      <slot name="header" :currentItem="currentItem">
        <div
          class="flexi-slider__header--item"
          v-for="(value, key) in inputData"
          :key="key"
          @click="changeSlide(key)"
        >
          <div
            class="flexi-slider__header--item__title"
            :class="{ 'active-title': currentSliderIndex === key }"
            v-text="value.title"
          />
          <div
            class="flexi-slider__header--item__square"
            :class="{ 'active-square': currentSliderIndex === key }"
          />
        </div>
      </slot>
    </div>
    <transition :name="transitionOn ? transitionName : ''" mode="out-in">
      <div
        class="flexi-slider__wrapper"
        v-for="i in [currentSliderIndex]"
        :key="i"
      >
        <slot name="item" v-bind="{ currentItem, computedIndex }">
          <div class="flexi-slider__wrapper--content">
            <span
              class="flexi-slider__wrapper--content__title"
              v-text="currentItem.title"
            />
            <div
              class="flexi-slider__wrapper--content__paragraph"
              v-html="currentItem.paragraph"
            />
          </div>
          <img class="flexi-slider__wrapper--image" :src="currentItem.img" />
        </slot>
      </div>
    </transition>
    <a class="next" @click.prevent="next">
      <div class="pagination">
        <span class="text" v-text="nextButtonText" />
        <div class="svg" />
      </div>
    </a>
    <a class="prev" @click.prevent="prev">
      <div class="pagination pagination__left">
        <span class="text" v-text="prevButtonText" />
        <div class="svg" />
      </div>
    </a>
  </div>
</template>

<script>
import props from "../utils/props";
export default {
  name: "flexi-slider",
  props,
  data() {
    return {
      timer: null,
      currentSliderIndex: this.currentIndex,
    };
  },
  mounted() {
    if (this.turnTimer) {
      this.startSlide();
    }
  },
  methods: {
    startSlide() {
      this.timer = setInterval(this.next, this.timerInterval);
    },
    next() {
      this.currentSliderIndex += 1;
    },
    prev() {
      this.currentSliderIndex -= 1;
    },
    changeSlide(index) {
      this.currentSliderIndex = index;
    },
  },
  computed: {
    currentItem() {
      return this.inputData[
        Math.abs(this.currentSliderIndex) % this.inputData.length
      ];
    },
    computedIndex() {
      if (this.currentItem) {
        var result = "";
        this.inputData.filter((elem, index) => {
          if (elem.id === this.currentItem.id) {
            result = index;
          }
        });
        return result + 1;
      } else {
        return null;
      }
    },
  },
};
</script>
<style scoped>
.flexi-slider {
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
  top: 250px;
  position: relative;
  background: #1a446d;
}

.flexi-slider__header {
  width: 100%;
  top: -150px;
  position: absolute;
  display: flex;
  justify-content: space-between;
  color: white;
}

.flexi-slider__header::before {
  content: "";
  width: 90%;
  height: 8px;
  left: 5%;
  top: 70px;
  background: #1a446d;
  position: absolute;
}

.flexi-slider__header--item {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.flexi-slider__header--item__title {
  width: 120px;
  text-align: center;
  cursor: pointer;
}

.flexi-slider__header--item__title:hover {
  opacity: 0.7;
}

.flexi-slider__header--item__square {
  width: 80px;
  height: 80px;
  position: relative;
  background: #1a446d;
  border-radius: 100%;
  border: 8px solid lightgray;
  cursor: pointer;
}

.flexi-slider__header--item__square:hover {
  background: black;
  border: 8px solid lightgray;
}

.flexi-slider__wrapper {
  display: flex;
  height: 600px;
}

.flexi-slider__wrapper--content {
  width: 30%;
  padding: 100px 50px;
  color: white;
}

.flexi-slider__wrapper--content__title {
  font-size: 30px;
}

.flexi-slider__wrapper--image {
  width: 70%;
  object-fit: cover;
}

.prev,
.next {
  position: absolute;
  left: 100%;
  cursor: pointer;
  font-size: 20px;
  font-weight: 600;
}

.prev {
  left: 80%;
}

.next {
  left: 95%;
}

.active-title {
  color: black;
}

.active-square {
  background: #519056;
  border: 8px solid lightgray;
}

.slider-enter,
.slider-leave-to {
  opacity: 0;
}

.slider-enter-active,
.slider-leave-active {
  transition: all 0.5s;
}
</style>