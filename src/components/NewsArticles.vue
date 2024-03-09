<template>
  <div></div>
</template>

<script>
// const cheerio = require('cheerio')

export default {
  name:'NewsArticles',
  data(){
    return{
      latestArticles:[],

    }
  },

  methods:{
    getWebsiteData(){
      // let url = 'https://www.bnnbloomberg.ca/';
    }
  },
  mounted(){
    this.getWebsiteData();
  }

}
</script>

<style>

</style>