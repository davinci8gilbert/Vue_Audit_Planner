import http from "../http-common.js";

class AuditorService {
   postResource(id,data){
        return http.put(`/auditors/${id}`,data)
    }

    retrieveAuditorData(){
        return http.get(`/auditors`)
    }
}

export default new AuditorService();