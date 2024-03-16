<template>
    <div class="chart6-inner-container">
      <!-- <div class="chartfive-container"><canvas id="myChartFive"></canvas></div> -->
      <!-- <div class="chartfive2-container-outer">-->
        <p id="titlechart5_2">Audits With Satisfactory Ratings Against Total</p> 
      <div class="chartfive2-container"><canvas id="myChartFive2"></canvas></div>
    <!-- </div> -->
    </div>
  </template>
  
  <script>
  import Chart from 'chart.js/auto';
  import PreviousService from '@/services/PreviousService';
  export default {
  name: 'ChartFive',
  data(){
    return{
      prevauditAll:[],
      countAudits:new Array(5).fill(0),
      countNonSatisfactoryAudit:0
    }
  },
  
  methods:{
    async getAllPreviousAudit() {
              try {
              const response = await PreviousService.retrievePrevAuditData();
              this.prevauditAll = response.data;
              console.log(this.prevauditAll);
              } catch (error) {
              console.log(error);
              }
          },
  },
  
  async mounted(){
      
      await this.getAllPreviousAudit();
  
      this.prevauditAll.forEach(unit => {
      if(unit.auditRating=='Satisfactory'){
        this.countAudits[0]++;
      } else if(unit.auditRating=='Needs Improvement'){
        this.countAudits[1]++;
      } else if (unit.auditRating=='Poor'){
        this.countAudits[2]++;
      } else if (unit.auditRating=='Fail'){
        this.countAudits[3]++;
      } else{
        this.countAudits[4]++;
      }
  
      });
  
  
  
  // ------------------------------------------------------------------Chart2-------------------------------------------------------
  
  
    const ctx2 = document.getElementById('myChartFive2');
    const chartWidth = document.querySelector('.chartfive2-container').getBoundingClientRect().width -46;
    console.log(chartWidth)
    const ctx3 = document.getElementById('myChartFive2').getContext('2d');
    const gradientSegment = ctx3.createLinearGradient(0,0,chartWidth,0);
  
    gradientSegment.addColorStop(0,'red');
    gradientSegment.addColorStop(0.4,'yellow');
    gradientSegment.addColorStop(1,'green');
  
  
      const plugin2 = {
          id: 'customCanvasBackgroundColor',
          afterDatasetsDraw: (chart, args, options) => {
              const {ctx,chartArea:{left,right}} = chart;
              ctx.save();
              ctx.globalCompositeOperation = 'destination-over';
              ctx.fillStyle = options.color || '#eeebf8';
              ctx.fillRect(0, 0, chart.width, chart.height);
              ctx.restore();
  
              const xCoor = chart.getDatasetMeta(0).data[0].x;
              const yCoor = chart.getDatasetMeta(0).data[0].y;
              let rating;
              console.log(rating)
              
              if(data2.datasets[0].data[0]<((this.countAudits[0]+this.countAudits[1]+this.countAudits[2]+this.countAudits[3])/2)){
                rating = 'Bad'
              }else{
                rating = 'Good'
              }
              
              //to place the left and right labels for the starting number (left = 0) and the total nummber (right)
              ctx.font='20px Trebuchet MS';
              ctx.fillStyle = '#260655';
              ctx.textBaseline='top';
              ctx.textAlign = 'left'
              ctx.fillText('0',left+10,yCoor+ 3)
              ctx.fillText((this.countAudits[0]+this.countAudits[1]+this.countAudits[2]+this.countAudits[3]),right-25,yCoor+ 3)
              ctx.textAlign = 'center';
              
              //this sets the achieved number at the middle, say, number of satisfactory audits
              ctx.font='80px Trebuchet MS';
              ctx.textAlign = 'center';
              ctx.textBaseLine = 'bottom'
              ctx.fillText(data2.datasets[0].data[0],xCoor,yCoor-70)
  
  
              ctx.font='40px Trebuchet MS';
              ctx.textAlign = 'center';
              ctx.textBaseLine = 'bottom'
              ctx.fillText(rating,xCoor,yCoor+10)
  
              
          }
          };
  
     
  
      const data2 = {labels:
         [
          'Satisfactory Audit Rating',
          'Non-Satisfactory Audit Rating'
          ],
        datasets: [{
            label: 'No. of Units Per Audit Rating',
            data: [this.countAudits[0],(this.countAudits[1]+this.countAudits[2]+this.countAudits[3])],
            backgroundColor: [
            gradientSegment,
            '#b8a6e7'
            ],
            hoverOffset: 4,
            cutout:'80%',
            circumference: 180,
            rotation:270
            },        
          ]
        
           
         };
          
      const myChartFive2 = new Chart(ctx2,{
          type: 'doughnut',
          data: data2,
          options: { 
            layout: {
              padding: {
              top: 0, // Adjust this value to create space for the doughnut near the title
              bottom: 0,
              left: 30,
              right: 30
          }
      },
            aspectRatio:1.5,  
            plugins:{
                  customCanvasBackgroundColor: {
                  color: '#eeebf8',
                  
                  },
                 title: {
                    display: false,
                    text: 'Audits With Satisfactory Ratings Against Total',
                    color: '#260655',
                    font:{
                      size: 17
                    },
                    
  
                  },
  
                  legend: {
                    display: false,
                    labels: {
                      display:false, 
                      color: 'rgb(255, 99, 132)',
                        
                    },
                    position: 'bottom',
                    align: 'center',
                   
                    padding:{
                    left:50,
                    
                 }                     
              },
              tooptip:{
                enabled: true
              }
                
              },
              maintainAspectRatio: false, // Set to false to allow adjusting the chart size
              responsive: true,
          },
          plugins:[plugin2],
      });
  
    myChartFive2;
  
    
  
  }
   
  }
  
  
  </script>
  
  <style>
  
  </style>