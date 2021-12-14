import GenericService from "./GenericService";
class CustomerService extends GenericService {
    constructor() {
      super();
    }



    register = (name,username, password,phone,photo) =>
    this.post("/customer", { name,username, password,phone,photo});
    getsinglecustomer=(id)=>this.get("customer/"+id);
    getsingle=(id)=>this.get("customer/"+id);
    deletecustomer=(id)=>this.delete("customer/"+id);
    updatecustomer=(id,data)=>this.put("customer/"+id,data);

}      
let customerService = new CustomerService();
export default customerService;