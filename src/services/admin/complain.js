import GenericService from "../GenericService";
class Complain extends GenericService {
    
    Addcomplain = (data) =>
    this.post("complain/", data);
    getcomplain=()=>this.get("complain");
    getmycomplains=()=>this.get("complain/mycomplain");
    updatecomplain = (_id, data) => this.put("complain/" + _id, data);
    getSinglecomplain = (id) => this.get("complain/" + id);
    deletecomplain=(id)=>this.delete("complain/"+id);
}

let complain = new Complain();
export default complain;