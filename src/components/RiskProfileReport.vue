<template>
  
   <div class="ralloc-table-print" >
    <h2 id="header">Current Audit Planning Risk Profile</h2>
      <div class="chart3-container-expanded-print"><canvas id="riskprofilereport"></canvas></div>
     
    </div>
    <button id="buttonAll" @click="printPageArea('.ralloc-table-print')">DOWNLOAD</button>
  </template>
  
  <script>
  import Chart from 'chart.js/auto';
  import RiskScoringService from '@/services/RiskScoringService';
  import html2canvas from 'html2canvas';
  
  export default {
  name: 'ChartOne',
  data(){
    return{
        unitAssessments:[],
        highRiskCount:0,
        mediumRiskCount:0,
        lowRiskCount:0
        
    }
  },

  methods:{
    async getAllAssessments() {
            try {
            const response = await RiskScoringService.getSummaryScores();
            this.unitAssessments = response.data;
            console.log(this.unitAssessments);
            } catch (error) {
            console.log(error);
            }
        },

        async printPageArea(areaID){
            
            html2canvas(document.querySelector(areaID)).then(function(canvas) {
             // Create a new <a> element
             var link = document.createElement('a');

             // Set attributes for downloading the image
             link.setAttribute("download", "123456.png");
             link.setAttribute("href", canvas.toDataURL("image/png").replace("image/png", "image/octet-stream"));

             // Append the <a> element to the document body
             document.body.appendChild(link);

             // Click on the link to trigger the download
             link.click();

             // Clean up: remove the <a> element from the document body
             document.body.removeChild(link);
           });


       },
  },


 async mounted(){
      
    await this.getAllAssessments();
        this.highRiskCount=0,
        this.mediumRiskCount=0,
        this.lowRiskCount=0

    for(let i=0; i < this.unitAssessments.length; i++){
        if(this.unitAssessments[i].benchmarkResults == 'High Risk'){
            this.highRiskCount++
          
        }
        if(this.unitAssessments[i].benchmarkResults == 'Medium Risk'){
            this.mediumRiskCount++
          
        }

        if(this.unitAssessments[i].benchmarkResults == 'Low Risk'){
            this.lowRiskCount++
          
        }

        console.log(this.highRiskCount)

    }
    
    const ctx = document.getElementById('riskprofilereport');
       
    const data = {labels:
         [
         'High Risk','Medium Risk','Low Risk'
        ],
        datasets: [{
            label: 'Audit Issues',
            data: [this.highRiskCount,this.mediumRiskCount,this.lowRiskCount],
            backgroundColor: [
            'rgb(242, 143, 143)',
            'rgb(243, 243, 141)',
            'rgb(146, 246, 99)',
            
            
            ],
            hoverOffset: 4
            },
           
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
        // const doughnutLabel = {
        //   id:'pie',

        //   //beforeDatasetsDraw(chart, args, options) { ... }: This is a callback function that will be executed before drawing datasets on the chart. 
        //   //It takes three parameters: chart, args, and options.
        //   beforeDatasetsDraw(chart, args,options){
        //   // const { ctx } = chart;: This line extracts the ctx (context) property from the chart object using destructuring assignment. 
        //   // The ctx is the rendering context of the canvas on which the chart is drawn.
        //     const{ctx} = chart;
        //     //This saves the current state of the canvas context.
        //     ctx.save();
        //     //const xCoor = chart.getDatasetMeta(0).data[0].x;: This retrieves the x-coordinate of the first data point in the first dataset of the chart which has the center coordinate.
        //     //const yCoor = chart.getDatasetMeta(0).data[0].y;: This retrieves the y-coordinate of the first data point in the first dataset of the chart which has the center coordinate.
        //     // const xCoor = chart.getDatasetMeta(0).data[0].x;
        //     // const yCoor = chart.getDatasetMeta(0).data[0].y;
        //     ctx.font ='bold 20px sans-serif';
        //     ctx.fillStyle=options.color||'#260655';
        //     ctx.textAlign='center';
        //     ctx.textBaseline = 'middle';
        //     // ctx.fillText("Total Issues: " + data.datasets[0].data.reduce((total, count) => total + count, 0), xCoor, yCoor - 5);
        //     // ctx.fillText("Total Incidents: " + data.datasets[1].data.reduce((total, count) => total + count, 0), xCoor, yCoor +15);           
        //   }
        // }
          
      const myChartThree = new Chart(ctx,{
          type: 'pie',
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
                    display: false,
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
          plugins:[plugin],
      });
  
    myChartThree;

    
  
  }
   
  }
  
  
  </script>
  
  <style scoped>
   @media print{
    @page {
        size: 8.5in 11in;
        margin: 1in;

    }

 .ralloc-table-print{
  display:flex;
    flex-direction: column;
    /* justify-content: center; */
    /* align-items: center; */
    width:90%;
    height:90%;
    padding: 20px;
    margin: 20px auto;
    border:1px;
    border-style:solid;   
    border-radius: 10px;   
}
}
  </style>