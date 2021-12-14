import GenericService from "../GenericService";
class News extends GenericService {
   
    Addnews = (title,body,url) =>
    this.post("/news", {title,body,url});
    getnews=()=>this.get("news");
    updatenews = (_id, data) => this.put("news/" + _id, data);
    getSinglenews = (id) => this.get("news/" + id);
    deletenews=(id)=>this.delete("news/"+id);
    
}

let news = new News();
export default news;