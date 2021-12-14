import GenericService from "./GenericService";
class FarmerService extends GenericService {
    constructor() {
      super();
    }



    register = (name,username, password,phone,photo) =>
    this.post("addfarmer", { name, username,password,phone,photo});
    getsinglefarmer=(id)=>this.get("addfarmer/"+id);
    getsingle=(id)=>this.get("addfarmer/"+id);
    deletefarmer=(id)=>this.delete("addfarmer/"+id);
    updatefarmer=(id,data)=>this.put("addfarmer/"+id,data);

}
let farmerService = new FarmerService();
export default farmerService;