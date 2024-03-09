<template>
  <div>
    <h1>Audit Planning Dashboard</h1>
    <div class="main-container-box">
      <div class="sub-container-box1">
         <div id="box-chart5"><ChartFive id="ChartFive" /></div>
         <div id="box-newsarticle"><p>News Articles</p></div>
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


export default {
    name:"DashBoard",
    components:{
    ChartOne,
    ChartTwo,
    ChartThree,
    ChartFour,
    ChartFive
  },
}
</script>

<style>

</style>