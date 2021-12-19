import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function Categoryofad({secat}) {
  const [category, setcategory] = React.useState('Seed');

  const handleChange = (event) => {
    setcategory(event.target.value);
    secat(event.target.value);
  };
  

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 80 }}>
        <InputLabel id="demo-simple-select-autowidth-label">category</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={category}
          onChange={handleChange}
          autoWidth
          label="category"
        >
          <MenuItem value={"Seed"}>Seed</MenuItem>
          <MenuItem value={"Fruit"}>Fruit</MenuItem>
          <MenuItem value={"Vegitable"}>Vegitable</MenuItem>
          <MenuItem value={"Wheat"}>Wheat</MenuItem>
          <MenuItem value={"Rice"}>Rice</MenuItem>
          <MenuItem value={"Spray"}>Spray</MenuItem>
          <MenuItem value={"fertilizer"}>Fertilizer</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
