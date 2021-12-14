import GenericService from "../GenericService";
class BlogService extends GenericService {
    Addblog = (title,body,url) =>
    this.post("/blog", { title,body,url});
    getblog=()=>this.get("blog");
    updateblog = (_id, data) => this.put("blog/" + _id, data);
    addcomment = (_id, data) => this.put("blog/addcomment/" + _id, data);
    getSingleblog = (id) => this.get("blog/" + id);
    deleteblog=(id)=>this.delete("blog/"+id);

    getwe=(city)=>this.get("blog/to/"+city)
}   

let blogService = new BlogService();
export default blogService;