<template>
  <div>
    <CarouselSlider v-if="dataLoaded" :newsHeadline="newsHeadline" :newsImgVid="newsImgVid" :newsHeadlineLink="newsHeadlineLink" :newsOrg="newsOrg" :interval="3000" controls indicators/>
      
   
    
    <!-- <el-carousel type="card" height="700px" width="400px" autoplay>
      <el-carousel-item v-for="(news,index) in newsHeadline" :key="index">
        <a :href="newsHeadlineLink[index]">
        <img :src="newsImgVid[index]" alt="news photo" style="width:50%; height:50%"/>
      </a>
      <p>{{ news }}</p>
      </el-carousel-item>
    </el-carousel> -->
    
    
    <!-- <a :href="newsHeadlineLink[2]">
      <img :src="newsImgVid[2]" alt="Description of Image">
    </a>
  <p>{{ newsHeadline[2] }}</p> -->
  </div>
</template>

<script>
import Webscraper from '@/services/Webscraper';
import CarouselSlider from "@/components/CarouselSlider.vue";


export default {
  name:'NewsArticles',
  components:{CarouselSlider},
  data(){
    return{
      newsHeadline:[],
      newsImgVid:[],
      newsHeadlineLink:[],
      newsOrg:['Bloomberg','Financial Post','Global News','CTV News','Globe And Mail','Bank of Canada'],
      dataLoaded: false,
      
    }
  },

  methods:{

    async fetchData(){
      try {
        await this.scrapeDataBloomberg();
        await this.scrapeDataFinancial();
        await this.scrapeDataGlobal();
        await this.scrapeDataCtv();
        await this.scrapeTheGlobe();
        await this.scrapeBankOfCanada();
        console.log(this.newsHeadline)
        this.dataLoaded = true; // Set dataLoaded to true after fetching data
      } catch (error) {
        console.log(error);
      }
    },

    async scrapeDataBloomberg(){
      try {
      let url = 'https://www.bnnbloomberg.ca/';
      let selector1 = '.top-story-headline h1'
      let selector2 = '.media.margin-bottom img';
      let selector3 = '.top-story-headline a'
      const response = await Webscraper.getHeadline(url,selector1);
      const response2 = await Webscraper.getWebsiteImageVid(url,selector2);
      const response3 = await Webscraper.getHeadlineLink(url,selector3)
      this.newsHeadline[0] = response.data;
      this.newsImgVid[0]="http://www.bnnbloomberg.ca"+response2.data;
      this.newsHeadlineLink[0] = "http://www.bnnbloomberg.ca"+response3.data;

      console.log(this.newsHeadline);
      console.log(this.newsImgVid);
      console.log(this.newsHeadlineLink);


    } catch (error) {
      console.log(error);
    }
    },

    async scrapeDataFinancial(){
      try {
      let url = 'https://financialpost.com/category/fp-finance/banking/';
      let selector1 = '.article-card__content.first h2'
      let selector2 = '.col-xs-12.col-sm-8.col-lg-7.hero-feed__hero-col a img';
      let selector3 = '.col-xs-12.col-sm-8.col-lg-7.hero-feed__hero-col a';
      const response = await Webscraper.getHeadline(url,selector1);
      const response2 = await Webscraper.getWebsiteImageVid(url,selector2);
      const response3 = await Webscraper.getHeadlineLink(url,selector3)
      this.newsHeadline[1] = response.data;
      this.newsImgVid[1]=response2.data;
      this.newsHeadlineLink[1] = "https://financialpost.com/category/"+response3.data;
      

      console.log(this.newsHeadline[1]);
      console.log(this.newsImgVid[1]);
      console.log(this.newsHeadlineLink[1]);


    } catch (error) {
      console.log(error);
    }
    },

    async scrapeDataGlobal(){
      try {
      let url = 'https://globalnews.ca/money/';
      let selector1 = '[data-container-id="stories-item-1"] .c-posts__details .c-posts__headline span'
      let selector2 = '.c-posts__inner img';
      let selector3 = '.c-posts__inner a';
      const response = await Webscraper.getHeadline(url,selector1);
      const response2 = await Webscraper.getWebsiteImageVid(url,selector2);
      const response3 = await Webscraper.getHeadlineLink(url,selector3)
      this.newsHeadline[2] = response.data;
      this.newsImgVid[2]=response2.data;
      this.newsHeadlineLink[2] = response3.data;
      

      console.log(this.newsHeadline[2]);
      console.log(this.newsImgVid[2]);
      console.log(this.newsHeadlineLink[2]);


    } catch (error) {
      console.log(error);
    }
    },

    async scrapeDataCtv(){
      try {
      let url = 'https://www.ctvnews.ca/business';
      let selector1 = '#list-541065593 .c-list__item__block .c-list__item__title a';
      let selector2 = '.c-list__item__image img';
      let selector3 = '.c-list__item__text h3 a';
      const response = await Webscraper.getHeadline(url,selector1);
      const response2 = await Webscraper.getWebsiteImageVid(url,selector2);
      const response3 = await Webscraper.getHeadlineLink(url,selector3)
      this.newsHeadline[3] = response.data;
      this.newsImgVid[3]=response2.data;
      this.newsHeadlineLink[3] = response3.data;
      

      console.log(this.newsHeadline[3]);
      console.log(this.newsImgVid[3]);
      console.log(this.newsHeadlineLink[3]);


    } catch (error) {
      console.log(error);
    }
    },

    async scrapeTheGlobe(){
      try {
      let url = 'https://www.theglobeandmail.com/topics/banking/';
      let selector1 = '#main-content .l-grid.l-grid--main div div .article-list-grid-wrap div:nth-child(1) div a .c-card__content .c-card__hed div';
      let selector2 = '#main-content > div.l-grid.l-grid--main > div > div > div.article-list-grid-wrap > div:nth-child(1) > div > a > div.c-card__media > div > img';
      let selector3 = '#main-content > div.l-grid.l-grid--main > div > div > div.article-list-grid-wrap > div:nth-child(1) > div > a';
      const response = await Webscraper.getHeadline(url,selector1);
      const response2 = await Webscraper.getWebsiteImageVid(url,selector2);
      const response3 = await Webscraper.getHeadlineLink(url,selector3)
      this.newsHeadline[4] = response.data;
      this.newsImgVid[4]=response2.data;
      this.newsHeadlineLink[4] = 'https://www.theglobeandmail.com'+response3.data;
      

      console.log(this.newsHeadline[4]);
      console.log(this.newsImgVid[4]);
      console.log(this.newsHeadlineLink[4]);


    } catch (error) {
      console.log(error);
    }
    },

    async scrapeBankOfCanada(){
      try {
      let url = 'https://www.bankofcanada.ca/';
      let selector1 = '#carousel-boc_carousel-cfct-module-5ed3ea67edfa6552532fdfd2528cae40 > div > div.carousel-border > div > div:nth-child(3) > div.carousel-caption > a > div > p';
      let selector2 = '#carousel-boc_carousel-cfct-module-5ed3ea67edfa6552532fdfd2528cae40 > div > div.carousel-border > div > div:nth-child(3) > div.carousel-image > img';
      let selector3 = '#carousel-boc_carousel-cfct-module-5ed3ea67edfa6552532fdfd2528cae40 > div > div.carousel-border > div > div:nth-child(3) > div.carousel-caption > a';
      const response = await Webscraper.getHeadline(url,selector1);
      const response2 = await Webscraper.getWebsiteImageVid(url,selector2);
      const response3 = await Webscraper.getHeadlineLink(url,selector3)
      this.newsHeadline[5] = response.data;
      this.newsImgVid[5]=response2.data;
      this.newsHeadlineLink[5] = response3.data;
      

      console.log(this.newsHeadline[5]);
      console.log(this.newsImgVid[5]);
      console.log(this.newsHeadlineLink[5]);


    } catch (error) {
      console.log(error);
    }
    },




  },
  async mounted(){
    await this.fetchData();
    // await this.scrapeDataFinancial();
    // await this.scrapeDataGlobal();
  }

}
</script>

<style>

</style>