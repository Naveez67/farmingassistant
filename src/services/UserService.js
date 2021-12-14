import GenericService from "./GenericService";
import jwtDecode from "jwt-decode";
class UserService extends GenericService {
  getusers=()=>this.get("users");
  getusernames=()=>this.get("users/usernames");
  getfarmer=()=>this.get("users/farmers");
  getcustomer=()=>this.get("users/customer");
  getsupplier=()=>this.get("users/supplier");
  login = (username, password) =>
    new Promise((resolve, reject) => {
      this.post("users/login", { username, password })
        .then((token) => {
          localStorage.setItem("token", token);
          resolve(token); 
        })
        .catch((err) => {
          reject(err);
        });
    });
  deleteuser=(id)=>this.delete("users/"+id);
  getsingleuser=(id)=>this.get("users/"+id);
  getuserdata=(id)=>this.get("users/userdata/"+id);
  // getuserdata=(id)=>console.log("ID FOR SERVER > ", id);
  getuserprofile=(id)=>this.get("users/usernames/"+id);
  approve=(id)=>this.put("users/aprove/"+id);
  logout = () => {
    localStorage.removeItem("token");
  };
  isLoggedIn = () => {
    return localStorage.getItem("token") ? true : false;
  };
  getLoggedInUser = () => {
    try {
      const jwt = localStorage.getItem("token");
      return jwtDecode(jwt);
    } catch (ex) {
      return null;
    }
  };
  isAdmin = () => {
    if (this.isLoggedIn()) {
      if (this.getLoggedInUser().role ==="admin") return true;
      else return false;
    } else return false;
  };
  isFarmer = () => {
    if (this.isLoggedIn()) {
      if (this.getLoggedInUser().role ==="farmer") return true;
      else return false;
    } else return false;
  };
  isFarmerorSupplier = () => {
    if (this.isLoggedIn()) {
      if (this.getLoggedInUser().role === "farmer"||this.getLoggedInUser().role==="supplier") return true;
      else return false;
    } else return false;
  };
  isCustomer = () => {
    if (this.isLoggedIn()) {
      if (this.getLoggedInUser().role === "customer") return true;
      else return false;
    } else return false;
  };
  isnotadmin = () => {
    if (this.isLoggedIn()) {
      if (this.getLoggedInUser().role !== "admin") return true;
      else return false;
    } else return false;
  };
}

let userService = new UserService();
export default userService;
