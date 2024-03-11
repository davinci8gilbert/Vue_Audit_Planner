<template>
    <div class="carousel">
      <div class="carousel-inner">
        <carousel-indicators v-if="indicators" :total="total" :current-index="currentSlide" @switch="switchSlide($event)"></carousel-indicators>
        <carousel-item v-for="(slide, index) in newsHeadline" :slide="slide" :key="`item-${index}`" :current-slide="currentSlide" :index="index" :newsImgVid="newsImgVid[index]"
        :newsHeadlineLink="newsHeadlineLink[index]" :newsOrg="newsOrg[index]" :direction="direction" @mouseenter="stopSlideTimer" @mouseout="startSlideTimer"></carousel-item>
        <carousel-controls v-if="controls" @prev="prev" @next="next"></carousel-controls>
      </div>
    </div>
  </template>
  
  <script>
  import CarouselItem from "./CarouselItem.vue";
  import CarouselControls from "./CarouselControls.vue";
  import CarouselIndicators from "./CarouselIndicators.vue";
  
  export default {
    name: "CarouselSlider",
    props: {
      newsHeadline: {
        type: Array,
        required: true,
      },
      controls: {
        type: Boolean,
        default: false,
      },
      indicators: {
        type: Boolean,
        default: false,
      },
      interval: {
        type: Number,
        default: 3000,
      },
      newsImgVid:{
        type: Array
      },
      newsHeadlineLink:{
        type: Array
      },

      newsOrg:{
        type: Array
      }
    },
    components: { CarouselItem, CarouselControls, CarouselIndicators },
    data (){
      return{
      currentSlide: 0,
      slideInterval: null,
      direction: "right",
      total: 0,
   
      }
      
    },
    methods: {
      // Sets the current slide index to the provided index.
      setCurrentSlide(index) {
        this.currentSlide = index;
      },
      // Moves to the previous slide based on the current slide index.
      prev(step = -1) {
        const index =
          this.currentSlide > 0
            ? this.currentSlide + step
            : this.newsHeadline.length - 1;
        this.setCurrentSlide(index);
        this.direction = "left";
        this.startSlideTimer();
      },
      // Moves to the next slide based on the current slide index.
      _next(step = 1) {
        const index =
          this.currentSlide < this.newsHeadline.length - 1
            ? this.currentSlide + step
            : 0;
        this.setCurrentSlide(index);
        this.direction = "right";
      },
      // Wrapper for _next, moves to the next slide with optional step.
      next(step = 1) {
        this._next(step);
        this.startSlideTimer();
      },
      // Starts the slide timer, advancing to the next slide at intervals.
      startSlideTimer() {
        this.stopSlideTimer();
        this.slideInterval = setInterval(() => {
          this._next();
        }, this.interval+2000);  // Interval plus 2000ms delay for pause.
      },
      // Stops the slide timer.
      stopSlideTimer() {
        clearInterval(this.slideInterval);
      },
      // Switches to a specific slide indicated by the index.
      switchSlide(index) {
        const step = index - this.currentSlide;
        if (step > 0) {
          this.next(step);
        } else {
          this.prev(step);
        }
      },
    },
    mounted() {
      console.log(this.newsHeadline)
      this.total = this.newsHeadline.length;
      this.startSlideTimer();
    },
    beforeUnmount() {
      this.stopSlideTimer();
    },
  };
  </script>
  
  <style scoped>
  .carousel {
    display: flex;
    justify-content: center;
  }
  .carousel-inner {
    position: relative;
    width: 900px;
    height: 250px;
    overflow: hidden;
  }
  </style>