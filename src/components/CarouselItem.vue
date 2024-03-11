<template>
    <transition :name="transitionEffect">
      <div class="carousel-item" v-show="currentSlide === index" @mouseenter="$emit('mouseenter')" @mouseout="$emit('mouseout')">
        <a :href="newsHeadlineLink">
        <img :src="newsImgVid" alt="news photo" style="width:40%; height:50%"/>
        </a>
        <p id="newsOrg">{{newsOrg  }}</p>
        <p id="headlineText">{{ slide }}</p>         
        <!-- <img :src="slide" /> -->
      </div>
    </transition>
  </template>
  
  <script>
  export default {
    emits: ["mouseenter", "mouseout"],
    props: ["slide", "currentSlide", "index", "direction",'newsImgVid','newsHeadlineLink','newsOrg'],
    computed: {
      transitionEffect() {
        return this.direction === "right" ? "slide-out" : "slide-in";
      },
    },
  };
  </script>
  
  <style scoped>
  .carousel-item {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
  .slide-in-enter-active,
  .slide-in-leave-active,
  .slide-out-enter-active,
  .slide-out-leave-active {
    transition: all 1s ease-in-out;
  }
  .slide-in-enter-from {
    transform: translateX(-100%);
  }
  .slide-in-leave-to {
    transform: translateX(100%);
  }
  .slide-out-enter-from {
    transform: translateX(100%);
  }
  .slide-out-leave-to {
    transform: translateX(-100%);
  }

  #headlineText {
    font: 500;
    color: #22054e;
    padding: 0;
    margin-top: 10px;
  }
  #newsOrg{
    font-weight: 800;
    font-size: larger;
    color: #22054e;
    padding: 0px;
    margin: 0;
  }

  img{
    border-radius: 20px;
    
  }
  </style>