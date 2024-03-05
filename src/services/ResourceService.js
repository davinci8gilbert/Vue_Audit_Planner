import http from "../http-common.js";

class ResourceService {
   createResource(data){
        return http.post(`/resourceallocations`,data)
    }

    retrieveResource(){
        return http.get(`/resourceallocations`)
    }

    inputManhours(id,data){
        return http.put(`/resourceallocmanhours/${id}`,data)
    }

    inputManhoursAndReason(id,data){
        return http.put(`/resourceallocmanhoursreason/${id}`,data)
    }

    updateResourceTable(id,data){
        return http.put(`/resourcetable/${id}`,data)
    }
}

export default new ResourceService();