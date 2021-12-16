import React,{useState,useEffect} from 'react';
import weather from '../services/admin/weather';
import Showcard from './card';
const Todayweather = () => {
    const [nam,setnam]=useState("Lahore");
    const [city,setcity]=useState("");
    const [today,settoday]=useState([]);
    const [Forecast,setfor]=useState([]);
  //  const [msg,setmsg]=useState(false);

    const to=(city)=>{
        weather.getwe(city).then((data)=>{
            //console.log(data);
            settoday(data);
        }).catch((err)=>{
              console.log(err)
        })
        
    }
    const fo=(city)=>{
        weather.getfo(city).then((data)=>{
            //console.log(data);
            setfor(data);
        }).catch((err)=>{
            console.log(err)
        })

    }


    const get=()=>{
        to(nam);
        fo(nam);
    }
    useEffect(get,[nam]);
    return ( <div>
        <div style={{display:"flex",justifyContent:"center",marginTop:"2rem",marginBottom:".5rem",marginRight:"auto"}}>
            <input
            placeholder="Enter city name"
            style={{width:"40%",borderColor:"green"}}
            onChange={(e)=>{
              setcity(e.target.value);
            }}
            />
            <button 
            style={{padding:"10px",background:"green",color:"white"}}
            onClick={()=>{
                to(city);
                fo(city);
            }}>
                Search
            </button>


                

        </div>

        <h1 style={{textAlign:"center",background:"green",color:"white",marginLeft:"15%",marginRight:"15%"}}>Weather Forecast</h1>
        
        {Object.keys(today).length>0?
           <>
           {(typeof today)=="boolean"?"No city found ":<Showcard today={today} Forecast={Forecast} />}
           </>
           
           
        :"No city found"}
    </div> );
}
 
export default Todayweather;