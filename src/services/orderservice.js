import GenericService from "./GenericService";
class OrderService extends GenericService {
    constructor() {
      super();
    }
    placeorder = (buyername,address,adpostedby,adid,totalamount,phone,quantity) =>
    this.post("order", { buyername,address,adpostedby,adid,totalamount,phone,quantity});
   
    myorders=()=>this.get("order/myorders");
    getsingleorder=(id)=>this.get("order/"+id);
    
}      
let orderService = new OrderService();
export default orderService;