<template>
  <div class="backdrop" @click="closePrevious(false)">
    <div class="ralloc-table-print" >
       <h2 id="header">Prior Year's Data</h2>
     
    <table id="ralloc-units-print">
    <thead>
          <tr>
            <th>Description</th>
            <th>Details</th>    
          </tr>
        </thead>
        <tr>
          <td>Unit Name</td>
          <td>{{unit  }}</td>
        </tr>
        <tr>
          <td>Audit Plan Risk Rating</td>
          <td>{{ auditPlanRiskRating }}</td>
        </tr>
        <tr>
          <td>Date of Audit</td>
          <td>{{ dateOfAudit }}</td>
        </tr>
        <tr>
          <td>Audit Rating</td>
          <td>{{ auditRating }}</td>
        </tr>
        <tr>
          <td>Number of High Risk Issues</td>
          <td>{{ numberHighRiskIssues }}</td>
        </tr>
        <tr>
          <td>Number of Medium Risk Issues</td>
          <td>{{numberMediumRiskIssues  }}</td>
        </tr>
        <tr>
          <td>Number of Low Risk Issues</td>
          <td>{{ numberLowRiskIssues }}</td>
        </tr>
        <tr>
          <td>Number of High Risk Incidents</td>
          <td>{{ numberHighRiskIncidents }}</td>
        </tr>
        <tr>
          <td>Number of Medium Risk Incidents</td>
          <td>{{ numberMediumRiskIncidents }}</td>
        </tr>
        <tr>
          <td>Number of Low Risk Incidents</td>
          <td>{{ numberLowRiskIncidents }}</td>
        </tr>

      </table>
    </div>
  </div>
</template>

<script>
import PreviousService from '@/services/PreviousService';

export default {
    name:'PreviousAudit',
    props: {unit:String,closePrevious:Function},
    data(){
      return{
        prevauditAll:[],
        auditPlanRiskRating:'',
        dateOfAudit:'',
        auditRating:'',
        numberHighRiskIssues:0,
        numberMediumRiskIssues:0,
        numberLowRiskIssues:0,
        numberHighRiskIncidents:0,
        numberMediumRiskIncidents:0,
        numberLowRiskIncidents:0
      }
    },
    methods:{
      async getAllPreviousAudit() {
                try {
                const response = await PreviousService.retrievePrevAuditData();
                this.prevauditAll = response.data;
                console.log(this.prevauditAll);
                
                this.prevauditAll.forEach((unit)=>{
                  if(unit.auditee.unit==this.unit){
                    this.auditPlanRiskRating = unit.auditPlanRiskRating;
                    this.dateOfAudit = unit.dateOfAudit;
                    this.auditRating= unit.auditRating;
                    this.numberHighRiskIssues=unit.numberHighRiskIssues;
                    this.numberMediumRiskIssues=unit.numberMediumRiskIssues;
                    this.numberLowRiskIssues=unit.numberLowRiskIssues;
                    this.numberHighRiskIncidents=unit.numberHighRiskIncidents;
                    this.numberMediumRiskIncidents=unit.numberMediumRiskIncidents;
                    this.numberLowRiskIncidents=unit.numberLowRiskIncidents;
                  }
                })

                
                const date = new Date(this.dateOfAudit);

                const formattedDate = date.toISOString().split('T')[0];
                console.log(formattedDate); // Output: 2023-01-30
                this.dateOfAudit=formattedDate;


                } catch (error) {
                console.log(error);
                }
            },
    },
    async mounted(){
      await this.getAllPreviousAudit();
    }
}
</script>

<style scoped>

#ralloc-units-print{
  width: 50%;
  height: 50%;
  position: fixed;
  
 
  margin-left:450px;
  margin-top: 200px;
}

#ralloc-units-print th {
    padding: 10px;
    font-size: 1.5em;
   
  }

#ralloc-units-print th:first-child {
    border-top-left-radius: 10px;
  }
#ralloc-units-print td:first-child { 
    margin:auto
  }

  #ralloc-units-print th:last-child {
    border-top-right-radius: 10px;
  }

  #ralloc-units-print td{
    background-color: white;
    font-size: 1.5em;
    
  }

  #ralloc-units-print td:first-child{
    background-color: white;
    font-weight: bolder;
    width: 50%
  }

  #ralloc-units-print td:nth-child(2) {
  text-align: center;
}

#ralloc-units-print tr:last-child td:last-child {
  border-bottom-right-radius: 10px;
}

#ralloc-units-print tr:last-child td:first-child {
  border-bottom-left-radius: 10px;
}

  .backdrop{
    display:flex;
    margin:auto
  }
</style>