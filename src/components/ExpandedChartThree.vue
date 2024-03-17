<template>
    <div class="backdropCharts" @click="handleBackdropClick()">
      <div class="chart3-container-expanded" @click="collapseChart(false)"><canvas id="myChartThreeExpanded" @click="collapseChart(false)"></canvas></div>
     
    </div>
  </template>
  
  <script>
  import Chart from 'chart.js/auto';
  import PreviousService from '@/services/PreviousService';
  
  export default {
  name: 'ChartOne',
  props:{
    collapseChart:{
        type:Function
    }
  },
  data(){
    return{
        prevauditAll:[],
        gmIssueCount:0,
        cfsIssueCount:0,
        operationsIssueCount:0,
        hcIssueCount:0,
        financeIssueCount:0,
        rmIssueCount:0,
        strategyIssueCount:0,
        legalIssueCount:0,
        ccoIssueCount:0,
        compliancesIssueCount:0,
        technologyIssueCount:0,      
        gmIncidentCount:0,
        cfsIncidentCount:0,
        operationsIncidentCount:0,
        hcIncidentCount:0,
        financeIncidentCount:0,
        rmIncidentCount:0,
        strategyIncidentCount:0,
        legalIncidentCount:0,
        ccoIncidentCount:0,
        compliancesIncidentCount:0,
        technologyIncidentCount:0,
        myChartThree:null,
    }
  },

  methods:{
    handleBackdropClick() {    
      try {
        
        if (this.myChartThree) {
          this.myChartThree.destroy();
          
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
          for(let i=0; i < this.prevauditAll.length; i++){
        if(this.prevauditAll[i].auditee.sector == 'Global Markets'){
          this.gmIssueCount+=(this.prevauditAll[i].numberHighRiskIssues+this.prevauditAll[i].numberMediumRiskIssues+this.prevauditAll[i].numberLowRiskIssues);
          this.gmIncidentCount+=(this.prevauditAll[i].numberHighRiskIncidents+this.prevauditAll[i].numberMediumRiskIncidents+this.prevauditAll[i].numberLowRiskIncidents);
          
        }
        if(this.prevauditAll[i].auditee.sector == 'Community Financial Services'){
          this.cfsIssueCount+=(this.prevauditAll[i].numberHighRiskIssues+this.prevauditAll[i].numberMediumRiskIssues+this.prevauditAll[i].numberLowRiskIssues);
          this.cfsIncidentCount+=(this.prevauditAll[i].numberHighRiskIncidents+this.prevauditAll[i].numberMediumRiskIncidents+this.prevauditAll[i].numberLowRiskIncidents);
        }

        if(this.prevauditAll[i].auditee.sector == 'Operations'){
          this.operationsIssueCount+=(this.prevauditAll[i].numberHighRiskIssues+this.prevauditAll[i].numberMediumRiskIssues+this.prevauditAll[i].numberLowRiskIssues);
          this.operationsIncidentCount+=(this.prevauditAll[i].numberHighRiskIncidents+this.prevauditAll[i].numberMediumRiskIncidents+this.prevauditAll[i].numberLowRiskIncidents);
        }

        if(this.prevauditAll[i].auditee.sector == 'Human Capital'){
          this.hcIssueCount+=(this.prevauditAll[i].numberHighRiskIssues+this.prevauditAll[i].numberMediumRiskIssues+this.prevauditAll[i].numberLowRiskIssues);
          this.hcIncidentCount+=(this.prevauditAll[i].numberHighRiskIncidents+this.prevauditAll[i].numberMediumRiskIncidents+this.prevauditAll[i].numberLowRiskIncidents);
        }

        if(this.prevauditAll[i].auditee.sector == 'Finance'){
          this.financeIssueCount+=(this.prevauditAll[i].numberHighRiskIssues+this.prevauditAll[i].numberMediumRiskIssues+this.prevauditAll[i].numberLowRiskIssues);
          this.financeIncidentCount+=(this.prevauditAll[i].numberHighRiskIncidents+this.prevauditAll[i].numberMediumRiskIncidents+this.prevauditAll[i].numberLowRiskIncidents);
        }

        if(this.prevauditAll[i].auditee.sector == 'Risk Management'){
          this.rmIssueCount+=(this.prevauditAll[i].numberHighRiskIssues+this.prevauditAll[i].numberMediumRiskIssues+this.prevauditAll[i].numberLowRiskIssues);
          this.rmIncidentCount+=(this.prevauditAll[i].numberHighRiskIncidents+this.prevauditAll[i].numberMediumRiskIncidents+this.prevauditAll[i].numberLowRiskIncidents);
        }

        if(this.prevauditAll[i].auditee.sector == 'Strategy'){
          this.strategyIssueCount+=(this.prevauditAll[i].numberHighRiskIssues+this.prevauditAll[i].numberMediumRiskIssues+this.prevauditAll[i].numberLowRiskIssues);
          this.strategyIncidentCount+=(this.prevauditAll[i].numberHighRiskIncidents+this.prevauditAll[i].numberMediumRiskIncidents+this.prevauditAll[i].numberLowRiskIncidents);
        } 
        
        if(this.prevauditAll[i].auditee.sector == 'Legal & Corporate Office'){
          this.legalIssueCount+=(this.prevauditAll[i].numberHighRiskIssues+this.prevauditAll[i].numberMediumRiskIssues+this.prevauditAll[i].numberLowRiskIssues);
          this.legalIncidentCount+=(this.prevauditAll[i].numberHighRiskIncidents+this.prevauditAll[i].numberMediumRiskIncidents+this.prevauditAll[i].numberLowRiskIncidents);
        }

        if(this.prevauditAll[i].auditee.sector == 'Country Corporate Office'){
          this.ccoIssueCount+=(this.prevauditAll[i].numberHighRiskIssues+this.prevauditAll[i].numberMediumRiskIssues+this.prevauditAll[i].numberLowRiskIssues);
          this.ccoIncidentCount+=(this.prevauditAll[i].numberHighRiskIncidents+this.prevauditAll[i].numberMediumRiskIncidents+this.prevauditAll[i].numberLowRiskIncidents);
        }

        if(this.prevauditAll[i].auditee.sector == 'Compliance'){
          this.compliancesIssueCount+=(this.prevauditAll[i].numberHighRiskIssues+this.prevauditAll[i].numberMediumRiskIssues+this.prevauditAll[i].numberLowRiskIssues);
          this.compliancesIncidentCount+=(this.prevauditAll[i].numberHighRiskIncidents+this.prevauditAll[i].numberMediumRiskIncidents+this.prevauditAll[i].numberLowRiskIncidents);
        }

        if(this.prevauditAll[i].auditee.sector == 'Technology'){
          this.technologyIssueCount+=(this.prevauditAll[i].numberHighRiskIssues+this.prevauditAll[i].numberMediumRiskIssues+this.prevauditAll[i].numberLowRiskIssues);
          this.technologyIncidentCount+=(this.prevauditAll[i].numberHighRiskIncidents+this.prevauditAll[i].numberMediumRiskIncidents+this.prevauditAll[i].numberLowRiskIncidents);
        }

    }
    
    const ctx = document.getElementById('myChartThreeExpanded');
       
    const data = {labels:
         [
         'GM','CFS','Operations','HC','Finance','RM','Strategy','Legal','CCO','Compliance','Technology'
        ],
        datasets: [{
            label: 'Audit Issues',
            data: [this.gmIssueCount,this.cfsIssueCount, this.operationsIssueCount, this.hcIssueCount,this.financeIssueCount, 
            this.rmIssueCount, this.strategyIssueCount,this.legalIssueCount, this.ccoIssueCount, this.compliancesIssueCount,this.technologyIssueCount],
            backgroundColor: [
            '#a230b4',
            '#584214',
            '#71cb2d',
            '#36ea5a',
            '#36e8d3',
            '#32b6e2',
            '#b8a6e7',
            '#da27a1',
            '#db299a',
            '#e0354e',
            '#f69191',
            
            ],
            hoverOffset: 4
            },
            {
            label: 'Incidents',
            data: [this.gmIncidentCount,this.cfsIncidentCount, this.operationsIncidentCount, this.hcIncidentCount,this.financeIncidentCount, 
            this.rmIncidentCount, this.strategyIncidentCount,this.legalIncidentCount, this.ccoIncidentCount, this.compliancesIncidentCount,this.technologyIncidentCount],
            backgroundColor: [
            '#a230b4',
            '#584214',
            '#71cb2d',
            '#36ea5a',
            '#36e8d3',
            '#32b6e2',
            '#b8a6e7',
            '#da27a1',
            '#db299a',
            '#e0354e',
            '#f69191',
            ],
            hoverOffset: 4
            }
        ]
                
        };

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

          // this is to set the text inside the doughnut

          //const doughnutLabel = { ... }: This declares a constant named doughnutLabel, which is an object containing the configuration for the plugin.
        const doughnutLabel = {
          id:'doughnutLabel',

          //beforeDatasetsDraw(chart, args, options) { ... }: This is a callback function that will be executed before drawing datasets on the chart. 
          //It takes three parameters: chart, args, and options.
          beforeDatasetsDraw(chart, args,options){
          // const { ctx } = chart;: This line extracts the ctx (context) property from the chart object using destructuring assignment. 
          // The ctx is the rendering context of the canvas on which the chart is drawn.
            const{ctx} = chart;
            //This saves the current state of the canvas context.
            ctx.save();
            //const xCoor = chart.getDatasetMeta(0).data[0].x;: This retrieves the x-coordinate of the first data point in the first dataset of the chart which has the center coordinate.
            //const yCoor = chart.getDatasetMeta(0).data[0].y;: This retrieves the y-coordinate of the first data point in the first dataset of the chart which has the center coordinate.
            const xCoor = chart.getDatasetMeta(0).data[0].x;
            const yCoor = chart.getDatasetMeta(0).data[0].y;
            ctx.font ='bold 20px sans-serif';
            ctx.fillStyle=options.color||'#260655';
            ctx.textAlign='center';
            ctx.textBaseline = 'middle';
            ctx.fillText("Total Issues: " + data.datasets[0].data.reduce((total, count) => total + count, 0), xCoor, yCoor - 5);
            ctx.fillText("Total Incidents: " + data.datasets[1].data.reduce((total, count) => total + count, 0), xCoor, yCoor +15);           
          }
        }
          
      return new Chart(ctx,{
          type: 'doughnut',
          data: data,
          options: { 
              plugins:{

                legend: {
                  display: true,
                  labels: {
                      color: '#260655)',
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
                  
             },
                 title: {
                    display: true,
                    text: 'Overall No. of Incidents and Audit Issues By Sector',
                    color: '#260655',
                    font:{
                      size: 25
                    }
                }

              },
              maintainAspectRatio: false, // Set to false to allow adjusting the chart size
              responsive: true,
          },
          plugins:[plugin,doughnutLabel],
      });
  
    // myChartThree;
        }
  },


 async mounted(){
      
    await this.getAllPreviousAudit();
    this.myChartThree=this.createChart();

   

    
  
  }
   
  }
  
  
  </script>
  
  <style>
  
  </style>