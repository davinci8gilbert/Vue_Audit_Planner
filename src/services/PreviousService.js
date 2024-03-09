import http from "../http-common.js";

class PreviousService{
    retrievePrevAuditData(){
        return http.get(`/previousAudits`)
    }
}

export default new PreviousService();