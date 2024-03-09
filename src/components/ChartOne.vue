<template>
  <div>
    <div class="chartone-container"><canvas id="myChartOne"></canvas></div>
  </div>
</template>

<script>
import Chart from 'chart.js/auto';
import PreviousService from '@/services/PreviousService';

export default {
name: 'ChartOne',
data(){
    return{
        prevauditAll:[],
        highRiskCount:new Array(11).fill(0),
        mediumRiskCount:new Array(11).fill(0),
        lowRiskCount:new Array(11).fill(0),
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

    const ctx = document.getElementById('myChartOne');

    const labels = ['GM','CFS','Operations','HC','Finance','RM','Strategy','Legal','CCO','Compliance','Technology'];
    for(let i=0; i < this.prevauditAll.length; i++){
        if(this.prevauditAll[i].auditee.sector == 'Global Markets'){
            if(this.prevauditAll[i].auditPlanRiskRating=="High Risk"){
                this.highRiskCount[0]++;
            }
            else if(this.prevauditAll[i].auditPlanRiskRating=="Medium Risk"){
                this.mediumRiskCount[0]++;
            } 
            else{
                this.lowRiskCount[0]++;
            }
        }
        if(this.prevauditAll[i].auditee.sector == 'Community Financial Services'){
            if(this.prevauditAll[i].auditPlanRiskRating=="High Risk"){
                this.highRiskCount[1]++;
            }
            else if(this.prevauditAll[i].auditPlanRiskRating=="Medium Risk"){
                this.mediumRiskCount[1]++;
            } 
            else{
                this.lowRiskCount[1]++;
            }
        }

        if(this.prevauditAll[i].auditee.sector == 'Operations'){
            if(this.prevauditAll[i].auditPlanRiskRating=="High Risk"){
                this.highRiskCount[2]++;
            }
            else if(this.prevauditAll[i].auditPlanRiskRating=="Medium Risk"){
                this.mediumRiskCount[2]++;
            } 
            else{
                this.lowRiskCount[2]++;
            }
        }

        if(this.prevauditAll[i].auditee.sector == 'Human Capital'){
            if(this.prevauditAll[i].auditPlanRiskRating=="High Risk"){
                this.highRiskCount[3]++;
            }
            else if(this.prevauditAll[i].auditPlanRiskRating=="Medium Risk"){
                this.mediumRiskCount[3]++;
            } 
            else{
                this.lowRiskCount[3]++;
            }
        }

        if(this.prevauditAll[i].auditee.sector == 'Finance'){
            if(this.prevauditAll[i].auditPlanRiskRating=="High Risk"){
                this.highRiskCount[4]++;
            }
            else if(this.prevauditAll[i].auditPlanRiskRating=="Medium Risk"){
                this.mediumRiskCount[4]++;
            } 
            else{
                this.lowRiskCount[4]++;
            }
        }

        if(this.prevauditAll[i].auditee.sector == 'Risk Management'){
            if(this.prevauditAll[i].auditPlanRiskRating=="High Risk"){
                this.highRiskCount[5]++;
            }
            else if(this.prevauditAll[i].auditPlanRiskRating=="Medium Risk"){
                this.mediumRiskCount[5]++;
            } 
            else{
                this.lowRiskCount[5]++;
            }
        }

        if(this.prevauditAll[i].auditee.sector == 'Strategy'){
            if(this.prevauditAll[i].auditPlanRiskRating=="High Risk"){
                this.highRiskCount[6]++;
            }
            else if(this.prevauditAll[i].auditPlanRiskRating=="Medium Risk"){
                this.mediumRiskCount[6]++;
            } 
            else{
                this.lowRiskCount[6]++;
            }
        } 
        
        if(this.prevauditAll[i].auditee.sector == 'Legal & Corporate Office'){
            if(this.prevauditAll[i].auditPlanRiskRating=="High Risk"){
                this.highRiskCount[7]++;
            }
            else if(this.prevauditAll[i].auditPlanRiskRating=="Medium Risk"){
                this.mediumRiskCount[7]++;
            } 
            else{
                this.lowRiskCount[7]++;
            }
        }

        if(this.prevauditAll[i].auditee.sector == 'Country Corporate Office'){
            if(this.prevauditAll[i].auditPlanRiskRating=="High Risk"){
                this.highRiskCount[8]++;
            }
            else if(this.prevauditAll[i].auditPlanRiskRating=="Medium Risk"){
                this.mediumRiskCount[8]++;
            } 
            else{
                this.lowRiskCount[8]++;
            }
        }

        if(this.prevauditAll[i].auditee.sector == 'Compliance'){
            if(this.prevauditAll[i].auditPlanRiskRating=="High Risk"){
                this.highRiskCount[9]++;
            }
            else if(this.prevauditAll[i].auditPlanRiskRating=="Medium Risk"){
                this.mediumRiskCount[9]++;
            } 
            else{
                this.lowRiskCount[9]++;
            }
        }

        if(this.prevauditAll[i].auditee.sector == 'Technology'){
            if(this.prevauditAll[i].auditPlanRiskRating=="High Risk"){
                this.highRiskCount[10]++;
            }
            else if(this.prevauditAll[i].auditPlanRiskRating=="Medium Risk"){
                this.mediumRiskCount[10]++;
            } 
            else{
                this.lowRiskCount[10]++;
            }
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
    datasets: [
    {
        label: 'Low Risk',
        data: this.lowRiskCount,
        backgroundColor: [
        
        // 'green'
        'rgb(146, 246, 99)',
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
        barPercentage: .5
    },   

    {
        label: 'Medium Risk',
        data: this.mediumRiskCount,
        backgroundColor: [
        
        'rgb(243, 243, 141)',
        ],
        borderColor: [
        'rgb(243, 243, 141)',
        
        ],
        borderWidth: 2,
        borderRadius: {
            // topLeft: 20,
            // topRight: 20
        },
        borderSkipped: false,
        categoryPercentage: 1,
        barPercentage: .5
    },
    
    {
        label: 'High Risk',
        data: this.highRiskCount,
        backgroundColor: [
        // 'rgb(242, 143, 143)',
        '#ee4444'
        
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
        barPercentage: .5
    }, 

],
    
    };
        
    const myChartOne = new Chart(ctx,{
        type: 'bar',
        data: data,
        options: { 
            plugins:{
                title: {
                  display: true,
                  text: 'No. of Units Per Sector By Unit Risk Rating',
                  color: '#260655'
                },

                legend: {
                  display: true,
                  labels: {
                      color: '#260655)',
                      
                      
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
                     stacked: true
                },

                y: {
                    stacked: true
                }
            }
        },
        plugins:[plugin],
    });

  myChartOne;

}
 
}


</script>

<style>

</style>