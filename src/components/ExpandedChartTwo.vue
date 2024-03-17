<template>
    <div class="backdropCharts" @click="handleBackdropClick()">
      <div class="chart2-container-expanded" @click="collapseChart(false)"><canvas id="myChartTwoExpanded" @click="collapseChart(false)"></canvas></div>
    </div>
  </template>
  
  <script>
  import Chart from 'chart.js/auto';
  import PreviousService from '@/services/PreviousService';
  
  export default {
      name: 'ChartTwo',
      props:{
        collapseChart: {
            type:Function
        }
      },
      data(){
          return{
          prevauditAll:[],
          highRiskCount:new Array(11).fill(0),
          mediumRiskCount:new Array(11).fill(0),
          lowRiskCount:new Array(11).fill(0),
          myChartTwo:null
          }
      },
  
      methods:{
        handleBackdropClick() {
            try {
                // Check if myChart is defined
                if (this.myChartTwo) {
                this.myChartTwo.destroy();
                
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

          createChart(){
            const ctx = document.getElementById('myChartTwoExpanded');
  
  const labels = ['GM','CFS','Operations','HC','Finance','RM','Strategy','Legal','CCO','Compliance','Technology']

  for(let i=0; i < this.prevauditAll.length; i++){
      
      if(this.prevauditAll[i].auditee.sector == 'Global Markets'){
          this.highRiskCount[0]+=this.prevauditAll[i].numberHighRiskIssues;
          this.mediumRiskCount[0]+=this.prevauditAll[i].numberMediumRiskIssues;
          this.lowRiskCount[0]+=this.prevauditAll[i].numberLowRiskIssues;
      }

      if(this.prevauditAll[i].auditee.sector == 'Community Financial Services'){
          this.highRiskCount[1]+=this.prevauditAll[i].numberHighRiskIssues;
          this.mediumRiskCount[1]+=this.prevauditAll[i].numberMediumRiskIssues;
          this.lowRiskCount[1]+=this.prevauditAll[i].numberLowRiskIssues;
  }

  if(this.prevauditAll[i].auditee.sector == 'Operations'){
          this.highRiskCount[2]+=this.prevauditAll[i].numberHighRiskIssues;
          this.mediumRiskCount[2]+=this.prevauditAll[i].numberMediumRiskIssues;
          this.lowRiskCount[2]+=this.prevauditAll[i].numberLowRiskIssues;
  }

  if(this.prevauditAll[i].auditee.sector == 'Human Capital'){
          this.highRiskCount[3]+=this.prevauditAll[i].numberHighRiskIssues;
          this.mediumRiskCount[3]+=this.prevauditAll[i].numberMediumRiskIssues;
          this.lowRiskCount[3]+=this.prevauditAll[i].numberLowRiskIssues;
  }

  if(this.prevauditAll[i].auditee.sector == 'Finance'){
          this.highRiskCount[4]+=this.prevauditAll[i].numberHighRiskIssues;
          this.mediumRiskCount[4]+=this.prevauditAll[i].numberMediumRiskIssues;
          this.lowRiskCount[4]+=this.prevauditAll[i].numberLowRiskIssues;
  }

  if(this.prevauditAll[i].auditee.sector == 'Risk Management'){
          this.highRiskCount[5]+=this.prevauditAll[i].numberHighRiskIssues;
          this.mediumRiskCount[5]+=this.prevauditAll[i].numberMediumRiskIssues;
          this.lowRiskCount[5]+=this.prevauditAll[i].numberLowRiskIssues;
  }

  if(this.prevauditAll[i].auditee.sector == 'Strategy'){
          this.highRiskCount[6]+=this.prevauditAll[i].numberHighRiskIssues;
          this.mediumRiskCount[6]+=this.prevauditAll[i].numberMediumRiskIssues;
          this.lowRiskCount[6]+=this.prevauditAll[i].numberLowRiskIssues;
  } 
  
  if(this.prevauditAll[i].auditee.sector == 'Legal & Corporate Office'){
          this.highRiskCount[7]+=this.prevauditAll[i].numberHighRiskIssues;
          this.mediumRiskCount[7]+=this.prevauditAll[i].numberMediumRiskIssues;
          this.lowRiskCount[7]+=this.prevauditAll[i].numberLowRiskIssues;
  }

  if(this.prevauditAll[i].auditee.sector == 'Country Corporate Office'){
          this.highRiskCount[8]+=this.prevauditAll[i].numberHighRiskIssues;
          this.mediumRiskCount[8]+=this.prevauditAll[i].numberMediumRiskIssues;
          this.lowRiskCount[8]+=this.prevauditAll[i].numberLowRiskIssues;
  }

  if(this.prevauditAll[i].auditee.sector == 'Compliance'){
          this.highRiskCount[9]+=this.prevauditAll[i].numberHighRiskIssues;
          this.mediumRiskCount[9]+=this.prevauditAll[i].numberMediumRiskIssues;
          this.lowRiskCount[9]+=this.prevauditAll[i].numberLowRiskIssues;
  }

  if(this.prevauditAll[i].auditee.sector == 'Technology'){
          this.highRiskCount[10]+=this.prevauditAll[i].numberHighRiskIssues;
          this.mediumRiskCount[10]+=this.prevauditAll[i].numberMediumRiskIssues;
          this.lowRiskCount[10]+=this.prevauditAll[i].numberLowRiskIssues;
  }

  }

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
  const data = {
  labels: labels,
  datasets: [{
      axis:'y',
      label: 'Low Risk',
      data: this.lowRiskCount,
      fill: false,
      backgroundColor: [
      'rgb(146, 246, 99)',
      
      ],
      borderColor: [
     
      ],
      borderWidth: 0,
      borderRadius: 20,
      
      borderSkipped: false
  }, {
      axis:'y',
      label: 'Medium Risk',
      data: this.mediumRiskCount,
      backgroundColor: [
      
      'rgb(243, 243, 141)',
      ],
      borderColor: [
     
      ],
      borderWidth: 0,
      borderRadius: 0,
      
    
      borderSkipped: false
  },

  {
      axis:'y',
      label: 'High Risk',
      data: this.highRiskCount,
      backgroundColor: [
      
      '#ee4444',
      ],
      borderColor: [
     
      ],
      borderWidth: 0,
      borderRadius: 0,
      
     
      borderSkipped: false
  }

]
  };
      
  return new Chart(ctx,{
      type: 'bar',
      data: data,
      options: { 
          indexAxis:'y',
          plugins:{
              title: {
              display: true,
              text: 'No. of Audit Issues Per Sector By Risk Rating',
              color: '#260655',
              font:{
              size: 25
            }
              },

              legend: {
                  display: true,
                  labels: {
                  color: '#260655',
                  font:{
                    size: 20
                    }
                  
                      
            },
            position: 'bottom',
            align: 'center',
           
            padding:{
            left:50
           }           
           },
              customCanvasBackgroundColor: {
              color: '#eeebf8',
               }
          },
          maintainAspectRatio: false, // Set to false to allow adjusting the chart size
          responsive: true,
          scales: {
              x: {
                  stacked: true,
                  ticks:{
              display:true,
              font:{
                 size: 20
               }

             }
              },

              y: {
                  stacked: true,
                  ticks:{
              display:true,
              font:{
                 size: 20
               }

             }
              }
          }
      },
      plugins:[plugin],
  });


          }
  
      },
  
      async mounted(){
  
          await this.getAllPreviousAudit();
          this.myChartTwo = this.createChart();
  
          
          }
  }
  </script>
  
  <style>
  
  </style>