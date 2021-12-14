import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';

export default function NativeSelectDemo({role,setrole}) {
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel variant="standard" htmlFor="uncontrolled-native">
          Role
        </InputLabel>
        <NativeSelect
          defaultValue={role}
          inputProps={{
            name: 'role',
            id: 'uncontrolled-native',
          }}
          onChange={(event)=>{
              console.log(event.target.value);
              setrole(event.target.value)
          }}
        >
          <option value="farmer">Farmer</option>
          <option value="supplier">Supplier</option>
          <option value="customer">Customer</option>
        </NativeSelect>
      </FormControl>
    </Box>
  );
}