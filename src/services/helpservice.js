import GenericService from "./GenericService";
class HelpService extends GenericService {
    constructor() {
      super();
    }

    Addpost = (title,body,photo) =>
    this.post("/help", { title,body,photo});
    Addcomment = (text,postid) =>
    this.put("/help/comment",{text,postid});

    getposts=()=>this.get("help/");
    getmyposts=()=>this.get("help/myposts");

}      
let helpService = new HelpService();
export default helpService;