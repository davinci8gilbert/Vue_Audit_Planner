<template>
    <div class="ralloc-table-print" >
        <h2 id="header">Previous Year Vs Current Year Risk Profile Per Sector</h2>
      <div class="chartsector-container-expanded-print"><canvas id="sectorriskprofilecompare"></canvas></div>
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
            highRiskCountPrev:new Array(11).fill(0),
            mediumRiskCountPrev:new Array(11).fill(0),
            lowRiskCountPrev:new Array(11).fill(0),
            highRiskCountCurr:new Array(11).fill(0),
            mediumRiskCountCurr:new Array(11).fill(0),
            lowRiskCountCurr:new Array(11).fill(0),

          }
      },
  
      methods:{

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
  
          const ctx = document.getElementById('sectorriskprofilecompare');
  
          const labels = ['GM','CFS','Operations','HC','Finance','RM','Strategy','Legal','CCO','Compliance','Technology']
  
          
          for(let i=0; i < this.prevauditAll.length; i++){
          if(this.prevauditAll[i].auditee.sector == 'Global Markets'){
            if(this.prevauditAll[i].auditPlanRiskRating=="High Risk"){
                this.highRiskCountPrev[0]++;
            }
            else if(this.prevauditAll[i].auditPlanRiskRating=="Medium Risk"){
                this.mediumRiskCountPrev[0]++;
            } 
            else{
                this.lowRiskCountPrev[0]++;
            }
        }
        if(this.prevauditAll[i].auditee.sector == 'Community Financial Services'){
            if(this.prevauditAll[i].auditPlanRiskRating=="High Risk"){
                this.highRiskCountPrev[1]++;
            }
            else if(this.prevauditAll[i].auditPlanRiskRating=="Medium Risk"){
                this.mediumRiskCountPrev[1]++;
            } 
            else{
                this.lowRiskCountPrev[1]++;
            }
        }

        if(this.prevauditAll[i].auditee.sector == 'Operations'){
            if(this.prevauditAll[i].auditPlanRiskRating=="High Risk"){
                this.highRiskCountPrev[2]++;
            }
            else if(this.prevauditAll[i].auditPlanRiskRating=="Medium Risk"){
                this.mediumRiskCountPrev[2]++;
            } 
            else{
                this.lowRiskCountPrev[2]++;
            }
        }

        if(this.prevauditAll[i].auditee.sector == 'Human Capital'){
            if(this.prevauditAll[i].auditPlanRiskRating=="High Risk"){
                this.highRiskCountPrev[3]++;
            }
            else if(this.prevauditAll[i].auditPlanRiskRating=="Medium Risk"){
                this.mediumRiskCountPrev[3]++;
            } 
            else{
                this.lowRiskCountPrev[3]++;
            }
        }

        if(this.prevauditAll[i].auditee.sector == 'Finance'){
            if(this.prevauditAll[i].auditPlanRiskRating=="High Risk"){
                this.highRiskCountPrev[4]++;
            }
            else if(this.prevauditAll[i].auditPlanRiskRating=="Medium Risk"){
                this.mediumRiskCountPrev[4]++;
            } 
            else{
                this.lowRiskCountPrev[4]++;
            }
        }

        if(this.prevauditAll[i].auditee.sector == 'Risk Management'){
            if(this.prevauditAll[i].auditPlanRiskRating=="High Risk"){
                this.highRiskCountPrev[5]++;
            }
            else if(this.prevauditAll[i].auditPlanRiskRating=="Medium Risk"){
                this.mediumRiskCountPrev[5]++;
            } 
            else{
                this.lowRiskCountPrev[5]++;
            }
        }

        if(this.prevauditAll[i].auditee.sector == 'Strategy'){
            if(this.prevauditAll[i].auditPlanRiskRating=="High Risk"){
                this.highRiskCountPrev[6]++;
            }
            else if(this.prevauditAll[i].auditPlanRiskRating=="Medium Risk"){
                this.mediumRiskCountPrev[6]++;
            } 
            else{
                this.lowRiskCountPrev[6]++;
            }
        } 
        
        if(this.prevauditAll[i].auditee.sector == 'Legal & Corporate Office'){
            if(this.prevauditAll[i].auditPlanRiskRating=="High Risk"){
                this.highRiskCountPrev[7]++;
            }
            else if(this.prevauditAll[i].auditPlanRiskRating=="Medium Risk"){
                this.mediumRiskCountPrev[7]++;
            } 
            else{
                this.lowRiskCountPrev[7]++;
            }
        }

        if(this.prevauditAll[i].auditee.sector == 'Country Corporate Office'){
            if(this.prevauditAll[i].auditPlanRiskRating=="High Risk"){
                this.highRiskCountPrev[8]++;
            }
            else if(this.prevauditAll[i].auditPlanRiskRating=="Medium Risk"){
                this.mediumRiskCountPrev[8]++;
            } 
            else{
                this.lowRiskCountPrev[8]++;
            }
        }

        if(this.prevauditAll[i].auditee.sector == 'Compliance'){
            if(this.prevauditAll[i].auditPlanRiskRating=="High Risk"){
                this.highRiskCountPrev[9]++;
            }
            else if(this.prevauditAll[i].auditPlanRiskRating=="Medium Risk"){
                this.mediumRiskCountPrev[9]++;
            } 
            else{
                this.lowRiskCountPrev[9]++;
            }
        }

        if(this.prevauditAll[i].auditee.sector == 'Technology'){
            if(this.prevauditAll[i].auditPlanRiskRating=="High Risk"){
                this.highRiskCountPrev[10]++;
            }
            else if(this.prevauditAll[i].auditPlanRiskRating=="Medium Risk"){
                this.mediumRiskCountPrev[10]++;
            } 
            else{
                this.lowRiskCountPrev[10]++;
            }
        }

    }

    
          
    for(let i=0; i < this.currentaudAll.length; i++){
          if(this.currentaudAll[i].auditee.sector == 'Global Markets'){
            if(this.currentaudAll[i].benchmarkResults=="High Risk"){
                this.highRiskCountCurr[0]++;
            }
            else if(this.currentaudAll[i].benchmarkResults=="Medium Risk"){
                this.mediumRiskCountCurr[0]++;
            } 
            else{
                this.lowRiskCountCurr[0]++;
            }
        }
        if(this.currentaudAll[i].auditee.sector == 'Community Financial Services'){
            if(this.currentaudAll[i].benchmarkResults=="High Risk"){
                this.highRiskCountCurr[1]++;
            }
            else if(this.currentaudAll[i].benchmarkResults=="Medium Risk"){
                this.mediumRiskCountCurr[1]++;
            } 
            else{
                this.lowRiskCountCurr[1]++;
            }
        }

        if(this.currentaudAll[i].auditee.sector == 'Operations'){
            if(this.currentaudAll[i].benchmarkResults=="High Risk"){
                this.highRiskCountCurr[2]++;
            }
            else if(this.currentaudAll[i].benchmarkResults=="Medium Risk"){
                this.mediumRiskCountCurr[2]++;
            } 
            else{
                this.lowRiskCountCurr[2]++;
            }
        }

        if(this.currentaudAll[i].auditee.sector == 'Human Capital'){
            if(this.currentaudAll[i].benchmarkResults=="High Risk"){
                this.highRiskCountCurr[3]++;
            }
            else if(this.currentaudAll[i].benchmarkResults=="Medium Risk"){
                this.mediumRiskCountCurr[3]++;
            } 
            else{
                this.lowRiskCountCurr[3]++;
            }
        }

        if(this.currentaudAll[i].auditee.sector == 'Finance'){
            if(this.currentaudAll[i].benchmarkResults=="High Risk"){
                this.highRiskCountCurr[4]++;
            }
            else if(this.currentaudAll[i].benchmarkResults=="Medium Risk"){
                this.mediumRiskCountCurr[4]++;
            } 
            else{
                this.lowRiskCountCurr[4]++;
            }
        }

        if(this.currentaudAll[i].auditee.sector == 'Risk Management'){
            if(this.currentaudAll[i].benchmarkResults=="High Risk"){
                this.highRiskCountCurr[5]++;
            }
            else if(this.currentaudAll[i].benchmarkResults=="Medium Risk"){
                this.mediumRiskCountCurrv[5]++;
            } 
            else{
                this.lowRiskCountCurr[5]++;
            }
        }

        if(this.currentaudAll[i].auditee.sector == 'Strategy'){
            if(this.currentaudAll[i].benchmarkResults=="High Risk"){
                this.highRiskCountCurr[6]++;
            }
            else if(this.currentaudAll[i].benchmarkResults=="Medium Risk"){
                this.mediumRiskCountCurr[6]++;
            } 
            else{
                this.lowRiskCountCurr[6]++;
            }
        } 
        
        if(this.currentaudAll[i].auditee.sector == 'Legal & Corporate Office'){
            if(this.currentaudAll[i].benchmarkResults=="High Risk"){
                this.highRiskCountCurr[7]++;
            }
            else if(this.currentaudAll[i].benchmarkResults=="Medium Risk"){
                this.mediumRiskCountCurr[7]++;
            } 
            else{
                this.lowRiskCountCurr[7]++;
            }
        }

        if(this.currentaudAll[i].auditee.sector == 'Country Corporate Office'){
            if(this.currentaudAll[i].benchmarkResults=="High Risk"){
                this.highRiskCountCurr[8]++;
            }
            else if(this.currentaudAll[i].benchmarkResults=="Medium Risk"){
                this.mediumRiskCountCurr[8]++;
            } 
            else{
                this.lowRiskCountCurr[8]++;
            }
        }

        if(this.currentaudAll[i].auditee.sector == 'Compliance'){
            if(this.currentaudAll[i].benchmarkResults=="High Risk"){
                this.highRiskCountCurr[9]++;
            }
            else if(this.currentaudAll[i].benchmarkResults=="Medium Risk"){
                this.mediumRiskCountCurr[9]++;
            } 
            else{
                this.lowRiskCountCurr[9]++;
            }
        }

        if(this.currentaudAll[i].auditee.sector == 'Technology'){
            if(this.currentaudAll[i].benchmarkResults=="High Risk"){
                this.highRiskCountCurr[10]++;
            }
            else if(this.currentaudAll[i].benchmarkResults=="Medium Risk"){
                this.mediumRiskCountCurr[10]++;
            } 
            else{
                this.lowRiskCountCurr[10]++;
            }
        }

    }
    // console.log('hello'+)

        
  
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
          datasets: [
    {
        label: 'Low Risk - Previous',
        data: this.lowRiskCountPrev,
        type:'bar',
        backgroundColor: [
        
        // 'green'
        '#b6f3e9',
        ],
        borderColor: [
        // 'rgb(146, 246, 99)',
        
        ],
        // borderWidth: 2,
        borderRadius: {
            // bottomLeft: 20,
            // topRight: 20
        },
        borderSkipped: false,
        categoryPercentage: 1,
        barPercentage: .7,
        stack:"Previous"
    },   

    {
        label: 'Medium Risk - Previous',
        data: this.mediumRiskCountPrev,
        type:'bar',
        backgroundColor: [
        
        '#41eace',
        ],
        borderColor: [
        'rgb(243, 243, 141)',
        
        ],
        // borderWidth: 2,
        borderRadius: {
            // topLeft: 20,
            // topRight: 20
        },
        borderSkipped: false,
        categoryPercentage: 1,
        barPercentage: .7,
        stack:"Previous"
    },
    
    {
        label: 'High Risk - Previous',
        data: this.highRiskCountPrev,
        type:'bar',
        backgroundColor: [
        // 'rgb(242, 143, 143)',
        '#045548'
        
        ],
        borderColor: [
        // 'blue'
        ],
        // borderWidth: 1,
        borderRadius: {
            // bottomLeft: 20,
            // bottomRight: 20
        },
        borderSkipped: false,
        categoryPercentage: 1,
        barPercentage: .7,
        stack:"Previous"
     }, 

     {
        label: 'Low Risk - Current',
        data: this.lowRiskCountCurr,
        type:'bar',
        backgroundColor: [
        
        '#e9a4f4'
        // 'rgb(146, 246, 99)',
        ],
        borderColor: [
        // 'rgb(146, 246, 99)',
        
        ],
        // borderWidth: 2,
        borderRadius: {
            // bottomLeft: 20,
            // topRight: 20
        },
        borderSkipped: false,
        categoryPercentage: 1,
        barPercentage: .7,
        stack:"Current"
    },   

    {
        label: 'Medium Risk - Current',
        data: this.mediumRiskCountCurr,
        type:'bar',
        backgroundColor: [
        '#bf41d2'
        // 'rgb(243, 243, 141)',
        ],
        borderColor: [
        '#bf41d2',
        
        ],
        // borderWidth: 2,
        borderRadius: {
            // topLeft: 20,
            // topRight: 20
        },
        borderSkipped: false,
        categoryPercentage: 1,
        barPercentage: .7,
        stack:"Current"
    },
    
    {
        label: 'High Risk - Current',
        data: this.highRiskCountCurr,
        type:'bar',
        backgroundColor: [
        // 'rgb(242, 143, 143)',
        '#5d0d6a'
        
        ],
        borderColor: [
        // 'blue'
        ],
        // borderWidth: 1,
        borderRadius: {
            // bottomLeft: 20,
            // bottomRight: 20
        },
        borderSkipped: false,
        categoryPercentage: 1,
        barPercentage: .7,
        stack:"Current"
     },

        ],
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
                        //   ticks:{
                        //     display:false,
                        //     font:{
                        //     size: 20
                        //       }

                        //  }
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
  #sectorriskprofilecompare{
    border-radius: 20px;
  }

  .chartsector-container-expanded-print{
  position:relative;
  border-radius: 20%;
  width:80%;
  height: 600px;
  margin:auto;
  margin-top:30px;
  margin-bottom:50px;
  
}
  </style>