<template>
       <div class="backdropCharts" @click="handleBackdropClick"> 
      <div class="chartfive-container-expanded"  @click="collapseChart(false)"><canvas id="myChartFiveExpanded" @click="collapseChart(false)"></canvas></div>
      
    </div>
  </template>
  
  <!-- <script>
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
  
  </style> -->

  <script>
import Chart from 'chart.js/auto';
import PreviousService from '@/services/PreviousService';

export default {
  name: 'ChartFive',
  props: {
    collapseChart: {
      type: Function
    }
  },
  data() {
    return {
      prevauditAll: [],
      countAudits: new Array(5).fill(0),
      countNonSatisfactoryAudit: 0,
      myChartFive: null // Variable to hold chart instance
    }
  },
  methods: {
    handleBackdropClick() {
      
  // const clickedElement = event.target;


  try {
    // Check if myChart is defined
    if (this.myChartFive) {
      this.myChartFive.destroy();
      // // Check if the clicked element is part of the tooltip
      // if (!clickedElement.closest('.chartjs-tooltip')) {
      //   // Disable tooltips if clicking outside of the chart area
      //   this.myChart.options.plugins.tooltip.enabled = false;
      // } else {
      //   // Re-enable tooltips if clicking on the chart area
      //   this.myChart.options.plugins.tooltip.enabled = true;
      // }
    }
  } catch (error) {
    // Handle the error gracefully
    console.error("An error occurred while handling the click event:", error);
  }

  this.collapseChart(false);
},

    
    async getAllPreviousAudit() {
      try {
        const response = await PreviousService.retrievePrevAuditData();
        this.prevauditAll = response.data;
        console.log(this.prevauditAll);
      } catch (error) {
        console.log(error);
      }
    },
    createChart() {
      this.prevauditAll.forEach(unit => {
        if (unit.auditRating == 'Satisfactory') {
          this.countAudits[0]++;
        } else if (unit.auditRating == 'Needs Improvement') {
          this.countAudits[1]++;
        } else if (unit.auditRating == 'Poor') {
          this.countAudits[2]++;
        } else if (unit.auditRating == 'Fail') {
          this.countAudits[3]++;
        } else {
          this.countAudits[4]++;
        }
      });

      const ctx = document.getElementById('myChartFiveExpanded');

      const data = {
        labels: [
          'Satisfactory',
          'Needs Improvement',
          'Poor',
          'Fail',
          'Unsatisfactory'
        ],
        datasets: [{
          label: 'No. of Units Per Audit Rating',
          // 
          data: this.countAudits,
          backgroundColor: [
            '#71cb2d',
            '#a230b4',
            '#32b6e2',
            '#36e8d3',
            'red'
          ],
          hoverOffset: 4
        }]
      };

      const plugin = {
        id: 'customCanvasBackgroundColor',
        beforeDraw: (chart, args, options) => {
          const {
            ctx
          } = chart;
          ctx.save();
          ctx.globalCompositeOperation = 'destination-over';
          ctx.fillStyle = options.color || '#eeebf8';
          ctx.fillRect(0, 0, chart.width, chart.height);
          ctx.restore();
        }
      };

      return new Chart(ctx, {
        type: 'polarArea',
        data: data,
        options: {
          plugins: {
            tooltip: {
                enabled: true // Disable tooltips
            },
            customCanvasBackgroundColor: {
              color: '#eeebf8',
            },
            title: {
              display: true,
              text: 'Audit Universe by Audit Ratings',
              color: '#260655',
              font: {
                size: 25
              }
            },
            legend: {
              display: true,
              labels: {
                color: 'rgb(255, 99, 132)',
                font: {
                  size: 20
                }
              },
              position: 'bottom',
              align: 'center',
              padding: {
                left: 50
              }
            }
          },
          maintainAspectRatio: false,
          responsive: true,
        },
        plugins: [plugin],
      });
    }
  },
  async mounted() {
    await this.getAllPreviousAudit();
    this.myChartFive = this.createChart(); // Assign chart instance to myChartFive
  }
}
</script>

