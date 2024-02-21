<template>
  <div class="riskassessment">
    <div class="ra-table"></div>
    <table id="ra-tablearea">
      <tr>
        <th></th>
        <th>Sector</th>
        <th>Unit</th>
        <th>Factor</th>
        <th>Credit Risk - Loan Portfolio Risk</th>
        <th>Credit Risk - Counterparty Credit Risk</th>
        <th>Market Risk - Interest Rate Risk</th>
        <th>Market Risk - Commodity Price Risk</th>
        <th>Operational Risk - Internal Processes Risk</th>
        <th>Operational Risk - Fraud and Misconduct Risk</th>
        <th>Operational Risk - Business Continuity Risk</th>
        <th>Liquidity Risk - Funding and Liquidity Risk</th>
        <th>Liquidity Risk - Contingency Funding Risk</th>
        <th>Compliance Risk</th>
        <th>Legal Risk</th>
        <th>Strategy Risk - Business Model Risk</th>
        <th>Strategy Risk - Reputational Risk</th>
        <th>Cybersecurity Risk</th>
        <th>Interest Rate Risk</th>
        <th>AML and Financial Crime Risk</th>
        <th>ESG Risk</th>
        <th>Conduct Risk</th>
        <th>Total Scores</th>
        <th>No. Of Risks Rated</th>
        <th>BenchMark Results</th>
      </tr>
      <tr v-for="(item, index) in summaryScores" :key="index">
        <td><input type="checkbox" name="unitCheckbox" :checked="checkedIndex === index" @change="updateCheckbox(index), getSelectedUnits(item)" v-model="isChecked[index]"></td>
        <td>{{ item.auditee.sector }}</td>
        <td>{{ item.auditee.unit }}</td>
        <td>
          <button v-show="checkedIndex===index && isChecked[index]===true " @click="showScoringEvent(index)">Score</button>
         </td>
        <td><span>{{ item.creditRiskLoanPortfolioRisk }}</span></td>
        <td><span>{{ item.creditRiskCounterpartyCreditRisk }}</span></td>
        <td><span>{{ item.marketRiskInterestRateRisk }}</span></td>
        <td><span>{{ item.marketRiskCommodityPriceRisk }}</span></td>
        <td><span>{{ item.operationalRiskInternalProcessesRisk }}</span></td>
        <td><span>{{ item.operationalRiskFraudMisconductRisk }}</span></td>
        <td><span>{{ item.operationalRiskBusinessContinuityRisk }}</span></td>
        <td><span>{{ item.liquidityRiskFundingLiquidityRisk }}</span></td>
        <td><span>{{ item.liquidityRiskContingencyFundingRisk }}</span></td>
        <td><span>{{ item.complianceRisk }}</span></td>
        <td><span>{{ item.legalRisk }}</span></td>
        <td><span>{{ item.strategyRiskBusinessModelRisk }}</span></td>
        <td><span>{{ item.strategyRiskReputationalRisk }}</span></td>
        <td><span>{{ item.cyberSecurityRisk }}</span></td>
        <td><span>{{ item.interestRateRisk }}</span></td>
        <td><span>{{ item.amlFinancialCrimeRisk }}</span></td>
        <td><span>{{ item.esgRisk }}</span></td>
        <td><span>{{ item.conductRisk }}</span></td>
        <td><span>{{item.totalScores}}</span></td>
        <td><span>{{item.numberRisksRated}}</span></td>
        <td><span>{{ item.benchmarkResults }}</span></td>
                      
      </tr>
                   
    </table>
      
       <RiskScoring v-if="showRiskScoring  " :unit="unit" :getUpdateSave="getUpdateSave"  :clearChecking="clearChecking" />
  </div>
</template>

<script>
import RiskScoring from "@/components/RiskScoring";
// import AuditeeService from "@/services/AuditeeService";
import RiskScoringService from "@/services/RiskScoringService";

export default {
  name: "RiskAssessment",
  components:{
    RiskScoring
  },
  data(){
    return{
      unitsForAssessment:[],
      factorsForAssessment:[],
      selectedUnits:[],
      summaryScores:[],
      isChecked:Array(length).fill(false),
      showFactor:false,
      unit:'',
      crLoanPortfolioRiskScore:0,
      crCounterPartyCreditRiskScore:0,
      mrInterestRateRiskScore: 0,
      mrCommodityPriceRiskScore: 0,
      orInternalProcessesRiskScore: 0,
      orFraudaAndMisconductRiskScore: 0,
      orBusinessContinuityRisk: 0,
      lrFundingAndLiquidityRiskScore: 0,
      lrContingencyFundingRiskScore: 0,
      complianceRiskScore: 0,
      legalRiskScore: 0,
      srBusinessModelRiskScore: 0,
      srReputationalRiskScore: 0,
      cybersecurityRiskScore: 0,
      interestRateRiskScore: 0,
      amlAndFinancialCrimeRiskScore: 0,
      esgRiskScore: 0,
      conductRiskScore:0,
      totalScores:0,
      numberOfRisksRated:0,
      benchmarkResults:'',
      checkedIndex:null,
      selectedUnit:'',
      showRiskScoring:false,
      isUnitChanged:true,
      showButton:false,
      assessmentScoresAll:[],
      risks:[0,0.0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      assessmentScoresAll2:[],
      counter:0,
      totalSummaryScores:0,
      nonZeroScoreCount:0,
      benchmarkActual:''

    }
  },
  methods:{
    displayFactors(){
      this.showFactor= !this.showFactor;
    },
    
    updateCheckbox(index){
      this.checkedIndex=index;
      this.isChecked[index] =true;
      
      console.log(this.checkedIndex+"  "+index);


    },
    getSelectedUnits(selectedUnit){
      this.selectedUnit = selectedUnit;
      this.unit = this.selectedUnit.auditee.unit

      // console.log(this.selectedUnit);

    },
    showScoringEvent(index){
    
      if(this.isChecked[index]===true){
        this.showRiskScoring = true;
        
      } else{
       
        window.alert("You have not ticked the checkbox!")
      }

      
    },

    clearChecking(savedDone){
      if(savedDone===true){
        this.isChecked= new Array(length).fill(false);
      
      }  
      
      },  

   getUpdateSave(value){
      this.showRiskScoring = value;
      this.isChecked= new Array(length).fill(false);
   },

   
  //  getAllUnits(){
  //     AuditeeService.getAuditees()
  //       .then(response =>{
  //         this.unitsForAssessment = response.data;
  //       })
  //       .catch(error =>{
  //         console.log(error);
  //       })     
  //  },

   getAllSummaryScores(){
      RiskScoringService.getSummaryScores()
        .then(response =>{
          this.summaryScores=response.data;
          console.log(this.summaryScores)
        })
        .catch(error=>{
          console.log(error)
        })
   },

   async getAllAssessmentScores(){

    try{
      const response = await RiskScoringService.getAssessmentScores();
      this.assessmentScoresAll = response.data;
        console.log(this.assessmentScoresAll);
        
        for (let i = 0; i < this.assessmentScoresAll.length; i++){
              this.risks[0]+=(this.assessmentScoresAll[i].creditRiskLoanPortfolioRisk)*this.assessmentScoresAll[i].factorWeight;
              this.risks[1]+=(this.assessmentScoresAll[i].creditRiskCounterpartyCreditRisk)*this.assessmentScoresAll[i].factorWeight;
              this.risks[2]+=(this.assessmentScoresAll[i].marketRiskInterestRateRisk)*this.assessmentScoresAll[i].factorWeight;
              this.risks[3]+=(this.assessmentScoresAll[i].maketRiskCommodityPriceRisk)*this.assessmentScoresAll[i].factorWeight;
              this.risks[4]+=(this.assessmentScoresAll[i].operationalRiskInternalProcessesRisk)*this.assessmentScoresAll[i].factorWeight;
              this.risks[5]+=(this.assessmentScoresAll[i].operationalRiskFraudMisconductRisk)*this.assessmentScoresAll[i].factorWeight;
              this.risks[6]+=(this.assessmentScoresAll[i].operationalRiskBusinessContinuityRisk)*this.assessmentScoresAll[i].factorWeight;
              this.risks[7]+=(this.assessmentScoresAll[i].liquidityRiskFundingLiquidityRisk)*this.assessmentScoresAll[i].factorWeight;
              this.risks[8]+=(this.assessmentScoresAll[i].liquidityRiskContingencyFundingRisk)*this.assessmentScoresAll[i].factorWeight;
              this.risks[9]+=(this.assessmentScoresAll[i].complianceRisk)*this.assessmentScoresAll[i].factorWeight;
              this.risks[10]+=(this.assessmentScoresAll[i].legalRisk)*this.assessmentScoresAll[i].factorWeight;
              this.risks[11]+=(this.assessmentScoresAll[i].strategyRiskBusinessModelRisk)*this.assessmentScoresAll[i].factorWeight;
              this.risks[12]+=(this.assessmentScoresAll[i].strategyRiskReputationalRisk)*this.assessmentScoresAll[i].factorWeight;
              this.risks[13]+=(this.assessmentScoresAll[i].cybersecurityRisk)*this.assessmentScoresAll[i].factorWeight;
              this.risks[14]+=(this.assessmentScoresAll[i].interestRateRisk)*this.assessmentScoresAll[i].factorWeight;
              this.risks[15]+=(this.assessmentScoresAll[i].amlFinancialCrimeRisk)*this.assessmentScoresAll[i].factorWeight;
              this.risks[16]+=(this.assessmentScoresAll[i].esgRisk)*this.assessmentScoresAll[i].factorWeight;
              this.risks[17]+=(this.assessmentScoresAll[i].esgRisk)*this.assessmentScoresAll[i].factorWeight;
              

              //if statement to cut-off scores when all the factors are covered
              if(this.counter == 8){
                //loop to add all scores the risks and count all scores that have non-zero values
                for(let i = 0; i < this.risks.length; i++){
                  
                  if(!isNaN(this.risks[i])){
                    this.totalSummaryScores +=this.risks[i];
                  }

                  console.log("risk score: "+ this.risks[i])
                  if(this.risks[i]!==0&&!isNaN(this.risks[i])) {
                    
                    this.nonZeroScoreCount++
                  }
                }

                if(this.totalSummaryScores <this.nonZeroScoreCount*3){
                  this.benchmarkActual = "Low Risk";
                }else if(this.totalSummaryScores >this.nonZeroScoreCount*3 &&this.totalSummaryScores <=this.nonZeroScoreCount*7 ){
                  this.benchmarkActual = "Medium Risk";
                }else if(this.totalSummaryScores <this.nonZeroScoreCount*7&&this.totalSummaryScores <=this.nonZeroScoreCount*10){
                  this.benchmarkActual = "High Risk";
                }else{
                  this.benchmarkActual = "Erroneous Score";
                }
                console.log(this.totalSummaryScores+"  "+this.nonZeroScoreCount+"   "+this.benchmarkActual+"  checking for counted values" )

                let data = {
                          auditee:{
                            id:this.assessmentScoresAll[i].auditee.id,
                            unit: this.assessmentScoresAll[i].auditee.unit,
                            sector: this.assessmentScoresAll[i].auditee.sector 
                        },
                        creditRiskLoanPortfolioRisk:Math.round(this.risks[0]*10)/10,
                        creditRiskCounterpartyCreditRisk:Math.round(this.risks[1]*10)/10,
                        marketRiskInterestRateRisk:Math.round(this.risks[2]*10)/10,
                        marketRiskCommodityPriceRisk:Math.round(this.risks[3]*10)/10,
                        operationalRiskInternalProcessesRisk:Math.round(this.risks[4]*10)/10,
                        operationalRiskFraudMisconductRisk:Math.round(this.risks[5]*10)/10,
                        operationalRiskBusinessContinuityRisk:Math.round(this.risks[6]*10)/10,
                        liquidityRiskFundingLiquidityRisk:Math.round(this.risks[7]*10)/10,
                        liquidityRiskContingencyFundingRisk:Math.round(this.risks[8]*10)/10,
                        complianceRisk:Math.round(this.risks[9]*10)/10,
                        legalRisk:Math.round(this.risks[10]*10)/10,
                        strategyRiskBusinessModelRisk:Math.round(this.risks[11]*10)/10,
                        strategyRiskReputationalRisk:Math.round(this.risks[12]*10)/10,
                        cyberSecurityRisk:Math.round(this.risks[13]*10)/10,
                        interestRateRisk:Math.round(this.risks[14]*10)/10,
                        amlFinancialCrimeRisk:Math.round(this.risks[15]*10)/10,
                        esgRisk:Math.round(this.risks[16]*10)/10,
                        conductRisk:Math.round(this.risks[17]*10)/10,
                        totalScores: Math.round(this.totalSummaryScores*10)/10,
                        numberRisksRated:Math.round(this.nonZeroScoreCount*10)/10,
                        benchmarkResults: this.benchmarkActual

                    };
                    const response = await RiskScoringService.updateSummaryScoresDB(this.assessmentScoresAll[i].auditee.id, data);
                    console.log(response.data);
                    this.risks = new Array(this.risks.length).fill(0);
                    this.counter = 0;
                    this.totalSummaryScores=0;
                    this.nonZeroScoreCount=0;
                    this.benchmarkActual='';
                    
              }
              this.counter++;
        }

    }catch (error){
      console.log(error);
    }

   },



    
  },
  mounted(){
    this.getAllSummaryScores();
    this.getAllAssessmentScores();
    // this.updateSummaryScores();
  },

  watch:{
    showFactor(){
      this.getAllSummaryScores();
    }
  }

  
}
</script>

<style>
details summary::-webkit-details-marker {
    display: none;
  }
  details summary::before {
    /* content: '\25B6'; Unicode character for a right-pointing arrow */
    font-size: 10em;
    padding-right: 0.5em;
    display: inline-block;
    transform: rotate(90deg);
    transition: transform 0.2s;
  }
  
  details[open] summary::before {
    transform: rotate(0deg);
  }
</style>