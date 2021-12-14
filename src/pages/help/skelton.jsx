import { Skeleton } from '@mui/material';
import React from 'react';
const Skelton = () => {
    return ( 
    <div  style={{width:"50%"}}>
      <Skeleton variant="rectangular" width="100%" height={250} />
             <Skeleton width="20%"  />
             <Skeleton width="40%" />
    </div>
     );
}
 
export default Skelton;