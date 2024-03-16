<template>
  <div>
    <h1>Audit Planning Dashboard</h1>
    <div class="main-container-box">
      <div class="sub-container-box1">
        <div class="chart56-container">
         <ChartFive id="ChartFive" @click="expandChart5"/>
          <ChartSix id="ChartSix" @click="expandChart6" />
      </div>
         
      <div id="box-chart1" @click="expandChart1"><ChartOne id="ChartOne"  /></div>
      
        


      </div>
      <div class="sub-container-box2">
              
         <div id="sub-container2">
          <div id="box-chart2" @click="expandChart2"><ChartTwo id="ChartTwo" /></div>
          <div id="sub-container3">
            <div id="box-chart3" @click="expandChart3"><ChartThree id="ChartThree" /></div>
            <div id="box-chart4" @click="expandChart4"><ChartFour id="ChartFour" /></div>
          </div>
        </div>

        <!-- --news-- -->
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

    </div>

  </div>
  <ExpandedChartOne v-if='showChart1' :collapseChart="collapseChart" />
  <ExpandedChartTwo v-if='showChart2' :collapseChart="collapseChart" />
  <ExpandedChartThree v-if='showChart3' :collapseChart="collapseChart" />
  <ExpandedChartFour v-if='showChart4' :collapseChart="collapseChart" />
  <ExpandedChartFive v-if='showChart5' :collapseChart="collapseChart" />
  <ExpandedChartSix v-if='showChart6' :collapseChart="collapseChart" />

</template>

<script>

import ChartOne from "@/components/ChartOne";
import ChartTwo from "@/components/ChartTwo";
import ChartThree from "@/components/ChartThree";
import ChartFour from "@/components/ChartFour";
import ChartFive from "@/components/ChartFive";
import ChartSix from "@/components/ChartSix";
import NewsArticles from '@/components/NewsArticles.vue'
import Imgurl from '@/assets/zoom-lens.png';
import ExpandedChartOne from '@/components/ExpandedChartOne.vue';
import ExpandedChartTwo from '@/components/ExpandedChartTwo.vue';
import ExpandedChartThree from '@/components/ExpandedChartThree.vue';
import ExpandedChartFour from '@/components/ExpandedChartFour.vue';
import ExpandedChartFive from '@/components/ExpandedChartFive.vue';
import ExpandedChartSix from '@/components/ExpandedChartSix.vue';


export default {
    name:"DashBoard",
    components:{
    ChartOne,
    ChartTwo,
    ChartThree,
    ChartFour,
    ChartFive,
    ChartSix,
    NewsArticles,
    ExpandedChartOne,
    ExpandedChartTwo,
    ExpandedChartThree,
    ExpandedChartFour,
    ExpandedChartFive,
    ExpandedChartSix

  },
  data(){
    return{
      references:["Bank of Canada", "OSFI", "IIA","IMF"],
      links:['https://www.bankofcanada.ca/publications/','https://www.osfi-bsif.gc.ca/en/guidance','https://www.theiia.org/en/standards/','https://www.federalreserve.gov/supervisionreg.htm'],
      textLabel:['Bank of Canada Publications','OSFI Guidance','IIA Standards','Federal Reserve of America Standards'],
      image:Imgurl,
      
      showChart1: false,
      showChart2: false,
      showChart3:false,
      showChart4:false,
      showChart5:false,
      showChart6:false,
    }
  },
  methods:{
    expandChart1(){
      
      this.showChart1=true;
      console.log('expanded')
    },

    expandChart2(){
      
      this.showChart2=true;
      console.log('expanded')
    },

    expandChart3(){
      
      this.showChart3=true;
      console.log('expanded')
    },
    expandChart4(){
      
      this.showChart4=true;
      console.log('expanded')
    },

    expandChart5(){
      
      this.showChart5=true;
      console.log('expanded')
    },

    expandChart6(){
      
      this.showChart6=true;
      console.log('expanded')
    },

    collapseChart(value){
      if (value==false)
      this.showChart=false;
      this.showChart1 =false;
      this.showChart2=false;
      this.showChart3=false;
      this.showChart4=false;
      this.showChart5=false;
      this.showChart6=false;

    }
  }
}
</script>

<style>

</style>