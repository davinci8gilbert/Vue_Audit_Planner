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
          <td id="tab-lvl1">Annual Budget:</td> 
        </tr>
        <tr>
          <td id="tab-lvl2">Headcount</td>
          <td><input type="text" v-model.number= "headcount[0]" :disabled=isInputDisabled(1)></td>
          <td><input type="text" v-model.number= "headcount[1]" :disabled=isInputDisabled(2)></td>
          <td><input type="text" v-model.number= "headcount[2]" :disabled=isInputDisabled(3)></td>
          <td><input type="text" v-model.number= "headcount[3]" :disabled=isInputDisabled(4)></td>
          <td><span>{{ headcount[4] }}</span></td>
        </tr>
        <tr>
          <td id="tab-lvl2">Number Of Working Days</td>
          <td><input type="text" v-model.number= "numberOfWorkDays[0]" :disabled=isInputDisabled(1)></td>
          <td><input type="text" v-model.number= "numberOfWorkDays[1]" :disabled=isInputDisabled(2)></td>
          <td><input type="text" v-model.number= "numberOfWorkDays[2]" :disabled=isInputDisabled(3)></td>
          <td><input type="text" v-model.number= "numberOfWorkDays[3]" :disabled=isInputDisabled(4)></td>
          <td><span>{{ numberOfWorkDays[4] }}</span></td>
        </tr>
        <tr>
          <td id="tab-lvl2">Number of Daily Work Hours</td>
          <td><input type="text" v-model.number= "numberOfDailyWorkHours[0]" :disabled=isInputDisabled(1)></td>
          <td><input type="text" v-model.number= "numberOfDailyWorkHours[1]" :disabled=isInputDisabled(2)></td>
          <td><input type="text" v-model.number= "numberOfDailyWorkHours[2]" :disabled=isInputDisabled(3)></td>
          <td><input type="text" v-model.number= "numberOfDailyWorkHours[3]" :disabled=isInputDisabled(4)></td>
          <td><span>{{ numberOfDailyWorkHours[4] }}</span></td>
        </tr>
        <tr>
          <td id="tab-lvl3">Total Working Hours</td>
          <td><span>{{ totalWorkHours[0] }}</span></td>
          <td><span>{{ totalWorkHours[1] }}</span></td>
          <td><span>{{ totalWorkHours[2] }}</span></td>
          <td><span>{{ totalWorkHours[3] }}</span></td>
          <td><span>{{ totalWorkHours[4] }}</span></td>
        </tr>
        <tr>
          <td colspan="4"></td>
        </tr>
        <tr>
          <td id="tab-lvl1" colspan="6">Adjustments (in Hours)</td>       
        </tr>
        <tr>
          <td id="tab-lvl2"> Annual Leaves</td>
          <td><input type="number" v-model.number= "annualLeaves[0]" :disabled=isInputDisabled(1)></td>
          <td><input type="number" v-model.number= "annualLeaves[1]" :disabled=isInputDisabled(2)></td>
          <td><input type="number" v-model.number= "annualLeaves[2]" :disabled=isInputDisabled(3)></td>
          <td><input type="number" v-model.number= "annualLeaves[3]" :disabled=isInputDisabled(4)></td>
          <td><span>{{ annualLeaves[4] }}</span></td>
        </tr>
        <tr>
          <td id="tab-lvl2">Maternity Leave (Known)</td>
          <td><input type="number" v-model.number= "maternityLeave[0]" :disabled=isInputDisabled(1)></td>
          <td><input type="number" v-model.number= "maternityLeave[1]" :disabled=isInputDisabled(2)></td>
          <td><input type="number" v-model.number= "maternityLeave[2]" :disabled=isInputDisabled(3)></td>
          <td><input type="number" v-model.number= "maternityLeave[3]" :disabled=isInputDisabled(4)></td>
          <td><span>{{ maternityLeave[4] }}</span></td>
        </tr>
        <tr>
          <td id="tab-lvl2">Annual Planning Activities</td>
          <td><input type="number" v-model.number= "annualPlanningAct[0]" :disabled=isInputDisabled(1)></td>
          <td><input type="number" v-model.number= "annualPlanningAct[1]" :disabled=isInputDisabled(2)></td>
          <td><input type="number" v-model.number= "annualPlanningAct[2]" :disabled=isInputDisabled(3)></td>
          <td><input type="number" v-model.number= "annualPlanningAct[3]" :disabled=isInputDisabled(4)></td>
          <td><span>{{ annualPlanningAct[4] }}</span></td>
        </tr>
        <tr>
          <td id="tab-lvl2">Continuous Audit</td>
          <td><input type="number" v-model.number= "continuousAudit[0]" :disabled=isInputDisabled(1)></td>
          <td><input type="number" v-model.number= "continuousAudit[1]" :disabled=isInputDisabled(2)></td>
          <td><input type="number" v-model.number= "continuousAudit[2]" :disabled=isInputDisabled(3)></td>
          <td><input type="number" v-model.number= "continuousAudit[3]" :disabled=isInputDisabled(4)></td>
          <td><span>{{ continuousAudit[4] }}</span></td>
        </tr>
        <tr>
          <td id="tab-lvl2">Administrative Activities</td>
          <td><input type="number" v-model.number= "adminActivities[0]" :disabled=isInputDisabled(1)></td>
          <td><input type="number" v-model.number= "adminActivities[1]" :disabled=isInputDisabled(2)></td>
          <td><input type="number" v-model.number= "adminActivities[2]" :disabled=isInputDisabled(3)></td>
          <td><input type="number" v-model.number= "adminActivities[3]" :disabled=isInputDisabled(4)></td>
          <td><span>{{ adminActivities[4] }}</span></td>
        </tr>
        <tr>
          <td id="tab-lvl2">Contingency Budget</td>
          <td><input type="number" v-model.number= "contingencyBudget[0]" :disabled=isInputDisabled(1)></td>
          <td><input type="number" v-model.number= "contingencyBudget[1]" :disabled=isInputDisabled(2)></td>
          <td><input type="number" v-model.number= "contingencyBudget[2]" :disabled=isInputDisabled(3)></td>
          <td><input type="number" v-model.number= "contingencyBudget[3]" :disabled=isInputDisabled(4)></td>
          <td><span>{{ contingencyBudget[4] }}</span></td>
        </tr>
        <tr>
          <td id="tab-lvl3">Total Adjustment</td>
          <td><span>{{ totalAdjustment[0] }}</span></td>
          <td><span>{{ totalAdjustment[1] }}</span></td>
          <td><span>{{ totalAdjustment[2] }}</span></td>
          <td><span>{{ totalAdjustment[3] }}</span></td>
          <td><span>{{ totalAdjustment[4] }}</span></td>
        </tr>
        <tr>
          <td colspan="6"></td>       
        </tr>
        <tr>
          <td id="tab-lvl1">Available Hours For Audit</td>
         
          <td><span>{{ availHoursForAudit[0] }}</span></td>
          <td><span>{{ availHoursForAudit[1] }}</span></td>
          <td><span>{{ availHoursForAudit[2] }}</span></td>
          <td><span>{{ availHoursForAudit[3] }}</span></td>
          <td><span>{{ availHoursForAudit[4] }}</span></td>
        </tr>
        <tr>
          <td id="tab-lvl1">Actual Allocated Manhours</td>
          <td><span>{{ actualAllocManhours[0] }}</span></td>
          <td><span>{{ actualAllocManhours[1] }}</span></td>
          <td><span>{{ actualAllocManhours[2] }}</span></td>
          <td><span>{{ actualAllocManhours[3] }}</span></td>
          <td><span>{{ actualAllocManhours[4] }}</span></td>
        </tr>
        <tr>
          <td id="tab-lvl1">Excess/(Short)</td>
          <td><span>{{ excessShort[0] }}</span></td>
          <td><span>{{ excessShort[1] }}</span></td>
          <td><span>{{ excessShort[2] }}</span></td>
          <td><span>{{ excessShort[3] }}</span></td>
          <td><span>{{ excessShort[4] }}</span></td>
        </tr>
      </table>
      <div class="btn-alloc">
        <button id="btn-alloc" v-if=btnConditionAlloc @click="postDataResource()">Allocate Manhours</button>
        <button id="btn-alloc" v-if=btnConditionEdit>Edit Resource</button>
      </div>
      <p id="table2-title">MANHOUR ALLOCATION FOR AUDIT ACTIVITIES</p>
      <table id="ralloc-units">
        <thead>
          <tr>
            <th></th>
            <th>Auditable Units</th>  
            <th>Equal Manhours Allocation</th> 
            <th>Adjusted Manhours Allocation</th>
          </tr>
        </thead>
          <tr>
            <td id="tab-lvl1" colspan="4">Operations & Compliance Team: </td>
          </tr>
          <tr>
            <td><input type="checkbox" name="unitCheckbox"></td>
            <td id="tab-lvl2">Sales</td>
            <td><span>300</span></td>
            <td>400</td>
          </tr>
          <tr>
            <td><input type="checkbox" name="unitCheckbox"></td>
            <td id="tab-lvl2">Wealth Management</td>
            <td><span>400</span></td>
            <td><span>500</span></td>
          </tr>   
          <tr>
            <td id="tab-lvl1" colspan="3">Technology Team: </td>
          </tr> 
          <tr>
            <td><input type="checkbox" name="unitCheckbox"></td>
            <td id="tab-lvl2">Unit 1</td>
            <td><span>300</span></td>
            <td>400</td>
          </tr>  
          <tr>
            <td><input type="checkbox" name="unitCheckbox"></td>
            <td id="tab-lvl2">Unit 2</td>
            <td><span>400</span></td>
            <td><span>500</span></td>
          </tr>
          <tr>
            <td id="tab-lvl1" colspan="3">Lending Team: </td>
          </tr> 
          <tr>
            <td><input type="checkbox" name="unitCheckbox"></td>
            <td id="tab-lvl2">Unit 1</td>
            <td><span>300</span></td>
            <td>400</td>
          </tr>  
          <tr>
            <td><input type="checkbox" name="unitCheckbox"></td>
            <td id="tab-lvl2">Unit 2</td>
            <td><span>400</span></td>
            <td><span>500</span></td>
          </tr>
          <tr>
            <td id="tab-lvl1" colspan="3">Treasury Team: </td>
          </tr> 
          <tr>
            <td><input type="checkbox" name="unitCheckbox"></td>
            <td id="tab-lvl2">Unit 1</td>
            <td><span>300</span></td>
            <td>400</td>
          </tr>  
          <tr>
            <td><input type="checkbox" name="unitCheckbox"></td>
            <td id="tab-lvl2">Unit 2</td>
            <td><span>400</span></td>
            <td><span>500</span></td>
          </tr>
      </table>
    </div>
  </div>
</template>

<script>
import AuditorService from "@/services/AuditorService";
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
      auditorDataAll:[]
         
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

            const response = await AuditorService.postResource(this.id, this.data);
            console.log(response.data);
            this.btnConditionAlloc=false;
            this.btnConditionEdit=true;
            this.isInputDisabled(-1)
      

      }catch(error){
        console.log(error);
      }
      
   },

    justToCheck(){
      console.log("Just to Check")
    },

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


    isInputDisabled(id){
     
      return this.id!=id
      
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

    calculateExcessShortTotal(){
      let sum=0;      
        for(let i=0; i<4;i++){
          if(this.excessShort[i]===0 || this.excessShort[i]===''|| isNaN(this.excessShort[i]) ) {this.convertedValue =0}else{this.convertedValue=this.excessShort[i]}
          sum+=this.convertedValue;
        }      
      this.excessShort[4]=sum;
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
        this.calculateTotalWorkHours();
        this.calculateSumTotalWorkHours();
        this.calculateAvailableHours();
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
        
      },
      deep:true
    },
    excessShort:{
      handler(){
        this.calculateExcessShort();
        this.calculateExcessShortTotal();
        
      },
      deep:true
    }

  },
  mounted(){
    this.retrieveDataFromDatabase();
  }
    
}

</script>

<style>

</style>