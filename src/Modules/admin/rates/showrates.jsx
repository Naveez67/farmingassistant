import React,{useState} from "react";
import marketrates from "../../../services/admin/marketrates";
import userService from "../../../services/UserService";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import { Table } from "react-bootstrap";
import moment from 'moment';
import Showgraphs from "./graph";
import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
//import { Input } from "@material-ui/core";
import '../../../components/all/mangaement/style.css'
//import SearchIcon from "@mui/icons-material/Search";
const Showrates = () => {
  const [loading, setLoading] = useState(false);
  const [rates, setrates] = useState([]);
  const [searchTitle, setSearchTitle] = useState("");
  const [dis,setdis]=useState("none")
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
    <div className="App" style={{marginLeft:"5%",marginRight:"5%"}}>
      <div style={{display:"flex",justifyContent:"flex-end",marginRight:"2rem"}}>
      
      </div>
      {rates.length>0?<>
      <div>
      <h3>Search</h3>
      <input
        style={{ width: "80%", height: "45px"}}
        type="text"
        placeholder="Search..."
        onChange={(e) => setSearchTitle(e.target.value)}
      />
      <Table striped bordered hover style={{backgroundColor:"#6DDD00",color:"white"}}>
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
                   <td>{moment(date).format("MMM Do")}</td>
                   <td>{city}</td>
                   <td>{distric}</td>
                   {userService.isAdmin()?<>
                    <FaEdit
                    size="35px"
                    onClick={()=>{
                      history.push("/updaterate/"+item._id)
                    }}
                    
                    />
                    <AiFillDelete
                    size="35px"
                    onClick={()=>{
                      marketrates.deleterate(item._id).then((data)=>{
                        setdis("block")
                      })
                      .catch((err)=>{
                        console.log(err)
                      })

                      get();
                    }}
                    />
                   </>:<></>}

                </tr>
             )
              
              
            }))}
            </tbody>
            </Table>
      
      <hr />
      <Showgraphs dis={dis}/>
      </div>
      
      </>:<>
      <h3>No rates available</h3>
      </>}
      {userService.isAdmin()?<>
        <button
        style={{backgroundColor:"#6DDD00",color:"white",padding:"10px",fontWeight:"bold",fontSize:"28px"}}
        onClick={() => {
          history.push("/addrates");
        }}
      >
        Add rates
      </button>
      </>:
      <>
      </>}

      <div id="myModal" className="modal" style={{display:dis}} >

{/* <!-- Modal content --> */}
<div className="modal-content" >
  <div className="modal-header">
  <h2 style={{padding:"15px"}}></h2>
    <span className="close" onClick={()=>{setdis("none")}} >&times;</span>
    
  </div>
  <div className="modal-body">
    <h2>Deleted</h2>
  </div>
  <div className="modal-footer">
  <h2 style={{padding:"15px",marginRight:"50%",marginLeft:"50%",cursor:"pointer"}}
  onClick={()=>{
    setdis("none")
  }}
  >Ok</h2>
  </div>
</div>

</div>









    </div>
  );
};

export default Showrates;
