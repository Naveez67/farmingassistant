import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function Typeofad({setype}) {
  const [type, settype] = React.useState('for all');

  const handleChange = (event) => {
    settype(event.target.value);
    setype(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 80 }}>
        <InputLabel id="demo-simple-select-autowidth-label">Type</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={type}
          onChange={handleChange}
          autoWidth
          label="Type"
        >
          <MenuItem value={"for all"}>For all</MenuItem>
          <MenuItem value={"for farmers"}>For Farmers</MenuItem>
          <MenuItem value={"for suppliers"}>For Suppliers</MenuItem>
          <MenuItem value={"for customers"}>For Customers</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
