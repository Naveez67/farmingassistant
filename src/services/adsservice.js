import GenericService from "./GenericService";
class AdsService extends GenericService {
    constructor() {
      super();
    }



    addrating=(data)=>this.put("ads/sellerrating",data)
    getsingleads=(id)=>this.get("ads/"+id);
    getmyads=()=>this.get("ads/myads");
    postad=(data)=>this.post("ads/",data);
    getsingle=(id)=>this.get("ads/"+id);
    getads=()=>this.get("ads/");
    gettest=(data)=>this.put("ads/test",data);
    deleteads=(id)=>this.delete("ads/"+id);
    updateads=(id,data)=>this.put("ads/"+id,data);
    
}      
let adsService = new AdsService();
export default adsService;