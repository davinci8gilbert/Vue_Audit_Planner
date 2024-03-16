<template>
  <div>
    <h1>Resource Allocation</h1>
    <div class="ralloc-table">
      <table id="ralloc-tablearea">
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
        <tr>
          <td id="tab-lvl4" colspan="6">Annual Budget:</td> 
        </tr>
        <tr>
          <td id="tab-lvl2">Headcount</td>
          <td><input type="text" v-model.number= "headcount[0]" :disabled="isInputDisabled(1)||isDisabled" :class="{ 'enabled-input': !isInputDisabled(1) && !isDisabled }"></td>
          <td><input type="text" v-model.number= "headcount[1]" :disabled="isInputDisabled(2)||isDisabled" :class="{ 'enabled-input': !isInputDisabled(2) && !isDisabled }"></td>
          <td><input type="text" v-model.number= "headcount[2]" :disabled="isInputDisabled(3)||isDisabled" :class="{ 'enabled-input': !isInputDisabled(3) && !isDisabled }"></td>
          <td><input type="text" v-model.number= "headcount[3]" :disabled="isInputDisabled(4)||isDisabled" :class="{ 'enabled-input': !isInputDisabled(4) && !isDisabled }"></td>
          <td><span>{{ headcount[4] }}</span></td>
        </tr>
        <tr>
          <td id="tab-lvl2">Number Of Working Days</td>
          <td><input type="text" v-model.number= "numberOfWorkDays[0]" :disabled="isInputDisabled(1)||isDisabled" :class="{ 'enabled-input': !isInputDisabled(1) && !isDisabled }"></td>
          <td><input type="text" v-model.number= "numberOfWorkDays[1]" :disabled="isInputDisabled(2)||isDisabled" :class="{ 'enabled-input': !isInputDisabled(2) && !isDisabled }"></td>
          <td><input type="text" v-model.number= "numberOfWorkDays[2]" :disabled="isInputDisabled(3)||isDisabled" :class="{ 'enabled-input': !isInputDisabled(3) && !isDisabled }"></td>
          <td><input type="text" v-model.number= "numberOfWorkDays[3]" :disabled="isInputDisabled(4)||isDisabled" :class="{ 'enabled-input': !isInputDisabled(4) && !isDisabled }"></td>
          <td><span>{{ numberOfWorkDays[4] }}</span></td>
        </tr>
        <tr>
          <td id="tab-lvl2">Number of Daily Work Hours</td>
          <td><input type="text" v-model.number= "numberOfDailyWorkHours[0]" :disabled="isInputDisabled(1)||isDisabled" :class="{ 'enabled-input': !isInputDisabled(1) && !isDisabled }"></td>
          <td><input type="text" v-model.number= "numberOfDailyWorkHours[1]" :disabled="isInputDisabled(2)||isDisabled" :class="{ 'enabled-input': !isInputDisabled(2) && !isDisabled }"></td>
          <td><input type="text" v-model.number= "numberOfDailyWorkHours[2]" :disabled="isInputDisabled(3)||isDisabled" :class="{ 'enabled-input': !isInputDisabled(3) && !isDisabled }"></td>
          <td><input type="text" v-model.number= "numberOfDailyWorkHours[3]" :disabled="isInputDisabled(4)||isDisabled" :class="{ 'enabled-input': !isInputDisabled(4) && !isDisabled }"></td>
          <td><span></span></td>
        </tr>
        <tr>
          <td id="tab-lvl3">Total Working Hours</td>
          <td id="tab-lvl3"><span>{{ totalWorkHours[0] }}</span></td>
          <td id="tab-lvl3"><span>{{ totalWorkHours[1] }}</span></td>
          <td id="tab-lvl3"><span>{{ totalWorkHours[2] }}</span></td>
          <td id="tab-lvl3"><span>{{ totalWorkHours[3] }}</span></td>
          <td id="tab-lvl3"><span>{{ totalWorkHours[4] }}</span></td>
        </tr>
        <tr>
          <td colspan="4"></td>
        </tr>
        <tr>
          <td id="tab-lvl4" colspan="6">Adjustments (in Hours)</td>       
        </tr>
        <tr>
          <td id="tab-lvl2"> Annual Leaves</td>
          <td><input type="number" v-model.number= "annualLeaves[0]" :disabled="isInputDisabled(1)||isDisabled" :class="{ 'enabled-input': !isInputDisabled(1) && !isDisabled }"></td>
          <td><input type="number" v-model.number= "annualLeaves[1]" :disabled="isInputDisabled(2)||isDisabled" :class="{ 'enabled-input': !isInputDisabled(2) && !isDisabled }"></td>
          <td><input type="number" v-model.number= "annualLeaves[2]" :disabled="isInputDisabled(3)||isDisabled" :class="{ 'enabled-input': !isInputDisabled(3) && !isDisabled }"></td>
          <td><input type="number" v-model.number= "annualLeaves[3]" :disabled="isInputDisabled(4)||isDisabled" :class="{ 'enabled-input': !isInputDisabled(4) && !isDisabled }"></td>
          <td><span>{{ annualLeaves[4] }}</span></td>
        </tr>
        <tr>
          <td id="tab-lvl2">Maternity Leave (Known)</td>
          <td><input type="number" v-model.number= "maternityLeave[0]" :disabled="isInputDisabled(1)||isDisabled" :class="{ 'enabled-input': !isInputDisabled(1) && !isDisabled }"></td>
          <td><input type="number" v-model.number= "maternityLeave[1]" :disabled="isInputDisabled(2)||isDisabled" :class="{ 'enabled-input': !isInputDisabled(2) && !isDisabled }"></td>
          <td><input type="number" v-model.number= "maternityLeave[2]" :disabled="isInputDisabled(3)||isDisabled" :class="{ 'enabled-input': !isInputDisabled(3) && !isDisabled }"></td>
          <td><input type="number" v-model.number= "maternityLeave[3]" :disabled="isInputDisabled(4)||isDisabled" :class="{ 'enabled-input': !isInputDisabled(4) && !isDisabled }"></td>
          <td><span>{{ maternityLeave[4] }}</span></td>
        </tr>
        <tr>
          <td id="tab-lvl2">Annual Planning Activities</td>
          <td><input type="number" v-model.number= "annualPlanningAct[0]" :disabled="isInputDisabled(1)||isDisabled" :class="{ 'enabled-input': !isInputDisabled(1) && !isDisabled }"></td>
          <td><input type="number" v-model.number= "annualPlanningAct[1]" :disabled="isInputDisabled(2)||isDisabled" :class="{ 'enabled-input': !isInputDisabled(2) && !isDisabled }"></td>
          <td><input type="number" v-model.number= "annualPlanningAct[2]" :disabled="isInputDisabled(3)||isDisabled" :class="{ 'enabled-input': !isInputDisabled(3) && !isDisabled }"></td>
          <td><input type="number" v-model.number= "annualPlanningAct[3]" :disabled="isInputDisabled(4)||isDisabled" :class="{ 'enabled-input': !isInputDisabled(4) && !isDisabled }"></td>
          <td><span>{{ annualPlanningAct[4] }}</span></td>
        </tr>
        <tr>
          <td id="tab-lvl2">Continuous Audit</td>
          <td><input type="number" v-model.number= "continuousAudit[0]" :disabled="isInputDisabled(1)||isDisabled" :class="{ 'enabled-input': !isInputDisabled(1) && !isDisabled }"></td>
          <td><input type="number" v-model.number= "continuousAudit[1]" :disabled="isInputDisabled(2)||isDisabled" :class="{ 'enabled-input': !isInputDisabled(2) && !isDisabled }"></td>
          <td><input type="number" v-model.number= "continuousAudit[2]" :disabled="isInputDisabled(3)||isDisabled" :class="{ 'enabled-input': !isInputDisabled(3) && !isDisabled }"></td>
          <td><input type="number" v-model.number= "continuousAudit[3]" :disabled="isInputDisabled(4)||isDisabled" :class="{ 'enabled-input': !isInputDisabled(4) && !isDisabled }"></td>
          <td><span>{{ continuousAudit[4] }}</span></td>
        </tr>
        <tr>
          <td id="tab-lvl2">Administrative Activities</td>
          <td><input type="number" v-model.number= "adminActivities[0]" :disabled="isInputDisabled(1)||isDisabled" :class="{ 'enabled-input': !isInputDisabled(1) && !isDisabled }"></td>
          <td><input type="number" v-model.number= "adminActivities[1]" :disabled="isInputDisabled(2)||isDisabled" :class="{ 'enabled-input': !isInputDisabled(2) && !isDisabled }"></td>
          <td><input type="number" v-model.number= "adminActivities[2]" :disabled="isInputDisabled(3)||isDisabled" :class="{ 'enabled-input': !isInputDisabled(3) && !isDisabled }"></td>
          <td><input type="number" v-model.number= "adminActivities[3]" :disabled="isInputDisabled(4)||isDisabled" :class="{ 'enabled-input': !isInputDisabled(4) && !isDisabled }"></td>
          <td><span>{{ adminActivities[4] }}</span></td>
        </tr>
        <tr>
          <td id="tab-lvl2">Contingency Budget</td>
          <td><input type="number" v-model.number= "contingencyBudget[0]" :disabled="isInputDisabled(1)||isDisabled" :class="{ 'enabled-input': !isInputDisabled(1) && !isDisabled }"></td>
          <td><input type="number" v-model.number= "contingencyBudget[1]" :disabled="isInputDisabled(2)||isDisabled" :class="{ 'enabled-input': !isInputDisabled(2) && !isDisabled }"></td>
          <td><input type="number" v-model.number= "contingencyBudget[2]" :disabled="isInputDisabled(3)||isDisabled" :class="{ 'enabled-input': !isInputDisabled(3) && !isDisabled }"></td>
          <td><input type="number" v-model.number= "contingencyBudget[3]" :disabled="isInputDisabled(4)||isDisabled" :class="{ 'enabled-input': !isInputDisabled(4) && !isDisabled }"></td>
          <td><span>{{ contingencyBudget[4] }}</span></td>
        </tr>
        <tr>
          <td id="tab-lvl3">Total Adjustment</td>
          <td id="tab-lvl3"><span>{{ totalAdjustment[0] }}</span></td>
          <td id="tab-lvl3"><span>{{ totalAdjustment[1] }}</span></td>
          <td id="tab-lvl3"><span>{{ totalAdjustment[2] }}</span></td>
          <td id="tab-lvl3"><span>{{ totalAdjustment[3] }}</span></td>
          <td id="tab-lvl3"><span>{{ totalAdjustment[4] }}</span></td>
        </tr>
        <tr>
          <td colspan="6"></td>       
        </tr>
        <tr>
          <td id="tab-lvl8">Available Hours For Audit</td>
         
          <td id="tab-lvl5"><span>{{ availHoursForAudit[0] }}</span></td>
          <td id="tab-lvl5"><span>{{ availHoursForAudit[1] }}</span></td>
          <td id="tab-lvl5"><span>{{ availHoursForAudit[2] }}</span></td>
          <td id="tab-lvl5"><span>{{ availHoursForAudit[3] }}</span></td>
          <td id="tab-lvl5"><span>{{ availHoursForAudit[4] }}</span></td>
        </tr>
        <tr>
          <td id="tab-lvl7">Actual Allocated Manhours</td>
          <td id="tab-lvl6"><span>{{ actualAllocManhours[0] }}</span></td>
          <td id="tab-lvl6"><span>{{ actualAllocManhours[1] }}</span></td>
          <td id="tab-lvl6"><span>{{ actualAllocManhours[2] }}</span></td>
          <td id="tab-lvl6"><span>{{ actualAllocManhours[3] }}</span></td>
          <td id="tab-lvl6"><span>{{ actualAllocManhours[4] }}</span></td>
        </tr>
        <tr class="fixed-background">
          <!-- <td id="tab-lvl9">Excess/(Short)</td>
          <td id="tab-lvl10"><span>{{ excessShort[0] }}</span></td>
          <td id="tab-lvl10"><span>{{ excessShort[1] }}</span></td>
          <td id="tab-lvl10"><span>{{ excessShort[2] }}</span></td>
          <td id="tab-lvl10"><span>{{ excessShort[3] }}</span></td>
          <td id="tab-lvl10"><span>{{ excessShort[4] }}</span></td> -->
          <td id="excessShortLabel">Excess/(Short)</td>
          <td :class="{ 'negative-value': isNegative(excessShort[0]) }"><span>{{ excessShort[0] }}</span></td>
          <td :class="{ 'negative-value': isNegative(excessShort[1]) }"><span>{{ excessShort[1] }}</span></td>
          <td :class="{ 'negative-value': isNegative(excessShort[2]) }"><span>{{ excessShort[2] }}</span></td>
          <td :class="{ 'negative-value': isNegative(excessShort[3]) }"><span>{{ excessShort[3] }}</span></td>
          <td :class="{ 'negative-value': isNegative(excessShort[4]) }"><span>{{ excessShort[4] }}</span></td>

        </tr>
      </table>
      <div class="btn-alloc">
        <button id="buttonAll" v-if=btnConditionAlloc @click="postDataResource(), showAllocationTable()">Allocate Manhours</button>
        <button id="buttonAll" v-if=btnConditionEdit @click="editResource()">Edit Resource</button>
      </div>
      <p id="table2-title" v-if="isAllocationTableShow">Manhour Allocation for Audit Activities</p>
      <table id="ralloc-units" v-if="isAllocationTableShow">
        <thead>
          <tr>
            <th></th>
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

        <!-- -------------------------------------------------------------Operations Team----------------------------------------------------- -->
          <tr v-show="id==1">
            <td class="unitname" colspan="9">Operations & Compliance Team: </td>
          </tr>
          <tr v-show="id==1" v-for="(item, index) in auditeesOperations" :key="index">
            <td><input type="checkbox" name="unitCheckbox" :checked="checkedIndex === index && isChecked" @change="updateCheckbox(index), getSelectedUnits(item), inputBoxDisable(checkedIndex,index)" :disabled=isInputDisabled(1) v-model="isChecked[index]"></td>
            <td class="sector"><span>{{ item.auditee.sector }}</span></td>
            <td class="unit"><span>{{ item.auditee.unit }}</span></td>
            <td :class="getRiskRatingClass(item.benchmarkResult)"><span>{{ item.benchmarkResult }}</span></td>
            <td>
              <select v-model="item.auditStatus" :disabled="isInputDisabled(1) || !(checkedIndex===index && isChecked[index]===true)">
                <option v-for="status in auditStatusIndicator" :key="status" :value="status">{{ status }}</option>
              </select>
            </td>
            <td><span>{{ item.equalAllocation }}</span></td>
            <td><input type="number" :disabled="isInputDisabled(1) || !(checkedIndex===index && isChecked[index]===true)" v-model="item.manhourAdjustment"></td>
            <td><span>{{ finalAdjustedMHOperations[index] }}</span></td>
            <td><input type="text" :disabled="isInputDisabled(1) || !(checkedIndex===index && isChecked[index]===true)" v-model="item.overrideReason"></td>
          </tr>
          <tr v-show="id==1" >
            <td colspan="9">
            <div id="buttonAdjustMHCont">
              <button id="buttonAll" @click="clearInputs()">Clear</button>
              <button id="buttonAll" @click="saveResourceUpdates()">Save Adjusted Manhours</button>              
            </div>   
          </td>
          </tr>        
         
         <!-- ---------------------------------------------------Lending Team------------------------------------------------------- -->
          <tr v-show="id==2">
            <td class="unitname" colspan="9">Lending Team: </td>
          </tr> 
          <tr v-show="id==2" v-for="(item, index) in auditeesCredit" :key="index">
            <td><input type="checkbox" name="unitCheckbox" :checked="checkedIndex === index && isChecked" @change="updateCheckbox(index), getSelectedUnits(item), inputBoxDisable(checkedIndex,index)" :disabled=isInputDisabled(2) v-model="isChecked[index]"></td>
            <td class="sector"><span>{{ item.auditee.sector }}</span></td>
            <td class="unit"><span>{{ item.auditee.unit }}</span></td>
            <td :class="getRiskRatingClass(item.benchmarkResult)"><span>{{ item.benchmarkResult }}</span></td>
            <td>
              <select v-model="item.auditStatus" :disabled="isInputDisabled(2) || !(checkedIndex===index && isChecked[index]===true)">
                <option v-for="status in auditStatusIndicator" :key="status" :value="status">{{ status }}</option>
              </select>
            </td>
            <td><span>{{ item.equalAllocation }}</span></td>
            <td><input type="number" :disabled="isInputDisabled(2) || !(checkedIndex===index && isChecked[index]===true)" v-model="item.manhourAdjustment"></td>
            <td><span>{{ finalAdjustedMHLending[index] }}</span></td>
            <td><input type="text" :disabled="isInputDisabled(2) || !(checkedIndex===index && isChecked[index]===true)" v-model="item.overrideReason"></td>
          </tr>  
          <tr v-show="id==2">
            <td colspan="9">
            <div id="buttonAdjustMHCont">
              <button id="buttonAll" @click=clearInputs()>Clear</button>
              <button id="buttonAll" @click="saveResourceUpdates()">Save Adjusted Manhours</button>
              
            </div>   
          </td>
          </tr>     
            <!-- ---------------------------------------------Technology Team----------------------------------------------- -->
            <tr v-show="id==3">
            <td class="unitname" colspan="9">Technology Team: </td>
          </tr> 
          <tr v-show="id==3" v-for="(item, index) in auditeesTech" :key="index" >
            <td><input type="checkbox" name="unitCheckbox" :checked="checkedIndex === index && isChecked" @change="updateCheckbox(index), getSelectedUnits(item), inputBoxDisable(checkedIndex,index)" :disabled=isInputDisabled(3) v-model="isChecked[index]"></td>
            <td class="sector"> <span>{{ item.auditee.sector }}</span></td>
            <td class="unit"><span>{{ item.auditee.unit }}</span></td>
            <td :class="getRiskRatingClass(item.benchmarkResult)"><span>{{ item.benchmarkResult }}</span></td>
            <td>
              <select v-model="item.auditStatus" :disabled="isInputDisabled(3) || !(checkedIndex===index && isChecked[index]===true)">
                <option v-for="status in auditStatusIndicator" :key="status" :value="status">{{ status }}</option>
              </select>
            </td>
            <td><span>{{ item.equalAllocation }}</span></td>
            <td><input type="number" :disabled="isInputDisabled(3) || !(checkedIndex===index && isChecked[index]===true)" v-model="item.manhourAdjustment"></td>
            <td><span>{{ finalAdjustedMHTech[index] }}</span></td>
            <td><input type="text" :disabled="isInputDisabled(3) || !(checkedIndex===index && isChecked[index]===true)" v-model="item.overrideReason"></td>
          </tr>   
          <tr v-show="id==3">
            <td colspan="9">
            <div id="buttonAdjustMHCont">
              <button id="buttonAll" @click=clearInputs()>Clear</button>
              <button id="buttonAll" @click="saveResourceUpdates()">Save Adjusted Manhours</button>         
            </div>   
          </td>
          </tr>
             
          <!-- ---------------------------------------------------------------Treasury Team -------------------------------------------------------------- -->
          <tr v-show="id==4">
            <td class="unitname" colspan="9">Treasury Team: </td>
          </tr> 
          <tr v-show="id==4" v-for="(item, index) in auditeesTreasury" :key="index">
            <td><input type="checkbox" name="unitCheckbox" :checked="checkedIndex === index && isChecked" @change="updateCheckbox(index), getSelectedUnits(item), inputBoxDisable(checkedIndex,index)" :disabled=isInputDisabled(4) v-model="isChecked[index]"></td>
            <td class="sector"><span>{{ item.auditee.sector }}</span></td>
            <td class="unit"><span>{{ item.auditee.unit }}</span></td>
            <td :class="getRiskRatingClass(item.benchmarkResult)"><span>{{ item.benchmarkResult }}</span></td>
            <td>
              <select v-model="item.auditStatus" :disabled="isInputDisabled(4) || !(checkedIndex===index && isChecked[index]===true)">
                <option v-for="status in auditStatusIndicator" :key="status" :value="status">{{ status }}</option>
              </select>
            </td>
            <td><span>{{ item.equalAllocation }}</span></td>
            <td><input type="number" :disabled="isInputDisabled(4) || !(checkedIndex===index && isChecked[index]===true)" v-model="item.manhourAdjustment"></td>
            <td><span>{{ finalAdjustedMHTreasury[index] }}</span></td>
            <td><input type="text" :disabled="isInputDisabled(4) || !(checkedIndex===index && isChecked[index]===true)" v-model="item.overrideReason"></td>
          </tr> 
          <tr v-show="id==4">
            <td colspan="9">
            <div id="buttonAdjustMHCont">
              <button id="buttonAll" @click=clearInputs()>Clear</button>
              <button id="buttonAll" @click="saveResourceUpdates()">Save Adjusted Manhours</button>          
            </div>   
          </td>
          </tr>
          

      </table>
      
    </div>

    
  </div>
  <div v-if="displayToastBox" id="toastBox">
            <div v-if="displaySuccessToast" class="toastCheck">
                <img :src="imageCheck" class="imageCheck"/>
                {{ successMsg }}
            </div>
            <div v-if="displayCancelToast" class="toastCancel">
                <img :src="imageCancel" class="imageCancel"/>
                {{ cancelMsg }}
            </div>
        </div>
  
</template>

<script>
import AuditorService from "@/services/AuditorService";
import RiskScoringService from "@/services/RiskScoringService";
import ResourceService from "@/services/ResourceService";
import ImgCheck from '@/assets/checkmark.png'
import ImgCancel from '@/assets/cancelmark.png'
export default {
  name: "ResourceAllocation",
  data(){
    return{
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
      btnConditionAlloc: true,
      btnConditionEdit:false,
      teamName:localStorage.getItem('teamName'),
      auditorName:localStorage.getItem('auditorName'),
      role:localStorage.getItem('role'),
      userName:localStorage.getItem('eid'),
      password:localStorage.getItem('pWord'),
      id:localStorage.getItem('id'),
      errorMessage:'',
      annualLeavesConv: 0,
      maternityLeaveConv: 0,
      annualPlanningActConv: 0,
      continuousAuditConv: 0,
      adminActivitiesConv: 0,
      contingencyBudgetConv: 0,
      data:{},
      convertedValue:0,
      auditorDataAll:[],
      scoredAuditeesAll:[],
      auditeesOperations:[],
      auditeesCredit:[],
      auditeesTech:[],
      auditeesTreasury:[],
      resourceAllocationsAll:[],
      checkedIndex:null,
      selectedUnit:{},
      countUnitOperations:0,
      countUnitCredit:0,
      countUnitTech:0,
      countUnitTreasury:0,
      allocatedManhoursOperations:0,
      allocatedManhoursCredit:0,
      allocatedManhoursTech:0,
      allocatedManhoursTreasury:0,
      adjustedManhoursAllocationOperations:[],
      adjustedManhoursAllocationLending:[],
      adjustedManhoursAllocationTech:[],
      adjustedManhoursAllocationTreasury:[],
      finalAdjustedMHOperations:[],
      finalAdjustedMHLending:[],
      finalAdjustedMHTech:[],
      finalAdjustedMHTreasury:[],
      adjustedManhoursRunTotalOps:0,
      isAllocationTableShow:false,
      isDisabled:false,
      isDisabledInput: true,
      isChecked:Array(length).fill(false),
      forAuditStatusHolder:[],
      auditStatusIndicator:["For Audit","Not For Audit"],
      equalAllocationOperations:[],
      equalAllocationLending:[],
      equalAllocationTech:[],
      equalAllocationTreasury:[],
      imageCheck: ImgCheck,
      imageCancel: ImgCancel,
      successMsg:'Successfully Saved.',
      cancelMsg: 'All inputs have been cleared.',
      displayToastBox:false,
      displaySuccessToast: false,
      displayCancelToast: false,

    }
  },
  methods:{

    getRiskRatingClass(riskRating) {
      return {
        'cell-red': riskRating === 'High Risk',
        'cell-yellow': riskRating === 'Medium Risk',
        'cell-green': riskRating === 'Low Risk'
      };
    },

    isNegative(value) {
      return value < 0;
    },

    // ---------------------------------resource allocation methods------------------------------------------------

    //this retrieves the auditor data from the database which include those relating to resources e.g. manhours etc
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

    // to handle display of checkbox, when it is checked and not
    inputBoxDisable(checkedIndex,index){
      if(checkedIndex ===index){
        this.isDisabledInput= !this.isDisabledInput;
      }
    },
    // to handle the display of checkbox
    updateCheckbox(index){
      this.checkedIndex=index;
      if(this.isChecked[index]===true){
        this.showRiskScoring = true;       
      }
    },

    //handle the diplay of input boxes
    isInputDisabled(id){   
     return this.id!=id    
   },

    //to store the value of selected item for onward manipulation
    getSelectedUnits(item){
      this.selectedUnit = item;
      console.log("selected unit: "+ this.selectedUnit)
    },

    //to post the resource updates into the dataset
    async postDataResource(){
      try{
        let i = this.id-1;
                  
            this.data = {
              teamName: this.teamName,
              auditorName: this.auditorName,
              role: this.role,
              password: this.password,
              headcount: this.headcount[i],
              numberOfWorkingDays: this.numberOfWorkDays[i],
              numberOfDailyWorkHours: this.numberOfDailyWorkHours[i],
              totalWorkingHours:this.totalWorkHours[i],
              annualLeaves:this.annualLeaves[i],
              maternityLeaves: this.maternityLeave[i],
              annualPlanningActivities: this.annualPlanningAct[i],
              continuousAudit: this.continuousAudit[i],
              administrativeActivities:this.adminActivities[i],
              contingencyBudget:this.contingencyBudget[i],
              totalAdjustment:this.totalAdjustment[i],
              availableHoursAudit:this.availHoursForAudit[i],
              actualAllocatedManhours:this.actualAllocManhours[i],
              excessShort:this.excessShort[i]
            }

            const response = await AuditorService.putResource(this.id, this.data);
            console.log(response.data);
            this.btnConditionAlloc=false;
            this.btnConditionEdit=true;
            this.isDisabled=true;
            // this.isInputDisabled(-1)
      

      }catch(error){
        console.log(error);
      }
      
   },

   //method to calculate the total working hours per unit
    calculateTotalWorkHours(){

      let i = this.id-1;

      if (
        this.headcount[i] !== 0 &&
        this.numberOfWorkDays[i] !== 0 &&
        this.numberOfDailyWorkHours[i] !== 0
      ) {
        this.totalWorkHours[i] = this.headcount[i] * this.numberOfWorkDays[i] * this.numberOfDailyWorkHours[i];
        this.errorMessage = '';
      } else {
        this.totalWorkHours[i] = 0;
        
      }
      console.log(this.totalWorkHours[i])
    },

    calculateTotalAdjustments(){
      let i = this.id-1;
      
      if(this.annualLeaves[i]===0 || this.annualLeaves[i]===''|| isNaN(this.annualLeaves[i])) {this.annualLeavesConv =0}else{this.annualLeavesConv=this.annualLeaves[i]}
      if(this.maternityLeave[i]===0 || this.maternityLeave[i]==='' || isNaN(this.maternityLeave[i])) {this.maternityLeaveConv = 0}else{this.maternityLeaveConv=this.maternityLeave[i]}
      if(this.annualPlanningAct[i]===0 || this.annualPlanningAct[i]==='' || isNaN(this.annualPlanningAct[i])){this.annualPlanningActConv = 0}else{this.annualPlanningActConv=this.annualPlanningAct[i]}
      if(this.continuousAudit[i]===0 || this.continuousAudit[i]==='' || isNaN(this.continuousAudit[i])){this.continuousAuditConv=0}else{this.continuousAuditConv=this.continuousAudit[i]}
      if(this.adminActivities[i] ===0 || this.adminActivities[i]==='' || isNaN(this.adminActivities[i])){this.adminActivitiesConv=0}else{this.adminActivitiesConv=this.adminActivities[i]}
      if(this.contingencyBudget[i] ===0 || this.contingencyBudget[i]==='' || isNaN(this.contingencyBudget[i])){this.contingencyBudgetConv=0}else{this.contingencyBudgetConv=this.contingencyBudget[i]}
            
      this.totalAdjustment[i] = this.annualLeavesConv+this.maternityLeaveConv+this.annualPlanningActConv+this.continuousAuditConv+this.adminActivitiesConv+
      this.contingencyBudgetConv;  

    },

    calculateAvailableHours(){
      let i = this.id-1;
      let totalWorkHoursConv=0;
      let totalAdjustmentConv=0;
      if(this.totalWorkHours[i]===0 || this.totalWorkHours[i] ==='' || isNaN(this.totalWorkHours[i])) {totalWorkHoursConv =0} else{totalWorkHoursConv=this.totalWorkHours[i]}
      if(this.totalAdjustment[i]===0 || this.totalAdjustment[i] ==='' || isNaN(this.totalAdjustment[i])) {totalWorkHoursConv =0} else{totalAdjustmentConv=this.totalAdjustment[i]}
      this.availHoursForAudit[i] =totalWorkHoursConv - totalAdjustmentConv;
    },

    calculateExcessShort(){
      let i = this.id-1;

      if(this.availHoursForAudit[i]===0 || this.availHoursForAudit[i]===''|| isNaN(this.availHoursForAudit[i])) {this.availHoursForAudit[i] =0}else{this.availHoursForAudit[i]}
      if(this.actualAllocManhours[i]===0 || this.actualAllocManhours[i]===''|| isNaN(this.actualAllocManhours[i])) {this.actualAllocManhours[i] =0}else{this.actualAllocManhours[i]}

      this.excessShort[i] = this.availHoursForAudit[i] - this.actualAllocManhours[i];
    },

    calculateHeadcountTotal(){
      let sum=0;  
        for(let i=0; i<4;i++){
          if(this.headcount[i]===0 || this.headcount[i]===''|| isNaN(this.headcount[i]) ) {this.convertedValue =0}else{this.convertedValue=this.headcount[i]}
          // console.log(this.headcount[i])
          sum+=this.convertedValue;
        }
     this.headcount[4] = sum;     
    },

    calculateNumberOfWorkDaysTotal(){
      let sum=0;      
        for(let i=0; i<4;i++){
          if(this.numberOfWorkDays[i]===0 || this.numberOfWorkDays[i]===''|| isNaN(this.numberOfWorkDays[i]) ) {this.convertedValue =0}else{this.convertedValue=this.numberOfWorkDays[i]}
          sum+=this.convertedValue;
        }      
      this.numberOfWorkDays[4]=sum;
    },

    calculateSumTotalWorkHours(){
      let sum=0;      
        for(let i=0; i<4;i++){
          if(this.totalWorkHours[i]===0 || this.totalWorkHours[i]===''|| isNaN(this.totalWorkHours[i]) ) {this.convertedValue =0}else{this.convertedValue=this.totalWorkHours[i]}
          sum+=this.convertedValue;
        }      
      this.totalWorkHours[4]=sum;
    },

    calculateAnnualLeavesTotal(){
      let sum=0;      
        for(let i=0; i<4;i++){
          if(this.annualLeaves[i]===0 || this.annualLeaves[i]===''|| isNaN(this.annualLeaves[i]) ) {this.convertedValue =0}else{this.convertedValue=this.annualLeaves[i]}
          sum+=this.convertedValue;
        }      
      this.annualLeaves[4]=sum;
    },

    calculateMaternityLeavesTotal(){
      let sum=0;      
        for(let i=0; i<4;i++){
          if(this.maternityLeave[i]===0 || this.maternityLeave[i]===''|| isNaN(this.maternityLeave[i]) ) {this.convertedValue =0}else{this.convertedValue=this.maternityLeave[i]}
          sum+=this.convertedValue;
        }      
      this.maternityLeave[4]=sum;
    },

    calculateAnnualPlanActTotal(){
      let sum=0;      
        for(let i=0; i<4;i++){
          if(this.annualPlanningAct[i]===0 || this.annualPlanningAct[i]===''|| isNaN(this.annualPlanningAct[i]) ) {this.convertedValue =0}else{this.convertedValue=this.annualPlanningAct[i]}
          sum+=this.convertedValue;
        }      
      this.annualPlanningAct[4]=sum;
    },

    calculateContAuditTotal(){
      let sum=0;      
        for(let i=0; i<4;i++){
          if(this.continuousAudit[i]===0 || this.continuousAudit[i]===''|| isNaN(this.continuousAudit[i]) ) {this.convertedValue =0}else{this.convertedValue=this.continuousAudit[i]}
          sum+=this.convertedValue;
        }      
      this.continuousAudit[4]=sum;
    },

    calculateAdminActTotal(){
      let sum=0;      
        for(let i=0; i<4;i++){
          if(this.adminActivities[i]===0 || this.adminActivities[i]===''|| isNaN(this.adminActivities[i]) ) {this.convertedValue =0}else{this.convertedValue=this.adminActivities[i]}
          sum+=this.convertedValue;
        }      
      this.adminActivities[4]=sum;
    },

    calculateContBudgetTotal(){
      let sum=0;      
        for(let i=0; i<4;i++){
          if(this.contingencyBudget[i]===0 || this.contingencyBudget[i]===''|| isNaN(this.contingencyBudget[i]) ) {this.convertedValue =0}else{this.convertedValue=this.contingencyBudget[i]}
          sum+=this.convertedValue;
        }      
      this.contingencyBudget[4]=sum;
    },

    calculateTotalAdjustmentTotal(){
      let sum=0;      
        for(let i=0; i<4;i++){
          if(this.totalAdjustment[i]===0 || this.totalAdjustment[i]===''|| isNaN(this.totalAdjustment[i]) ) {this.convertedValue =0}else{this.convertedValue=this.totalAdjustment[i]}
          sum+=this.convertedValue;
        }      
      this.totalAdjustment[4]=sum;
    },

    calculateAvailHouursTotal(){
      let sum=0;      
        for(let i=0; i<4;i++){
          if(this.availHoursForAudit[i]===0 || this.availHoursForAudit[i]===''|| isNaN(this.availHoursForAudit[i]) ) {this.convertedValue =0}else{this.convertedValue=this.availHoursForAudit[i]}
          sum+=this.convertedValue;
        }      
      this.availHoursForAudit[4]=sum;
    },

    calculateAllocatedMHTotal(){
      let sum=0;      
        for(let i=0; i<4;i++){
          if(this.actualAllocManhours[i]===0 || this.actualAllocManhours[i]===''|| isNaN(this.actualAllocManhours[i]) ) {this.convertedValue =0}else{this.convertedValue=this.actualAllocManhours[i]}
          sum+=this.convertedValue;
        }      
        this.actualAllocManhours[4]=sum;
    },

    calculateExcessShortTotal(){
      let sum=0;      
        for(let i=0; i<4;i++){
          if(this.excessShort[i]===0 || this.excessShort[i]===''|| isNaN(this.excessShort[i]) ) {this.convertedValue =0}else{this.convertedValue=this.excessShort[i]}
          sum+=this.convertedValue;
        }      
      this.excessShort[4]=sum;
    },

    //handle the edit resource button
    editResource(){
      this.btnConditionEdit=false;
      this.btnConditionAlloc=true;
      this.isDisabled=false;
    },

    showAllocationTable(){
      this.isAllocationTableShow=true;
      this.populateResourceTable();
      
      
    },

    // -------------------------------------------------Manual Adjustment Methods -----------------------------------------------------------------------

    //to retrieve all audit summary items for manipulation
    async retrieveAllAuditeeSummaries(){         
      try{
        const response = await RiskScoringService.getSummaryScores();
        this.scoredAuditeesAll = response.data;
        
        for(let i =0; i<this.scoredAuditeesAll.length;i++){
          console.log(this.scoredAuditeesAll[i]);
        }
      
      }catch(error){
        console.log(error);
      }

    },

    //to create the resource allocation tables from the assessment summary table
    async createResourceAllocations(){
      try{
       
        const response = await RiskScoringService.getSummaryScores();
        this.scoredAuditeesAll = response.data;
        let auditStatus = "";

        for(let i =0; i<this.scoredAuditeesAll.length;i++){
        if(this.scoredAuditeesAll[i].benchmarkResults==="Medium Risk" || this.scoredAuditeesAll[i].benchmarkResults==="High Risk"){
          auditStatus = "For Audit"
        }else{
          auditStatus = "Not For Audit"
        }        
          let data = {
            auditee: this.scoredAuditeesAll[i].auditee,
            benchmarkResult: this.scoredAuditeesAll[i].benchmarkResults,
            auditStatus:auditStatus      
          }
          const response2 = await ResourceService.createResource(data);
          console.log(response2)
          console.log("Not bypassed2")
        }
        
      }catch(error){
        console.log(error)
      }
    },


    async updateResourceTableAtMount(){
      try{

        const response = await RiskScoringService.getSummaryScores();
        this.scoredAuditeesAll = response.data;
        let auditStatus = "";

        for(let i =0; i<this.scoredAuditeesAll.length;i++){
        if(this.scoredAuditeesAll[i].benchmarkResults==="Medium Risk" || this.scoredAuditeesAll[i].benchmarkResults==="High Risk"){
          auditStatus = "For Audit"
        }else{
          auditStatus = "Not For Audit"
        }        
          let data = {
            auditee: this.scoredAuditeesAll[i].auditee,
            benchmarkResult: this.scoredAuditeesAll[i].benchmarkResults,
            auditStatus:auditStatus      
          }
          const response2 = await ResourceService. updateResourceTable(this.scoredAuditeesAll[i].id,data);
          console.log(response2)
          console.log("Not bypassed2")
      }

    }catch(error){
      console.log(error)
    }
  },

    async populateResourceTable(){
      try{
        const response = await ResourceService.retrieveResource();
        this.resourceAllocationsAll = response.data;
        console.log(this.resourceAllocationsAll);
        this.auditeesOperations=[];
        this.auditeesCredit=[];
        this.auditeesTech=[];
        this.auditeesTreasury=[];
        this.countUnitOperations=0;
        this.countUnitCredit=0;
        this.countUnitTech=0;
        this.countUnitTreasury=0;

        //group the data per team
        for(let i=0; i<this.resourceAllocationsAll.length;i++){
          if(this.resourceAllocationsAll[i].auditee.auditor.teamName==="Operations"){
            this.auditeesOperations.push(this.resourceAllocationsAll[i]);
            if(this.resourceAllocationsAll[i].benchmarkResult==="Medium Risk"||this.resourceAllocationsAll[i].benchmarkResult==="High Risk"){
              this.countUnitOperations++;
            }         
          }else if(this.resourceAllocationsAll[i].auditee.auditor.teamName==="Credit"){
            this.auditeesCredit.push(this.resourceAllocationsAll[i]);
            if(this.resourceAllocationsAll[i].benchmarkResult==="Medium Risk"||this.resourceAllocationsAll[i].benchmarkResult==="High Risk"){
              this.countUnitCredit++;
            }         
     
          }else if(this.resourceAllocationsAll[i].auditee.auditor.teamName==="Technology"){
            this.auditeesTech.push(this.resourceAllocationsAll[i]);
            if(this.resourceAllocationsAll[i].benchmarkResult==="Medium Risk"||this.resourceAllocationsAll[i].benchmarkResult==="High Risk"){
              this.countUnitTech++;
            }            
            
          }else{
            this.auditeesTreasury.push(this.resourceAllocationsAll[i]);
            if(this.resourceAllocationsAll[i].benchmarkResult==="Medium Risk"||this.resourceAllocationsAll[i].benchmarkResult==="High Risk"){
              this.countUnitTreasury++;
            }  
          
          }
        }

        console.log("Operations Team: "+this.auditeesOperations);
        console.log("Credit Team: "+this.auditeesCredit);
        console.log("Technology Team: "+this.auditeesTech);
        console.log("Treasury: "+this.auditeesTreasury);

        this.calculateAllocManhours();
        this.calculateAdjustedManhoursAllocation();
        this.calculateTotalAdjustmentOperations();
       
      }catch(error){
        console.log(error);
      }
    },
    
    calculateAllocManhours(){
      this.allocatedManhoursOperations =Number((this.availHoursForAudit[0] / this.countUnitOperations).toFixed(2));
      for(let i=0; i<this.auditeesOperations.length;i++){
        if(this.auditeesOperations[i].benchmarkResult==="Medium Risk"||this.auditeesOperations[i].benchmarkResult==="High Risk"){
          this.auditeesOperations[i].equalAllocation=this.allocatedManhoursOperations;

        }
      }

      this.allocatedManhoursCredit=Number((this.availHoursForAudit[1]/this.countUnitCredit).toFixed(2));
      for(let i=0; i<this.auditeesCredit.length;i++){
        if(this.auditeesCredit[i].benchmarkResult==="Medium Risk"||this.auditeesCredit[i].benchmarkResult==="High Risk"){
          this.auditeesCredit[i].equalAllocation=this.allocatedManhoursCredit;
        }
      }

      this.allocatedManhoursTech=Number((this.availHoursForAudit[2]/this.countUnitTech).toFixed(2));
      for(let i=0; i<this.auditeesTech.length;i++){
        if(this.auditeesTech[i].benchmarkResult==="Medium Risk"||this.auditeesTech[i].benchmarkResult==="High Risk"){
          this.auditeesTech[i].equalAllocation=this.allocatedManhoursTech;
        }
      }

      this.allocatedManhoursTreasury=Number((this.availHoursForAudit[3]/this.countUnitTreasury).toFixed(2));
      for(let i=0; i<this.auditeesTreasury.length;i++){
        if(this.auditeesTreasury[i].benchmarkResult==="Medium Risk"||this.auditeesTreasury[i].benchmarkResult==="High Risk"){
          this.auditeesTreasury[i].equalAllocation=this.allocatedManhoursTreasury;
        }
      }
    },

    calculateTotalAdjustmentOperations(){
      let sum=0;
      let convertedValueGeneric=0;
      this.convertedValue=0;
      for(let i=0;i<this.finalAdjustedMHOperations.length;i++){
        if(this.finalAdjustedMHOperations[i]===0 || this.finalAdjustedMHOperations[i]===''|| isNaN(this.finalAdjustedMHOperations[i]) ) {this.convertedValue =0}else{this.convertedValue=this.finalAdjustedMHOperations[i]}
        sum+=this.convertedValue;
        
      }
      this.actualAllocManhours[0]=Number((sum).toFixed(0)); 
      sum=0;
      for(let i=0;i<this.finalAdjustedMHLending.length;i++){
        if(this.finalAdjustedMHLending[i]===0 || this.finalAdjustedMHLending[i]===''|| isNaN(this.finalAdjustedMHLending[i]) ) {convertedValueGeneric =0}else{convertedValueGeneric=this.finalAdjustedMHLending[i]}
        sum+=convertedValueGeneric;       
      }
      this.actualAllocManhours[1]=Number((sum).toFixed(0)); 
      
      sum=0;
      convertedValueGeneric=0;
      for(let i=0;i<this.finalAdjustedMHTech.length;i++){
        if(this.finalAdjustedMHTech[i]===0 || this.finalAdjustedMHTech[i]===''|| isNaN(this.finalAdjustedMHTech[i]) ) {convertedValueGeneric =0}else{convertedValueGeneric=this.finalAdjustedMHTech[i]}
        sum+=convertedValueGeneric;
        
      }
      this.actualAllocManhours[2]=Number((sum).toFixed(0)); 
      
      sum=0;
      convertedValueGeneric=0;
      for(let i=0;i<this.finalAdjustedMHTreasury.length;i++){
        if(this.finalAdjustedMHTreasury[i]===0 || this.finalAdjustedMHTreasury[i]===''|| isNaN(this.finalAdjustedMHTreasury[i]) ) {convertedValueGeneric =0}else{convertedValueGeneric=this.finalAdjustedMHTreasury[i]}
        sum+=convertedValueGeneric;
        
      }
      this.actualAllocManhours[3]=Number((sum).toFixed(0)); 
      
    },

    calculateAdjustedManhoursAllocation(){
      let convertedValue2 = 0;
      for(let i=0;i<this.auditeesOperations.length;i++){
        
        if(this.auditeesOperations[i].equalAllocation===0 || this.auditeesOperations[i].equalAllocation===''|| isNaN(this.auditeesOperations[i].equalAllocation) ) {this.convertedValue =0}else{this.convertedValue=this.auditeesOperations[i].equalAllocation}
        if(this.auditeesOperations[i].manhourAdjustment===0 || this.auditeesOperations[i].manhourAdjustment===''|| isNaN(this.auditeesOperations[i].manhourAdjustment) ) {convertedValue2 =0}else{convertedValue2=this.auditeesOperations[i].manhourAdjustment}
      
        this.finalAdjustedMHOperations[i]=Number((this.convertedValue+convertedValue2).toFixed(2));
                
      }

      let convertedValueGeneric1=0;
      let convertedValueGeneric2=0;
      
      for(let i=0;i<this.auditeesCredit.length;i++){
        
        if(this.auditeesCredit[i].equalAllocation===0 || this.auditeesCredit[i].equalAllocation===''|| isNaN(this.auditeesCredit[i].equalAllocation) ) {this.convertedValue =0}else{this.convertedValue=this.auditeesCredit[i].equalAllocation}
        if(this.auditeesCredit[i].manhourAdjustment===0 || this.auditeesCredit[i].manhourAdjustment===''|| isNaN(this.auditeesCredit[i].manhourAdjustment) ) {convertedValue2 =0}else{convertedValue2=this.auditeesCredit[i].manhourAdjustment}
      
        this.finalAdjustedMHLending[i]=Number((this.convertedValue+convertedValue2).toFixed(2));    
      
      }

      convertedValueGeneric1=0;
      convertedValueGeneric2=0;
      for(let i=0;i<this.auditeesTech.length;i++){
        
        if(this.auditeesTech[i].equalAllocation===0 || this.auditeesTech[i].equalAllocation===''|| isNaN(this.auditeesTech[i].equalAllocation) ) {convertedValueGeneric1 =0}else{convertedValueGeneric1=this.auditeesTech[i].equalAllocation}
        if(this.auditeesTech[i].manhourAdjustment===0 || this.auditeesTech[i].manhourAdjustment===''|| isNaN(this.auditeesTech[i].manhourAdjustment) ) {convertedValueGeneric2 =0}else{convertedValueGeneric2=this.auditeesTech[i].manhourAdjustment}
      
        this.finalAdjustedMHTech[i]=Number((convertedValueGeneric1+convertedValueGeneric2).toFixed(2));     
      }

      convertedValueGeneric1=0;
      convertedValueGeneric2=0;
      for(let i=0;i<this.auditeesTreasury.length;i++){
        
        // if(this.adjustedManhoursAllocationTreasury[i]===0 || this.adjustedManhoursAllocationTreasury[i]===''|| isNaN(this.adjustedManhoursAllocationTreasury[i]) ) {convertedValueGeneric2 =0}else{convertedValueGeneric2=this.adjustedManhoursAllocationTreasury[i]}
      
        if(this.auditeesTreasury[i].equalAllocation===0 || this.auditeesTreasury[i].equalAllocation===''|| isNaN(this.auditeesTreasury[i].equalAllocation) ) {convertedValueGeneric1 =0}else{convertedValueGeneric1=this.auditeesTreasury[i].equalAllocation}
        if(this.auditeesTreasury[i].manhourAdjustment===0 || this.auditeesTreasury[i].manhourAdjustment===''|| isNaN(this.auditeesTreasury[i].manhourAdjustment) ) {convertedValueGeneric2 =0}else{convertedValueGeneric2=this.auditeesTreasury[i].manhourAdjustment}
      
        this.finalAdjustedMHTreasury[i]=Number((convertedValueGeneric1+convertedValueGeneric2).toFixed(2));     
      }

      
    },
    async saveResourceUpdates(){
      try {
        if(this.id==1){
          for(let i=0;i<this.auditeesOperations.length;i++){
          let data={
            equalAllocation:this.auditeesOperations[i].equalAllocation,
            adjustedManhours:this.finalAdjustedMHOperations[i],
            auditStatus: this.auditeesOperations[i].auditStatus,
            manhourAdjustment: this.auditeesOperations[i].manhourAdjustment,
            overrideReason: this.auditeesOperations[i].overrideReason
          }
          const response = await ResourceService.inputManhoursAndReason(this.auditeesOperations[i].id, data);
          console.log(response)  

          let data2={
          actualAllocatedManhours:this.actualAllocManhours[0],
          excessShort:this.excessShort[0]
        }
        const response2 = await AuditorService.putAdjustedManhours(this.id,data2)
        console.log(response2) 
        } 
        }

        if(this.id==2){
          for(let i=0;i<this.auditeesCredit.length;i++){
        let data={
           equalAllocation:this.auditeesCredit[i].equalAllocation,
            adjustedManhours:this.finalAdjustedMHLending[i],
            auditStatus: this.auditeesCredit[i].auditStatus,
            manhourAdjustment: this.auditeesCredit[i].manhourAdjustment,
            overrideReason: this.auditeesCredit[i].overrideReason
        }
        const response= await  ResourceService.inputManhoursAndReason(this.auditeesCredit[i].id,data)
        console.log(response)   
        
       }
       let data2={
          actualAllocatedManhours:this.actualAllocManhours[1],
          excessShort:this.excessShort[1]
        }
        const response2 = await AuditorService.putAdjustedManhours(this.id,data2)
        console.log(response2) 
        }

        if(this.id == 3){
          for(let i=0;i<this.auditeesTech.length;i++){
          let data={
          
            equalAllocation:this.auditeesTech[i].equalAllocation,
            
            // adjustedManhours:this.auditeesTech[i].adjustedManhours,
            adjustedManhours:this.finalAdjustedMHTech[i],
            auditStatus: this.auditeesTech[i].auditStatus,
            manhourAdjustment: this.auditeesTech[i].manhourAdjustment,
            overrideReason: this.auditeesTech[i].overrideReason
          }
          const response= await  ResourceService.inputManhoursAndReason(this.auditeesTech[i].id,data)
            console.log(response)       
         }
  
         let data2={
            actualAllocatedManhours:this.actualAllocManhours[2],
            excessShort:this.excessShort[2]
          }
          const response2 = await AuditorService.putAdjustedManhours(this.id,data2)
          console.log(response2)
       }
         if(this.id==4){
          for(let i=0;i<this.auditeesTreasury.length;i++){
          let data={
          
           equalAllocation:this.auditeesTreasury[i].equalAllocation,
            adjustedManhours:this.finalAdjustedMHTreasury[i],
            auditStatus: this.auditeesTreasury[i].auditStatus,
            manhourAdjustment: this.auditeesTreasury[i].manhourAdjustment,
            overrideReason: this.auditeesTreasury[i].overrideReason
        }
        const response = await ResourceService.inputManhoursAndReason(this.auditeesTreasury[i].id, data);
        console.log(response)          
       } 

         let data2={
          actualAllocatedManhours:this.actualAllocManhours[3],
          excessShort:this.excessShort[3]
        }
        const response2 = await AuditorService.putAdjustedManhours(this.id,data2)
        console.log(response2)
         }

         this.saveToast()


        //  window.alert("You have successfully saved any changes made.");





      }catch(error){
        console.log(error)
      }
      
    },

    saveToast(){       
        this.displayToastBox=true;
            this.displaySuccessToast=true;
            setTimeout(()=>{
            this.displayToastBox=false;
            this.displaySuccessToast=false;

            },3000)
    
      },  
    clearInputs(){
      if(this.id==1){
        for(let i=0;i<this.auditeesOperations.length;i++){
          this.auditeesOperations[i].manhourAdjustment=0;
          this.auditeesOperations[i].overrideReason='';
        }
      }

      if(this.id==2){
        for(let i=0;i<this.auditeesCredit.length;i++){
          this.auditeesCredit[i].manhourAdjustment=0;
          this.auditeesCredit[i].overrideReason='';
        }
      }

      if(this.id==3){
        for(let i=0;i<this.auditeesTech.length;i++){
          this.auditeesTech[i].manhourAdjustment=0;
          this.auditeesTech[i].overrideReason='';
        }
      }

      if(this.id==4){
        for(let i=0;i<this.auditeesTreasury.length;i++){
          this.auditeesTreasury[i].manhourAdjustment=0;
          this.auditeesTreasury[i].overrideReason='';
        }
      }
      this.cancelScore();
    },

    cancelScore(){           
            this.displayToastBox=true;
            this.displayCancelToast=true;
            setTimeout(()=>{
              this.displayToastBox=false;
              this.displayCancelToast=false;

            },3000)

        },

  },
  watch: {
    headcount: {
      handler(){
        this.calculateTotalWorkHours();
        this.calculateHeadcountTotal();
      },
      deep:true
    },
    numberOfWorkDays: {
      handler(){
        this.calculateTotalWorkHours();
        this.calculateNumberOfWorkDaysTotal();
      },
      deep:true
    },
    numberOfDailyWorkHours: {
      handler(){
        this.calculateTotalWorkHours();
      },
      deep:true
    },

    totalWorkHours:{
      handler(){
        this.calculateSumTotalWorkHours();
        // this.calculateTotalWorkHours();
        this.calculateAvailableHours();
        
        // this.calculateAvailableHours();
        
      },
      deep:true
    },

    annualLeaves:{
      handler(){
        this.calculateTotalAdjustments();
        this.calculateAnnualLeavesTotal();
      },
      deep:true
    },

    maternityLeave:{
      handler(){
        this.calculateMaternityLeavesTotal();
        this.calculateTotalAdjustments();
        
      },
      deep:true
    },

    annualPlanningAct:{
      handler(){
        this.calculateTotalAdjustments();
        this.calculateAnnualPlanActTotal();
       
      },
      deep:true
    },

    continuousAudit:{
      handler(){
        this.calculateTotalAdjustments();
        this.calculateContAuditTotal();
        
      },
      deep:true
    },
    adminActivities:{
      handler(){
        this.calculateTotalAdjustments();
        this.calculateAdminActTotal();
       
      },
      deep:true
    },

    contingencyBudget:{
      handler(){
        this.calculateTotalAdjustments();
        this.calculateContBudgetTotal();
        
      },
      deep:true
    },

    totalAdjustment:{
      handler(){
        this.calculateAvailableHours();
        this.calculateTotalAdjustmentTotal();
       
      },
      deep:true
    },

    availHoursForAudit:{
      handler(){
        
        this.calculateExcessShort();
        this.calculateAvailHouursTotal();
        // this.calculateTotals();
      },
      deep:true
    },

    actualAllocManhours:{
      handler(){
        this.calculateExcessShort();
        this.calculateAllocatedMHTotal();
        
      },
      deep:true
    },
    excessShort:{
      handler(){
        // this.calculateExcessShort();
        this.calculateExcessShortTotal();
        
      },
      deep:true
    },
   
    auditeesOperations:{
      handler(){
        this.calculateAdjustedManhoursAllocation();     
      },
      deep:true
    },

    auditeesCredit:{
      handler(){
        this.calculateAdjustedManhoursAllocation();     
      },
      deep:true
    },

    auditeesTech:{
      handler(){
        this.calculateAdjustedManhoursAllocation();      
      },
      deep:true
    },

    auditeesTreasury:{
      handler(){       
        // this.calculateExcessShort();     
        this.calculateAdjustedManhoursAllocation();
            
      },
      deep:true
    },

    finalAdjustedMHOperations:{
      handler(){
        
        this.calculateTotalAdjustmentOperations();
      },
      deep:true
    },

    finalAdjustedMHLending:{
      handler(){
        
        this.calculateTotalAdjustmentOperations();
      },
      deep:true
    },

    finalAdjustedMHTech:{
      handler(){
        
        this.calculateTotalAdjustmentOperations();
      },
      deep:true
    },

    finalAdjustedMHTreasury:{
      handler(){
        
        this.calculateTotalAdjustmentOperations();
      },
      deep:true
    },
    

  },
  
  created(){
    this.createResourceAllocations();
  },
   
  mounted(){
    try {
    this.retrieveDataFromDatabase();
    this.createResourceAllocations();
    this.updateResourceTableAtMount();
    this.calculateAdjustedManhoursAllocation();
    
  } catch (error) {
    console.error('Error during component mount:', error);
  }
    
  }
    
}

</script>

<style>

</style>