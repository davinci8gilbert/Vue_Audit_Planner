<template>
    <!-- <a id="save_to_image"> -->
     
    <div class="ralloc-table-print" >
     <h2 id="header">Manhours Allocation Summary By Team</h2>
     <div class="filterunit">
       <select v-model="selectedTeam" @change="getAuditableUnits(selectedTeam)">
        <option v-for="(team,index) in auditTeam" :key="index" :value="team"  >{{ team }}</option>
       </select>
     </div>
     <table id="ralloc-units-print">
        <thead>
        <tr>
          <th></th>
          <th>Operations & Compliance Team</th>
          <th>Lending Team</th>
          <th>Technology Team</th>
          <th>Treasury Team</th>
          <th>Total</th>
        </tr>
      </thead>
            <tr ><td id="tab-lvl4" colspan="6">Annual Budget:</td></tr>
            <tr >
                <td id="tab-lvl2">Headcount</td>
                <td v-for="(item,index) in headcount" :key="index">{{ item }}</td>
               
           </tr>
           <tr >
            <td id="tab-lvl2">Number Of Working Days</td>
               <td v-for="(item,index) in numberOfWorkDays" :key="index">{{ item }}</td>
               
           </tr>
           <tr >
           <td id="tab-lvl2">Number of Daily Work Hours</td>
               <td v-for="(item,index) in numberOfDailyWorkHours" :key="index">{{ item }}</td>
               
           </tr>
           <tr >
           <td>Total Working Hours</td>
               <td v-for="(item,index) in totalWorkHours" :key="index">{{ item }}</td>
               
           </tr>
           <tr><td id="tab-lvl4" colspan="6">Adjustments (in Hours)</td></tr>
           <tr >
                <td id="tab-lvl2">Annual Leaves </td>
                <td v-for="(item,index) in annualLeaves" :key="index">{{ item }}</td>
           </tr>
           <tr >
                <td id="tab-lvl2">Maternity Leave (Known)</td>
                <td v-for="(item,index) in maternityLeave" :key="index">{{ item }}</td>
           </tr>
           <tr >
                <td id="tab-lvl2">Annual Planning Activities</td>
                <td v-for="(item,index) in annualPlanningAct" :key="index">{{ item }}</td>
           </tr>
           <tr >
                <td id="tab-lvl2">Continuous Audit</td>
                <td v-for="(item,index) in continuousAudit" :key="index">{{ item }}</td>
           </tr>
           <tr >
                <td id="tab-lvl2">Administrative Activities</td>
                <td v-for="(item,index) in adminActivities" :key="index">{{ item }}</td>
           </tr>
           <tr >
                <td id="tab-lvl2">Contingency Budget</td>
                <td v-for="(item,index) in contingencyBudget" :key="index">{{ item }}</td>
           </tr>
           <tr><td id="tab-lvl4" colspan="6">Total Adjustment</td></tr>
           <tr >
                <td id="tab-lvl4">Available Hours For Audit</td>
                <td v-for="(item,index) in availHoursForAudit" :key="index">{{ item }}</td>
           </tr>
           <tr >
                <td id="tab-lvl4">Actual Allocated Manhours</td>
                <td v-for="(item,index) in actualAllocManhours" :key="index">{{ item }}</td>
           </tr>
           <tr >
                <td id="tab-lvl4">Excess/(Short)</td>
                <td v-for="(item,index) in excessShort" :key="index">{{ item }}</td>
           </tr>
           
     </table>
     <!-- <button id="buttonAll" @click="printPageArea('ralloc-units')">PRINT</button> -->
     <!-- <div class="buttonPrint">
       <a href="javascript:void(0);" @click="printPageArea('ralloc-units')">Print</a>
     </div> -->
     
   </div>
   <!-- </a> -->
   <div class="buttons">
   <button id="buttonAll" @click="printPageArea('.ralloc-table-print')">DOWNLOAD AS IMAGE</button>
   <button id="buttonAll" @click="downloadToExcel('#ralloc-units-print')">DOWNLOAD AS EXCEL FILE</button>
   </div>
   </template>
   
   <script>
   import html2canvas from 'html2canvas';
//    import ResourceService from '@/services/ResourceService';
   
   import 'table2excel';
import AuditorService from '@/services/AuditorService';
   
   export default {
       data(){
           return{
                auditTeam:['All Teams','Operations & Compliance Team','Lending Team','Technology Team','Treasury Team'],
                auditableUnits:[],
                auditableUnitsFiltered:[],
                selectedTeam:'All Teams',
                auditorDataAll:[],
                headcount:[],
                numberOfWorkDays:[],
                numberOfDailyWorkHours:[],
                totalWorkHours:[],
                annualLeaves:[],
                maternityLeave:[],
                annualPlanningAct:[],
                continuousAudit:[],
                adminActivities:[],
                contingencyBudget:[],
                totalAdjustment:[],
                availHoursForAudit:[],
                actualAllocManhours:[],
                excessShort:[],
           }
       },
       methods:{

        async retrieveDataFromDatabase(){
        try{
          const response = await AuditorService.retrieveAuditorData();
          this.auditorDataAll = response.data;
          console.log( this.auditorDataAll);

          for(let i=0;i<this.auditorDataAll.length;i++){
            this.headcount[i]=this.auditorDataAll[i].headcount;
            this.numberOfWorkDays[i]=this.auditorDataAll[i].numberOfWorkingDays;
            this.numberOfDailyWorkHours[i]=this.auditorDataAll[i].numberOfDailyWorkHours;
            this.totalWorkHours[i]=this.auditorDataAll[i].totalWorkingHours;
            this.annualLeaves[i]=this.auditorDataAll[i].annualLeaves;
            this.maternityLeave[i]=this.auditorDataAll[i].maternityLeaves;
            this.annualPlanningAct[i]=this.auditorDataAll[i].annualPlanningActivities;
            this.continuousAudit[i]= this.auditorDataAll[i].continuousAudit;
            this.adminActivities[i]=this.auditorDataAll[i].administrativeActivities;
            this.contingencyBudget[i]=this.auditorDataAll[i].contingencyBudget;
            this.totalAdjustment[i]=this.auditorDataAll[i].totalAdjustment;
            this.availHoursForAudit[i]=this.auditorDataAll[i].availableHoursAudit;
            this.actualAllocManhours[i]=this.auditorDataAll[i].actualAllocatedManhours;
            this.excessShort[i]=this.auditorDataAll[i].excessShort;
          }

        }catch(error){
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
   
           downloadToExcel(areaID){
               
               const Table2Excel = window.Table2Excel;
               const table2excel = new Table2Excel()
               
               table2excel.export(document.querySelectorAll(areaID));
   
           },
           
        //    async getAuditableUnits(team){
        //        try{
        //        this.auditableUnitsFiltered=[];
        //        const response = await ResourceService.retrieveResource();
        //        this.auditableUnits = response.data;
        //        console.log( this.auditableUnits );
               
        //        let teamConverted = ''
        //        if(team=="Operations & Compliance Team"){teamConverted='Operations'}
        //        else if(team=="Lending Team"){teamConverted='Credit'}
        //        else if(team=="Technology Team"){teamConverted='Technology'}
        //        else if(team=="Treasury Team"){teamConverted='Treasury'}
        //        else if(team=="All Teams"){teamConverted='All'}
        //        else{teamConverted=null}
        //        console.log(teamConverted)
        //        this.auditableUnits.forEach((unit)=>{
        //            if(unit.auditee.auditor.teamName==teamConverted){
        //                this.auditableUnitsFiltered.push(unit)
                     
        //            }
   
        //            if(teamConverted=="All"){
        //                this.auditableUnitsFiltered.push(unit)
        //            }
                   
        //        })
        //        console.log(this.auditableUnitsFiltered)
               
   
   
   
        //        }catch(error){
        //            console.log(error)
        //        }
   
        //    }
       },
       async mounted(){
        //    await this.getAuditableUnits('All Teams')
        await this.retrieveDataFromDatabase();

       }
   }
   </script>
   
   <style scoped>
   
   
    #ralloc-units-print{
       border-radius: 20px;
    }
   
    #ralloc-units-print th:first-child {
       border-top-left-radius: 10px;
     }
   
     #ralloc-units-print th:last-child {
       /* border-top-left-radius: 10px; */
       border-top-right-radius: 10px;
     }

    #ralloc-units-print tr td:nth-child(2) {
    text-align: center;
  }
   
     
     
   
    
   </style>