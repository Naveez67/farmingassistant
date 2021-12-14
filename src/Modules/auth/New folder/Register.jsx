import React from "react";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Formdata from "./form";
import ProfileImage from "./profileimage";
const Register = () => {
  
  const [image, setimage] = React.useState("");

  return (
    <Container style={{backgroundColor:"lightgreen",marginTop:"1rem"}} >
       <div style={{backgroundColor:"green",height:"50px",width:"100%",marginBottom:"1.5rem"}}>
                  Registration
       </div>
      <Box sx={{ flexGrow: 1 }} >
       <Grid container spacing={2}>
        <Grid item xs={8}>
          <Formdata photo={image}/>
        </Grid>
        <Grid item xs={4}>
          <ProfileImage photo={setimage}/>
        </Grid>
        
      </Grid>
    </Box>
    </Container>
  );
};

export default Register;
