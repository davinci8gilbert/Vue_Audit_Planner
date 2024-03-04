import http from "../http-common.js";

class AuditorService {
    putResource(id,data){
        return http.put(`/auditors/${id}`,data)
    }

    putAdjustedManhours(id,data){
        return http.put(`/auditorsadjustedmanhours/${id}`,data)
    }

    retrieveAuditorData(){
        return http.get(`/auditors`)
    }
}

export default new AuditorService();