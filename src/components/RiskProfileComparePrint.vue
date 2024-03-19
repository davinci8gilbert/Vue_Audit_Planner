<template>
    <div class="ralloc-table-print" >
        <h2 id="header">Previous Year Vs Current Year Risk Profile</h2>
      <div class="chart3-container-expanded-print"><canvas id="riskprofilecompare"></canvas></div>
    </div>
    <button id="buttonAll" @click="printPageArea('.ralloc-table-print')">DOWNLOAD</button>
  </template>
  
  <script>
  import Chart from 'chart.js/auto';
  import PreviousService from '@/services/PreviousService';
  import RiskScoringService from '@/services/RiskScoringService';
  import html2canvas from 'html2canvas';
  
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
          currentaudAll:[],
          highRiskCountPrev:0,
          mediumRiskCountPrev:0,
          lowRiskCountPrev:0,
          highRiskCountCurr:0,
          mediumRiskCountCurr:0,
          lowRiskCountCurr:0,

          }
      },
  
      methods:{
  
        async printPageArea(areaID){
            
            html2canvas(document.querySelector(areaID)).then(function(canvas) {
             // Create a new <a> element
             var link = document.createElement('a');

             // Set attributes for downloading the image
             link.setAttribute("download", "PrevYear_Vs_CurrYear_Risk_Profile.png");
             link.setAttribute("href", canvas.toDataURL("image/png").replace("image/png", "image/octet-stream"));

             // Append the <a> element to the document body
             document.body.appendChild(link);

             // Click on the link to trigger the download
             link.click();

             // Clean up: remove the <a> element from the document body
             document.body.removeChild(link);
           });


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

          async getAllAssessments() {
            try {
            const response = await RiskScoringService.getSummaryScores();
            this.currentaudAll = response.data;
            console.log(this.currentaudAlls);
            } catch (error) {
            console.log(error);
            }
        },
          
  
      },
  
      async mounted(){
  
          await this.getAllPreviousAudit();

          await this.getAllAssessments();
  
          const ctx = document.getElementById('riskprofilecompare');
  
          const labels = ['High Risk','Medium Risk','Low Risk']
  
          this.highRiskCountPrev=0;
          this.mediumRiskCountPrev=0;
          this.lowRiskCountPrev=0;
          this.highRiskCountCurr=0;
          this.mediumRiskCountCurr=0;
          this.lowRiskCountCur=0;

          for(let i=0; i < this.prevauditAll.length; i++){
              
              if(this.prevauditAll[i].auditPlanRiskRating == 'High Risk'){
                  this.highRiskCountPrev++;
                  
              }
              if(this.prevauditAll[i].auditPlanRiskRating == 'Medium Risk'){
                this.mediumRiskCountPrev++;
              }
              
              if(this.prevauditAll[i].auditPlanRiskRating == 'Low Risk'){
                this.lowRiskCountPrev++;
              }       
  
          }

          

          for(let i=0; i < this.currentaudAll.length; i++){
            if(this.currentaudAll[i].benchmarkResults == 'High Risk'){
                this.highRiskCountCurr++
            
            }
            if(this.currentaudAll[i].benchmarkResults == 'Medium Risk'){
                this.mediumRiskCountCurr++
            
            }

            if(this.currentaudAll[i].benchmarkResults == 'Low Risk'){
                this.lowRiskCountCurr++
            
            }

            console.log(this.highRiskCount)

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
              label: 'Previous Year',
              data: [this.lowRiskCountPrev,this.mediumRiskCountPrev,this.highRiskCountPrev],
              fill: false,
              backgroundColor: [
                    
                    '#41eace',
              
              ],
              borderColor: [
              // 'rgb(255, 99, 132)',
              // 'rgb(255, 159, 64)',
              // 'rgb(255, 205, 86)',
              // 'rgb(75, 192, 192)',
              // 'rgb(54, 162, 235)',
              // 'rgb(153, 102, 255)',
              // 'rgb(255, 192, 203)'
              ],
              borderWidth: 0,
              borderRadius: 20,
              // {
              //     topLeft: 20,
              //     bottomLeft: 20
              // },
              borderSkipped: false
          }, {
              axis:'y',
              label: 'Current Year',
              data: [this.lowRiskCountCurr,this.mediumRiskCountCurr,this.highRiskCountCurr],
              backgroundColor: [
              
              '#a230b4',
              
              ],
              borderColor: [
              // 'rgb(243, 243, 141)'
              // 'rgb(255, 99, 132)',
              // 'rgb(255, 159, 64)',
              // 'rgb(255, 205, 86)',
              // 'rgb(75, 192, 192)',
              // 'rgb(54, 162, 235)',
              // 'rgb(153, 102, 255)',
              // 'rgb(255, 192, 203)'
              ],
              borderWidth: 0,
              borderRadius: 20,
              
              // {
              //     topRight: 20,
              //     bottomRight: 20
              // },
              borderSkipped: false
          },
  
      
      ]
          };
              
          const myChartTwo = new Chart(ctx,{
              type: 'bar',
              data: data,
              options: { 
                  indexAxis:'x',
                  plugins:{
                      title: {
                      display: false,
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
                          stacked: false,
                          ticks:{
                      display:true,
                      font:{
                         size: 20
                       }

                     }
                      },
  
                      y: {
                          stacked: false,
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
  
      myChartTwo;
          }
  }
  </script>
  
  <style scoped>
  #riskprofilecompare{
    border-radius: 20px;
  }

  .chart3-container-expanded-print{
    position:relative;
    border-radius: 20%;
    width:900px;
    height: 600px;
    margin:auto;
    margin-top:30px;
    margin-bottom:50px;
  }
  </style>