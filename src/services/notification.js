import GenericService from "./GenericService";
class Notification extends GenericService {
    constructor() {
      super();
    }
getaccounts=()=>this.get("/notification/unverfied");
getcomplain=()=>this.get("/notification/unsolved");
getsolved=()=>this.get("/notification/solved");
}

let notification = new Notification();
export default notification;