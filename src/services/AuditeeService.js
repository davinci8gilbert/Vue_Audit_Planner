import http from "../http-common.js";

class AuditeeService {
    getAuditees(){
        return http.get(`/auditees`)
    }
}

export default new AuditeeService();