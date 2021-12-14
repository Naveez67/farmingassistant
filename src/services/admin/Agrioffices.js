import GenericService from "../GenericService";
class AgriofficeService extends GenericService {
   
    Addoffice = (name,Address, phone,city) =>
    this.post("/agrioffices", { name,Address, phone,city});
    getoffice=()=>this.get("agrioffices");
    getsingleoffice=(id)=>this.get("agrioffices/"+id);
    updateoffice=(id,data)=>this.put("agrioffices/"+id,data);
    deleteoffice=(id)=>this.delete("agrioffices/"+id);
    

}

let agriofficeService = new AgriofficeService();
export default agriofficeService;