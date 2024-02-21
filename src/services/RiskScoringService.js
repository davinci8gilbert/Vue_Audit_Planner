import http from "../http-common.js";


class RiskScoringService{
    getAssessmentScores(){
        return http.get(`/assessmentscores`)
    }

    updateScores(id,data){
        return http.put(`/assessmentscore/${id}`,data)
    }

    getSummaryScores(){
        return http.get(`/assessmentsummaries`)
    }

    updateSummaryScoresDB(id,data){
        return http.put(`/assessmentsummaries/${id}`,data)
    }

}
export default new RiskScoringService();