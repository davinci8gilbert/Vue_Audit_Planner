<template>
  <div>
    <div class="chartfour-container"><canvas id="myChartFour"></canvas></div>
  </div>
</template>

<script>
import Chart from 'chart.js/auto';
import PreviousService from '@/services/PreviousService';
export default {
name: 'ChartFour',
data(){
    return{
        prevauditAll:[],
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
    // Calculate the total issues for each unit and add a 'totalIssues' property to each object
        this.prevauditAll.forEach(unit => {
        unit.totalIncidents = unit.numberHighRiskIncidents + unit.numberMediumRiskIncidents+ unit.numberLowRiskIncidents;
        });

        // Sort the units based on total issues in descending order
        this.prevauditAll.sort((a, b) => b.totalIncidents - a.totalIncidents);    

        // Select the top 10 units
        const top10Units = this.prevauditAll.slice(0, 10);

        // top10Units.forEach(unit => {
        // unit.words = unit.auditee.unit.split(' ');
        // });

        // // Output the top 10 units
        // console.log(top10Units);


    const ctx = document.getElementById('myChartFour');

    const labels = [top10Units[0].auditee.unit, top10Units[1].auditee.unit,top10Units[2].auditee.unit,top10Units[3].auditee.unit,top10Units[4].auditee.unit,
    top10Units[5].auditee.unit,top10Units[6].auditee.unit,top10Units[7].auditee.unit,top10Units[8].auditee.unit,top10Units[9].auditee.unit]

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
        label: 'Top 10 Units',
        data: [20, 18, 15, 12, 10, 10, 8, 9, 8, 7, 4],
        backgroundColor: [
        // '#a230b4',
        // '#584214',
        // '#71cb2d',
        // '#36ea5a',
        '#41eace',
        // '#32b6e2',
        // '#b8a6e7',
        // '#da27a1',
        // '#db299a',
        // '#e0354e',
        
        ],
        borderColor: [
        
        ],
        borderWidth: 0,
        borderRadius: 10,
        

        borderSkipped: false,
        // barThickness: 40,
        categoryPercentage: 1,
        barPercentage: .8

    }, ],
    
    };
        
    const myChartFour = new Chart(ctx,{
        type: 'bar',
        data: data,
        options: { 
            plugins:{
                legend:{
                  display:false,
                  labels:{
                  display:false
                },
                },
                customCanvasBackgroundColor: {
                color: '#eeebf8',
               
               },
               title: {
                    display: true,
                    text: 'Top 10 Units Based on Number of Incidents',
                    color: '#260655'
                }
            },
            maintainAspectRatio: false, // Set to false to allow adjusting the chart size
            responsive: true,
            
            scales: {
                x: {
                     stacked: false,
                     ticks:{
                      display:false
                     }
                },
            }
            //     y: {
            //         stacked: true
            //     }
            // }
        },
        plugins:[plugin],
    });

  myChartFour;

}
 
}


</script>

<style>

</style>