<template>
    <!-- in vue 2.x you need wrap these buttons in a div -->
    <div class="button-container">
    <button class="carousel-control left" @click="$emit('prev')">Prev</button>
    <button class="carousel-control right" @click="$emit('next')">Next</button>
    </div>
  </template>
  
  <script>
  export default {
    emits: ["prev", "next"], // vue v3
  };
  </script>
  <style scoped>
  .carousel-control {
    background-color: rgba(0, 0, 0, 0.5);
    border: none;
    display:inline;
    position: absolute;
    height: 40px;
    width: 60px;
    top: calc(62% - 25px);
    color: #f3f3f3;
    cursor: pointer;
  }
  .left {
    left: 0;
    margin-top: 80px;
    margin-left: 60px;
    border-radius: 20px;
    background-color: #b693ec;

  }
  .right {
    right: 0;
    margin-top: 80px;
    margin-right: 60px;
    border-radius: 20px;
    background-color: #b693ec;
  }

  /* .button-container{
    display: flex;
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
  } */
  </style>