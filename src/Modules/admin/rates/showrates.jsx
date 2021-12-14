import React,{useState} from "react";
import marketrates from "../../../services/admin/marketrates";
import userService from "../../../services/UserService";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import { Table } from "react-bootstrap";
import moment from 'moment';
import Showgraphs from "./graph";
//import { Input } from "@material-ui/core";

//import SearchIcon from "@mui/icons-material/Search";
const Showrates = () => {
  const [loading, setLoading] = useState(false);
  const [rates, setrates] = useState([]);
  const [searchTitle, setSearchTitle] = useState("");
  const history = useHistory();
  const addtableheader = () => {
    return (
      <tr>
        <th>Name</th>
        <th>Quantiy</th>
        <th>Price</th>
        <th>Date</th>
        <th>City</th>
        <th> Distric</th>
        {userService.isAdmin()?<>
                    <th>Options</th>
                   </>:<></>}
      </tr>
    );
  };
  
  const get = () => {
    marketrates
      .getrates()
      .then((data) => {
        setrates(data);
        setLoading(false);
      })
      .catch((err) => {
        
        toast.error(err.response.data, {
          position: toast.POSITION.TOP_LEFT,
        });
      });
  };
 
React.useEffect(get,[]);
  return (
    <div className="App">
      <div style={{display:"flex",justifyContent:"flex-end",marginRight:"2rem"}}>
      {userService.isAdmin()?<>
        <button
        style={{backgroundColor:"green",color:"white"}}
        onClick={() => {
          history.push("/addrates");
        }}
      >
        Add rates
      </button>
      </>:
      <>
      </>}
      </div>
      {rates.length>0?<>
      <div>
      <h3>Search</h3>
      <input
        style={{ width: "30%", height: "25px" }}
        type="text"
        placeholder="Search..."
        onChange={(e) => setSearchTitle(e.target.value)}
      />
      <Table striped bordered hover>
      <thead>
        {addtableheader()}
        </thead>
        <tbody>
      {loading ? (
        <h4>Loading ...</h4>
      ) : (
        rates
          .filter((value) => {
            if (searchTitle === "") {
              return value;
            } else if (
              value.productname.toLowerCase().includes(searchTitle.toLowerCase())
            ) {
              return value;
            }
            else if(value.city.toLowerCase().includes(searchTitle.toLowerCase())){
              return value;
            }
            else if(value.distric.toLowerCase().includes(searchTitle.toLowerCase())){
              return value;
            }
            else if(value.productprice==parseInt(searchTitle)){
              return value
            }
          })
          .map((item,index) => {
            const {productname,quantity, productprice,city,distric,date } = item //destructuring
              
            return (
                <tr key={index}>
                   <td>{productname}</td>
                   <td>{quantity}Kg</td>
                   <td>{productprice}</td>
                   <td>{moment(date).format("MMM Do YY")}</td>
                   <td>{city}</td>
                   <td>{distric}</td>
                   {userService.isAdmin()?<>
                    <button
                    onClick={()=>{
                      history.push("/updaterate/"+item._id)
                    }}
                    
                    >Edit</button>
                    <button
                    onClick={()=>{
                      marketrates.deleterate(item._id).then((data)=>{
                        alert("deleted")
                      })
                      .catch((err)=>{
                        console.log(err)
                      })

                      get();
                    }}
                    >Delete</button>
                   </>:<></>}

                </tr>
             )
              
              
            }))}
            </tbody>
            </Table>
      
      <hr />
      <Showgraphs />
      </div>
      
      </>:<>
      <h3>No rates available</h3>
      </>}
    </div>
  );
};

export default Showrates;
