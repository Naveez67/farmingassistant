import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import userService from "../../services/UserService";
import farmerService from "../../services/farmerservice";
import supplierService from "../../services/supplierservice";
import customerService from "../../services/customerservice";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import NativeSelectDemo from "./dropdown";
import Firebasecal from "./firebasecal";
const Formdata = ({ photo }) => {
  // const [namelist,setnamelist]=React.useState([]);
  const [role, setRole] = React.useState("farmer");
  const [name, setname] = React.useState("");
  const [username, setusername] = React.useState("");
  const [otp, setotp] = React.useState(false);
  const [address, setaddress] = React.useState("");
  const [phone, setphone] = React.useState("");
  const [regno, setregno] = React.useState("");
  const [password, setpassword] = React.useState("");
  const [repass, setrepass] = React.useState("");
  const [check1, setcheck1] = React.useState(false);
  const history = useHistory();

  const check = () => {
    if (name === "") {
      alert("name canot be empty");
    } else if (!bol) {
      alert("username already taken");
    } else if (photo === "") {
      alert("please upload photo");
    } else if (password !== repass) {
      alert("password not matched");
    } else if (phone.toString().length !== 11) {
      alert("phone must contain 11 digits");
    } 
    else if (otp===false) {
      alert("please enter valid otp code");
    } else setcheck1(true);
  };
  const post = () => {
    if (check1) {
      reg();
      history.push("/login")
    } else alert("please fill the form completly first");
  };
  const reg = () => {
    if (role === "farmer")
      return farmerService
        .register(name, username, password, phone, photo, address)
        .then((data) => {})
        .catch((err) => {
          console.log(err.response.data);
        });
    else if (role === "supplier")
      return supplierService
        .register(name, username, password, phone, photo, address, regno)
        .then((data) => {
          //console.log(data);
        })
        .catch((err) => {
          toast.error(err.response.data, {
            position: toast.POSITION.TOP_LEFT,
          });
        });
    else
      return customerService
        .register(name, username, password, phone, photo, address)
        .then((data) => {
          //console.log(data);
        })
        .catch((err) => {
          toast.error(err.response.data, {
            position: toast.POSITION.TOP_LEFT,
          });
        });
  };
  const [users, setusers] = useState([]);
  const [bol, setbol] = useState(true);

  const getusers = () => {
    userService
      .getusernames()
      .then((res) => {
        //console.log(res);
        setusers(res);
        //console.log(users);
      })
      .catch((err) => {
        toast.error(err.response.data, {
          position: toast.POSITION.TOP_LEFT,
        });
      });
  };
  function filterItems(arr, query) {
    return arr.filter(function (el) {
      return el.username.toLowerCase().indexOf(query.toLowerCase()) !== -1;
    });
  }
  function res(arr, name) {
    let array = filterItems(arr, name);
    return array;
  }
  function fn(arr) {
    if (arr.length === 0) {
      setbol(true);
    } else setbol(false);
  }
  function err() {
    if (phone.length === 11) {
      return true;
    } else return false;
  }
  React.useEffect(getusers, []);
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6}>
        <TextField
          id="filled-basic"
          label="Name"
          variant="standard"
          type="text"
          onkeypress="return (event.charCode > 64 && event.charCode < 91) || (event.charCode > 96 && event.charCode < 123) || (event.charCode==32)"
          // pattern="[A-Za-z]"
          value={name}
          onChange={(e) => {
            setname(e.target.value);
          }}
          fullWidth
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          id="filled-basic"
          label="UserName"
          variant="standard"
          value={username}
          onChange={(e) => {
            setusername(e.target.value);
            //console.log(res(users,username));
            let arr = res(users, username);
            fn(arr);
          }}
          fullWidth
          helperText={bol ? <>not taken</> : <> taken</>}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          id="filled-basic"
          label="Address"
          variant="standard"
          value={address}
          onChange={(e) => {
            setaddress(e.target.value);
          }}
          fullWidth
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <NativeSelectDemo role={role} setrole={setRole} />
      </Grid>

      <Grid item xs={12} sm={6}>
        {role === "supplier" ? (
          <>
            <TextField
              id="filled-basic"
              label="Company Regirstation No"
              variant="standard"
              value={regno}
              onChange={(e) => {
                setregno(e.target.value);
              }}
              fullWidth
            />
          </>
        ) : (
          <></>
        )}
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          id="filled-basic"
          label="Password"
          type="password"
          variant="standard"
          value={password}
          onChange={(e) => {
            setpassword(e.target.value);
          }}
          fullWidth
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          id="filled-basic"
          label="Re enter password"
          variant="standard"
          type="password"
          value={repass}
          onChange={(e) => {
            setrepass(e.target.value);
          }}
          helperText={password !== repass ? <>password not matched </> : <></>}
          fullWidth
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          id="filled-basic"
          label="Phone"
          variant="standard"
          placeholder="03114128XXX"
          value={phone}
          err={err()}
          onChange={(e) => {
            setphone(e.target.value);
            err();
          }}
          fullWidth
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        {phone.length === 11?<>
          <Firebasecal setotp={setotp} phone={phone} />
        </>:<></>}
        
      </Grid>
      <Grid item xs={12}>
        <Button
          variant="contained"
          onClick={() => {
            // console.log(name,username,password,repass,phone,address,photo);
            check();
            post();
            //history.push("/login")
          }}
        >
          Sign In
        </Button>
      </Grid>
      <Grid item xs={12}>
        <Button
          onClick={() => {
            history.push("/login");
          }}
        >
          have already account ! Login
        </Button>
      </Grid>
    </Grid>
  );
};
export default Formdata;
