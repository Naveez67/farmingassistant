import React ,{useState} from 'react';

const Showmycom = ({com}) => {
    return ( <div>
       
                <tr>
                <td>{com.title}</td>
                <td>{com.body}</td>
                <td>{com.status}</td>
                </tr>
             
    </div> );
}
 
export default Showmycom;