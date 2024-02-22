<template>
  <div class="backdrop">
    <div class="pop-container">
        <div class="pop-header">RISK SCORING</div>

        <span id="pop-unitname">Unit Name: {{ unit }}</span>
        <table class="table-score">
            <tr>             
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
            </tr>                  
                <tr v-for="(item, index) in factorsForScoring" :key="index">                   
                    <td><label> {{item.factorName}}</label></td>
                    <td><select v-model="crLoanPortfolioRiskScore[index]">                      
                        <option v-for="score in scores" :key="score" :value="score" >{{ score }} </option>
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
                    <td><select v-model="orInternalProcessesRiskScore[index]">
                        <option v-for="score in scores" :key="score" :value="score">{{ score }}</option>
                    </select></td>
                    <td><select v-model="orFraudaAndMisconductRiskScore[index]">
                        <option v-for="score in scores" :key="score" :value="score">{{ score }}</option>
                    </select></td>
                    <td><select v-model="orBusinessContinuityRisk[index]">
                        <option v-for="score in scores" :key="score" :value="score">{{ score }}</option>
                    </select></td>
                    <td><select v-model="lrFundingAndLiquidityRiskScore[index]">
                        <option v-for="score in scores" :key="score" :value="score" >{{ score }}</option>
                    </select></td>
                    <td><select v-model="lrContingencyFundingRiskScore[index]">
                        <option v-for="score in scores" :key="score" :value="score">{{ score }}</option>
                    </select></td>
                    <td><select v-model="complianceRiskScore[index]">
                        <option v-for="score in scores" :key="score" :value="score">{{ score }}</option>
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
                    <td><select v-model="cybersecurityRiskScore[index]">
                        <option v-for="score in scores" :key="score" :value="score">{{ score }}</option>
                    </select></td>
                    <td><select v-model="interestRateRiskScore[index]">
                        <option v-for="score in scores" :key="score" :value="score">{{ score }}</option>
                    </select></td>
                    <td><select v-model="amlAndFinancialCrimeRiskScore[index]">
                        <option v-for="score in scores" :key="score" :value="score">{{ score }}</option>
                    </select></td>
                    <td><select v-model="esgRiskScore[index]">
                        <option v-for="score in scores" :key="score" :value="score">{{ score }}</option>
                    </select></td>
                    <td><select v-model="conductRiskScore[index]">
                        <option v-for="score in scores" :key="score" :value="score">{{ score }}</option>
                    </select></td>
                 </tr>          
            <p></p>
            <div class="button-riskscore">
            <button id="buttonScoreSave" @click="saveScores(), getUpdateSave(false)">Save</button>
            <button id="buttonClose" @click="getUpdateSave(false),cancel()">Cancel</button>
            </div>
        </table>
    </div>
  </div>
</template>

<script>
import RiskScoringService from '@/services/RiskScoringService';
export default {
    name: "RiskScoring",
    props:{
        unit:String,
        getUpdateSave:Function,
        clearChecking:Function
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
        }
    },
    methods:{
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
            window.alert("You have successfully saved the scores!");
            this.clearChecking(true);            
            this.$router.push({ name: "auditornavigation" }).then(() => {
            window.location.reload(true); // Perform a hard refresh
            });
        },
        cancel(){           
            window.alert("Your changes will not be saved!");
        }
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

<style>

</style>