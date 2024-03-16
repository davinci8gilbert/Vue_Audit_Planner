<template>
  <div>
    <h1>Generate Report</h1>
    <div>
      <select v-model="selectValue">
        <option v-for="(report,index) in reportsList" :key="index" :value="report">{{ report }}</option>
      </select>
    </div>
    <ManhourAllocationReport v-if="selectValue==='Final Manhour Allocation'"/>
    <RiskProfileReport v-if="selectValue==='Audit Planning Risk Profile'"/>
    <RiskProfileComparePrint v-if="selectValue==='Prior vs Current Year Risk Profile'"/>
    <SectorRiskProfileCompare v-if="selectValue==='Risk Profile Per Sector'"/>
    <ResourceSummaryPrint v-if="selectValue==='Manhours Allocation Summary By Team'"/>
  </div>

 
</template>

<script>
import ManhourAllocationReport from '@/components//ManhourAllocationReport.vue';
import RiskProfileReport from './RiskProfileReport.vue';
import RiskProfileComparePrint from './RiskProfileComparePrint.vue';
import SectorRiskProfileCompare from './SectorRiskProfileCompare.vue';
import ResourceSummaryPrint from './ResourceSummaryPrint.vue'

export default {
  name:"GenerateReport",
  components:{ManhourAllocationReport,ResourceSummaryPrint,RiskProfileReport,RiskProfileComparePrint,SectorRiskProfileCompare},
  data(){
    return{
      reportsList:['Please select a Report','Final Manhour Allocation','Manhours Allocation Summary By Team','Audit Planning Risk Profile','Prior vs Current Year Risk Profile','Risk Profile Per Sector'],
      selectValue:'Please select a Report',
      showValue:''
    }
    
    
  }
}
</script>

<style>

</style>