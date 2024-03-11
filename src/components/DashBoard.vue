<template>
  <div>
    <h1>Audit Planning Dashboard</h1>
    <div class="main-container-box">
      <div class="sub-container-box1">
         <div id="box-chart5"><ChartFive id="ChartFive" />
        
        </div>
         <div id="box-newsarticle">
          <p id="news-title">Current News Articles And Audit References</p>
          <div class="newsandref">
          <div id="carousel-news"><NewsArticles id="NewsArticles"/></div>
          <div id="references-news">
            <p id="titleReference">Publications and Standards Issued By Governing Bodies</p>  
            <div class="policiesandstandards" v-for="(reference, index) in references" :key="index">
                <a :href="links[index]">
                  <img :src="image" alt=""/>
                </a>
                <a :href="links[index]">
                  <p id="textlabelref">{{ textLabel[index] }}</p>
                </a>
              </div>
          </div>
        </div>
        </div>
      </div>
      <div class="sub-container-box2">
         <div id="box-chart1"><ChartOne id="ChartOne" /></div>
         <div id="sub-container2">
          <div id="box-chart2"><ChartTwo id="ChartTwo" /></div>
          <div id="sub-container3">
            <div id="box-chart3"><ChartThree id="ChartThree" /></div>
            <div id="box-chart4"><ChartFour id="ChartFour" /></div>
          </div>
        </div>
      </div>

    </div>

  </div>
</template>

<script>

import ChartOne from "@/components/ChartOne";
import ChartTwo from "@/components/ChartTwo";
import ChartThree from "@/components/ChartThree";
import ChartFour from "@/components/ChartFour";
import ChartFive from "@/components/ChartFive";
import NewsArticles from '@/components/NewsArticles.vue'
import Imgurl from '@/assets/zoom-lens.png'

export default {
    name:"DashBoard",
    components:{
    ChartOne,
    ChartTwo,
    ChartThree,
    ChartFour,
    ChartFive,
    NewsArticles
  },
  data(){
    return{
      references:["Bank of Canada", "OSFI", "IIA","IMF"],
      links:['https://www.bankofcanada.ca/publications/','https://www.osfi-bsif.gc.ca/en/guidance','https://www.theiia.org/en/standards/','https://www.federalreserve.gov/supervisionreg.htm'],
      textLabel:['Bank of Canada Publications','OSFI Guidance','IIA Standards','Federal Reserve of America Standards'],
      image:Imgurl
    }
  }
}
</script>

<style>

</style>