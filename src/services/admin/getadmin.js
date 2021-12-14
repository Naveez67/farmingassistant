import GenericService from "../GenericService";
class Getadmin extends GenericService {
    
    Addadmin = (name,phone,password,username) =>
    this.post("newadmin/", { name,phone,password,username});
    getadmin=()=>this.get("newadmin/");
    updateadmin = (_id, data) => this.put("newadmin/" + _id, data);
    getSingleadmin = (id) => this.get("newadmin/" + id);
    getSingle = (id) => this.get("newadmin/" + id);
    deleteadmin=(id)=>this.delete("newadmin/"+id);
}

let getadmin = new Getadmin();
export default getadmin;