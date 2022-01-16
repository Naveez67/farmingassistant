import React, { useState } from "react";
import marketrates from "../../../services/admin/marketrates";
import { Table } from "react-bootstrap";
const Showgraphs = ({dis}) => {
  const [distincvalues, setdist] = useState([]);
  // const [dist, setdis] = useState(dis);
  const get = () => {
    marketrates
      .getdistinctval()
      .then((data) => {
        setdist(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const addtableheader = () => {
    return (
      <tr>
        <th>Name</th>
        <th>AveragePrice</th>
      </tr>
    );
  };
  React.useEffect(get, []);
  return (
    <div>
      <h1 style={{backgroundColor:"green",color:"white",padding:"15px"}}>Last week average market rates </h1>
      <Table striped bordered hover style={{backgroundColor:"#6DDD00",color:"white"}}>
      <thead>
        {addtableheader()}
        </thead>
        <tbody>
        {distincvalues.map((item,index) => {
            const {_id,avgprice} = item //destructuring
              
            return (
                <tr key={index}>
                   <td>{_id}</td>
                   <td>{avgprice.toFixed(2)+" "} per kg</td>
                </tr>
             )
              
              
            })
        }
        </tbody>

      </Table>
    </div>
  );
};

export default Showgraphs;
