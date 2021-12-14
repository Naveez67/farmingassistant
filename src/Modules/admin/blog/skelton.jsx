import { Skeleton } from "@mui/material";
import React from "react";
const Skelton = () => {
  return (
    <div style={{ maxWidth: "345px", margin: "1.5rem" }}>
      <Skeleton variant="rectangular" width={345} height={118} />
      <Skeleton variant="text" width="50%" />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Skeleton width="30%" />
        <Skeleton width="30%" />
        <Skeleton width="30%" />
      </div>
    </div>
  );
};

export default Skelton;
