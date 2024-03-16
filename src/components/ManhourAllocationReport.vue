<template>
 <!-- <a id="save_to_image"> -->
  
 <div class="ralloc-table-print" >
  <h2 id="header">Final Audit Manhour Allocation Schedule</h2>
  <div class="filterunit">
    <select v-model="selectedTeam" @change="getAuditableUnits(selectedTeam)">
     <option v-for="(team,index) in auditTeam" :key="index" :value="team"  >{{ team }}</option>
    </select>
  </div>
  <table id="ralloc-units-print">
    <thead>
          <tr>
            <th>Sector</th>
            <th>Auditable Units</th> 
            <th>Risk Rating</th> 
            <th>Audit Status</th>
            <th>Equal Manhours Allocation</th> 
            <th>Manhours Adjustment</th>
            <th>Adjusted Manhours Allocation</th>
            <th>Override Justification</th>
          </tr>
        </thead>
        <tr  >
            <td class="unitname" colspan="9">{{ selectedTeam }} </td>
        </tr>
        <tr v-for="(unit,index) in auditableUnitsFiltered" :key="index">
            <td>{{ unit.auditee.sector }}</td>
            <td>{{ unit.auditee.unit }}</td>
            <td>{{ unit.benchmarkResult }}</td>
            <td>{{ unit.auditStatus }}</td>
            <td>{{ unit.equalAllocation }}</td>
            <td>{{ unit.manhourAdjustment }}</td>
            <td>{{ unit.adjustedManhours }}</td>
            <td>{{ unit.overrideReason }}</td>
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
import ResourceService from '@/services/ResourceService';
import 'table2excel';

export default {
    data(){
        return{
            auditTeam:['All Teams','Operations & Compliance Team','Lending Team','Technology Team','Treasury Team'],
            auditableUnits:[],
            auditableUnitsFiltered:[],
            selectedTeam:'All Teams'
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

        downloadToExcel(areaID){
            
            const Table2Excel = window.Table2Excel;
            const table2excel = new Table2Excel()
            
            table2excel.export(document.querySelectorAll(areaID));

        },
        
        async getAuditableUnits(team){
            try{
            this.auditableUnitsFiltered=[];
            const response = await ResourceService.retrieveResource();
            this.auditableUnits = response.data;
            console.log( this.auditableUnits );
            
            let teamConverted = ''
            if(team=="Operations & Compliance Team"){teamConverted='Operations'}
            else if(team=="Lending Team"){teamConverted='Credit'}
            else if(team=="Technology Team"){teamConverted='Technology'}
            else if(team=="Treasury Team"){teamConverted='Treasury'}
            else if(team=="All Teams"){teamConverted='All'}
            else{teamConverted=null}
            console.log(teamConverted)
            this.auditableUnits.forEach((unit)=>{
                if(unit.auditee.auditor.teamName==teamConverted){
                    this.auditableUnitsFiltered.push(unit)
                  
                }

                if(teamConverted=="All"){
                    this.auditableUnitsFiltered.push(unit)
                }
                
            })
            console.log(this.auditableUnitsFiltered)
            



            }catch(error){
                console.log(error)
            }

        }
    },
    async mounted(){
        await this.getAuditableUnits('All Teams')
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

  
  

 
</style>