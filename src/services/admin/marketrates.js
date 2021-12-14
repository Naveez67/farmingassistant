import GenericService from "../GenericService";
class Marketrates extends GenericService {
   
    Addrates = (productname,quantity, productprice,city,distric) =>
    this.post("/marketrates", { productname,quantity, productprice,city,distric});
    getrates=()=>this.get("marketrates");
    getdistinctval=()=>this.get("marketrates/specificproduct");
    getsingleval=(id)=>this.get("marketrates/"+id);
    updaterate=(productname,quantity, productprice,city,distric,id)=>
    this.put("marketrates/"+id,{ productname,quantity, productprice,city,distric});
    deleterate=(id)=>this.delete("marketrates/"+id)
}
let marketrates = new Marketrates();
export default marketrates;