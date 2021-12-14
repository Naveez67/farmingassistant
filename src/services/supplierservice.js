import GenericService from "./GenericService";
class SupplierService extends GenericService {
    constructor() {
      super();
    }



    register = (name,username, password,phone,photo,regno) =>
    this.post("supplier", { name,username, password,phone,photo,regno});
    getsinglesupplier=(id)=>this.get("supplier/"+id);
    getsingle=(id)=>this.get("supplier/"+id);
    deletesupplier=(id)=>this.delete("supplier/"+id);
    updatesupplier=(id,data)=>this.put("supplier/"+id,data);
    

}
let supplierService = new SupplierService();
export default supplierService;