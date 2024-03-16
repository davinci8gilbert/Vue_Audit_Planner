<template>
  <div class="backdrop">
    <div class="pop-container">
        <div class="pop-header">RISK SCORING</div>

        <span id="pop-unitname">Unit Name: {{ unit }}</span>
        <div id="buttonContainerPrev">
        <button id="buttonAll" @click="openPrevious()">Previous Year</button>
     </div>
        <table class="table-score">
            <tr>
                <th rowspan="2">Factor</th>
                <th id="opstitle" colspan="5">Operational & Compliance Risks</th>
                <th id="credittitle" colspan="6">Credit & Business Risks</th>
                <th id="treastitle" colspan="6">Market & Treasury Risks</th>
                <th id="techtitle">Technology Risks</th>
            </tr>
            
            <tr>      
                <th id="risks1">Internal Processes Risk</th>
                <th id="risks1">Fraud and Misconduct Risk</th>
                <th id="risks1">Business Continuity Risk</th>
                <th id="risks1">Compliance Risk</th>
                <th id="risks1">AML and Financial Crime Risk</th>
                <th id="risks2">Loan Portfolio Risk</th>
                <th id="risks2">Legal Risk</th>
                <th id="risks2">Business Model Risk</th>
                <th id="risks2">Reputational Risk</th>
                <th id="risks2">ESG Risk</th>
                <th id="risks2">Conduct Risk</th>
                <th id="risks3">Counterparty Credit Risk</th>
                <th id="risks3">Foreign Exchange Rate Risk</th>
                <th id="risks3">Commodity Price Risk</th>      
                <th id="risks3">Funding and Liquidity Risk</th>
                <th id="risks3">Contingency Funding Risk</th>
                <th id="risks3">Interest Rate Risk</th>
                <th id="risks4">Cybersecurity Risk</th>  
                

                <!-- <th class="risks">Internal Processes Risk</th>
                <th class="risks">Fraud and Misconduct Risk</th>
                <th class="risks">Business Continuity Risk</th>
                <th class="risks">Compliance Risk</th>
                <th class="risks">AML and Financial Crime Risk</th>
                <th class="risks">Loan Portfolio Risk</th>
                <th class="risks">Legal Risk</th>
                <th class="risks">Business Model Risk</th>
                <th class="risks">Reputational Risk</th>
                <th class="risks">ESG Risk</th>
                <th class="risks">Conduct Risk</th>
                <th class="risks">Counterparty Credit Risk</th>
                <th class="risks">Foreign Exchange Rate Risk</th>
                <th class="risks">Commodity Price Risk</th>             
                <th class="risks">Funding and Liquidity Risk</th>
                <th class="risks">Contingency Funding Risk</th>               
                <th class="risks">Interest Rate Risk</th>              
                <th class="risks">Cybersecurity Risk</th>               -->
            </tr>                  
                    
                <tr v-for="(item, index) in factorsForScoring" :key="index">    
                    <td class="unit"><label> {{item.factorName}}</label></td>               
                    <td><select v-model="orInternalProcessesRiskScore[index]">
                        <option v-for="score in scores" :key="score" :value="score" :class="getScoreColor(score)">{{ score }}</option>
                    </select></td>
                    <td><select v-model="orFraudaAndMisconductRiskScore[index]">
                        <option v-for="score in scores" :key="score" :value="score">{{ score }}</option>
                    </select></td>
                    <td><select v-model="orBusinessContinuityRisk[index]">
                        <option v-for="score in scores" :key="score" :value="score">{{ score }}</option>
                    </select></td>
                    <td><select v-model="complianceRiskScore[index]">
                        <option v-for="score in scores" :key="score" :value="score">{{ score }}</option>
                    </select></td>
                    <td><select v-model="amlAndFinancialCrimeRiskScore[index]">
                        <option v-for="score in scores" :key="score" :value="score">{{ score }}</option>
                    </select></td>
                    <td><select v-model="crLoanPortfolioRiskScore[index]">                      
                        <option v-for="score in scores" :key="score" :value="score" >{{ score }} </option>
                    </select></td>
                    <td><select v-model="legalRiskScore[index]">
                        <option v-for="score in scores" :key="score" :value="score">{{ score }}</option>
                    </select></td>
                    <td><select v-model="srBusinessModelRiskScore[index]">
                        <option v-for="score in scores" :key="score" :value="score">{{ score }}</option>
                    </select></td>
                    <td><select v-model="srReputationalRiskScore[index]">
                        <option v-for="score in scores" :key="score" :value="score">{{ score }}</option>
                    </select></td>
                    <td><select v-model="esgRiskScore[index]">
                        <option v-for="score in scores" :key="score" :value="score">{{ score }}</option>
                    </select></td>
                    <td><select v-model="conductRiskScore[index]">
                        <option v-for="score in scores" :key="score" :value="score">{{ score }}</option>
                    </select></td>
                    <td><select v-model="crCounterPartyCreditRiskScore[index]">
                        <option v-for="score in scores" :key="score" :value="score">{{ score }}</option>
                    </select></td>
                    <td><select v-model="mrInterestRateRiskScore[index]">
                        <option v-for="score in scores" :key="score" :value="score">{{ score }}</option>
                    </select></td>
                    <td><select v-model="mrCommodityPriceRiskScore[index]">
                        <option v-for="score in scores" :key="score" :value="score">{{ score }}</option>
                    </select></td>
                    <td><select v-model="lrFundingAndLiquidityRiskScore[index]">
                        <option v-for="score in scores" :key="score" :value="score" >{{ score }}</option>
                    </select></td>
                    <td><select v-model="lrContingencyFundingRiskScore[index]">
                        <option v-for="score in scores" :key="score" :value="score">{{ score }}</option>
                    </select></td>
                    <td><select v-model="interestRateRiskScore[index]">
                        <option v-for="score in scores" :key="score" :value="score">{{ score }}</option>
                    </select></td>                
                    <td><select v-model="cybersecurityRiskScore[index]">
                        <option v-for="score in scores" :key="score" :value="score">{{ score }}</option>
                    </select></td>
                 </tr>          
            <p></p>
            <div class="button-riskscore">
            <button id="buttonAll" @click="saveScores(), getUpdateSave(false)">Save</button>
            <button id="buttonAll" @click="getUpdateSave(false),cancelScore(false)">Cancel</button>
            </div>
        </table>

    </div>
  </div>
  <PreviousAudit v-if="showPrevious"  :closePrevious="closePrevious" :unit="unit"/>
</template>

<script>
import RiskScoringService from '@/services/RiskScoringService';
import PreviousAudit from './PreviousAudit.vue';

export default {
    name: "RiskScoring",
    components:{PreviousAudit},
    props:{
        unit:String,
        getUpdateSave:Function,
        clearChecking:Function,
        cancelScore:Function
    },
    data(){
        return {
            factorsForScoring:[],
            unitsForScoring:[],
            scores:[0,1,2,3,4,5,6,7,8,9,10],
            crLoanPortfolioRiskScore:[],
            crCounterPartyCreditRiskScore:[],
            mrInterestRateRiskScore: [],
            mrCommodityPriceRiskScore: [],
            orInternalProcessesRiskScore: [],
            orFraudaAndMisconductRiskScore: [],
            orBusinessContinuityRisk: [],
            lrFundingAndLiquidityRiskScore: [],
            lrContingencyFundingRiskScore: [],
            complianceRiskScore: [],
            legalRiskScore: [],
            srBusinessModelRiskScore: [],
            srReputationalRiskScore: [],
            cybersecurityRiskScore: [],
            interestRateRiskScore: [],
            amlAndFinancialCrimeRiskScore: [],
            esgRiskScore: [],
            conductRiskScore:[],
            unitSelected:'',
            totalScore:0,
            factorWithScores:{},
            factorId:0,  
            toastBox:null,
            showPrevious:false
            
                   
        }
    },
    methods:{
        openPrevious(){
            this.showPrevious=true;
        },

        closePrevious(value){
           if(value==false){
            this.showPrevious=false;
           }
        },

        getScoreColor(score) {
        if (score >= 0 && score <= 3) {
            return 'green-score';
        } else if (score >= 4 && score <= 7) {
            return 'yellow-score';
        } else if (score >= 8 && score <= 10) {
            return 'red-score';
        }
    },

        retrieveUnitsForScoring(){
            RiskScoringService.getAssessmentScores()
                .then(response =>{
                    this.unitsForScoring=response.data;
                    console.log(this.unitsForScoring);
                    this.storeFactorsForScoring(this.unit);                    
                })
                .catch(error =>{
                    console.log(error)
                })
        },
        storeFactorsForScoring(unit){
           this.unitsForScoring.forEach(unitItem =>{
            if(unitItem.auditee.unit === unit){
                this.factorsForScoring.push(unitItem)
                console.log(this.factorsForScoring)
                console.log(unitItem.id)
            }
           })         
        },
        sumTotalScore(){
            this.crLoanPortfolioRiskScore.forEach(x =>{
                this.totalScore+=x;
            })
        },
        saveScores(){
            
            for(let i = 0; i<this.factorsForScoring.length; i++){
                
                this.factorWithScores = {
                    auditee:{
                        id:this.factorsForScoring[i].auditee.id,
                        unit: this.factorsForScoring[i].auditee.unit,
                        sector: this.factorsForScoring[i].auditee.sector 
                    },
                    factorName: this.factorsForScoring[i].factorName,
                    factorWeight: this.factorsForScoring[i].factorWeight,
                    creditRiskLoanPortfolioRisk: this.crLoanPortfolioRiskScore[i],
                    creditRiskCounterpartyCreditRisk:this.crCounterPartyCreditRiskScore[i],
                    marketRiskInterestRateRisk:this.mrInterestRateRiskScore[i],
                    maketRiskCommodityPriceRisk:this.mrCommodityPriceRiskScore[i],
                    operationalRiskInternalProcessesRisk:this.orInternalProcessesRiskScore[i],
                    operationalRiskFraudMisconductRisk:this.orFraudaAndMisconductRiskScore[i],
                    operationalRiskBusinessContinuityRisk:this.orBusinessContinuityRisk[i],
                    liquidityRiskFundingLiquidityRisk:this.lrFundingAndLiquidityRiskScore[i],
                    liquidityRiskContingencyFundingRisk:this.lrContingencyFundingRiskScore[i],
                    complianceRisk:this.complianceRiskScore[i],
                    legalRisk:this.legalRiskScore[i],
                    strategyRiskBusinessModelRisk:this.srBusinessModelRiskScore[i],
                    strategyRiskReputationalRisk:this.srReputationalRiskScore[i],
                    cybersecurityRisk:this.cybersecurityRiskScore[i],
                    interestRateRisk:this.interestRateRiskScore[i],
                    amlFinancialCrimeRisk:this.amlAndFinancialCrimeRiskScore[i],
                    esgRisk:this.esgRiskScore[i],
                    conductRisk:this.conductRiskScore[i]
                }
                this.factorId= this.factorsForScoring[i].id               
                RiskScoringService.updateScores(this.factorId,this.factorWithScores)
                .then(response =>{
                    console.log(response.data);
                })
                .catch(error =>{
                    console.log(error);
                })
            }
            
            this.clearChecking(true);            
            
        },
        
  
    },
    created() {
    // Initialize the scores arrays to 0
        this.crLoanPortfolioRiskScore = new Array(9).fill(0);
        this.crCounterPartyCreditRiskScore = new Array(9).fill(0);
        this.mrInterestRateRiskScore = new Array(9).fill(0);
        this.mrCommodityPriceRiskScore = new Array(9).fill(0);
        this.orInternalProcessesRiskScore = new Array(9).fill(0);
        this.orFraudaAndMisconductRiskScore = new Array(9).fill(0);
        this.orBusinessContinuityRisk = new Array(9).fill(0);
        this.lrFundingAndLiquidityRiskScore = new Array(9).fill(0);
        this.lrContingencyFundingRiskScore = new Array(9).fill(0);
        this.complianceRiskScore = new Array(9).fill(0);
        this.legalRiskScore = new Array(9).fill(0);
        this.srBusinessModelRiskScore = new Array(9).fill(0);
        this.srReputationalRiskScore = new Array(9).fill(0);
        this.cybersecurityRiskScore = new Array(9).fill(0);
        this.interestRateRiskScore = new Array(9).fill(0);
        this.amlAndFinancialCrimeRiskScore = new Array(9).fill(0);
        this.esgRiskScore = new Array(9).fill(0);
        this.conductRiskScore= new Array(9).fill(0);
        },
    mounted(){
        this.retrieveUnitsForScoring();    

    },
    watch:{      
    }

}
</script>

<style scoped>
#buttonContainerPrev{
    background: #311b71;
    margin-bottom: 3px;
    padding:0;
}

#buttonAll{
    display:flex;
    

}
button{
    margin-top:0;
    /* margin-bottom:px; */
}

button:hover {
    margin:0px;
    cursor: pointer;
  }

</style>