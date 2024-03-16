<template>
       <div class="backdropCharts" @click="collapseChart(false)"> 
      <div class="chartfive-container-expanded"><canvas id="myChartFiveExpanded"></canvas></div>
      
    </div>
  </template>
  
  <script>
  import Chart from 'chart.js/auto';
  import PreviousService from '@/services/PreviousService';
  export default {
  name: 'ChartFive',
  props:{
    collapseChart:{
        type: Function
    }
  },
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
  
  
      
      
      const ctx = document.getElementById('myChartFiveExpanded');
  
      const plugin = {
          id: 'customCanvasBackgroundColor',
          beforeDraw: (chart, args, options) => {
              const {ctx} = chart;
              ctx.save();
              ctx.globalCompositeOperation = 'destination-over';
              ctx.fillStyle = options.color || '#eeebf8';
              ctx.fillRect(0, 0, chart.width, chart.height);
              ctx.restore();
          }
          };
    
      const data = {labels:
         [
          'Satisfactory',
          'Needs Improvement',
          'Poor',
          'Fail',
          'Unsatisfactory'
        ],
        datasets: [{
            label: 'No. of Units Per Audit Rating',
            data: this.countAudits,
            backgroundColor: [
            '#71cb2d',
            '#a230b4',
            '#32b6e2',
            '#36e8d3',
            'red'
            ],
            hoverOffset: 4
            },
            
        ]
        
           
        };
          
      const myChartFive = new Chart(ctx,{
          type: 'polarArea',
          data: data,
          options: { 
              plugins:{
                  customCanvasBackgroundColor: {
                  color: '#eeebf8',
                  
                  },
                 title: {
                    display: true,
                    text: 'Audit Universe by Audit Ratings',
                    color: '#260655',
                    font:{
                      size: 25
                    }
  
                  },
  
                  legend: {
                    display: true,
                    labels: {
                        color: 'rgb(255, 99, 132)',
                        font:{
                         size: 20
                       }
                        
                    },
                    position: 'bottom',
                    align: 'center',
                   
                    padding:{
                    left:50
                   }
              
                  
              }
                
  
              },
              maintainAspectRatio: false, // Set to false to allow adjusting the chart size
              responsive: true,
          },
          plugins:[plugin],
      });
  
    myChartFive;
  
  
  }
   
  }
  
  
  </script>
  
  <style>
  
  </style>