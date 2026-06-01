// import { AppBar, Toolbar, Typography } from '@mui/material'
// import React from 'react'

// function Navbar() {
//     return (
//         <AppBar position="static">
//             <Toolbar>
//                 <Typography variant="h6">Algo Visualizer</Typography>
//             </Toolbar>
//         </AppBar>
//     )
// }

// export default Navbar

import {
  AppBar,
  Toolbar,
  Typography,
  Box
} from "@mui/material";

function Navbar() {
  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        bgcolor: "#1E293B",
        borderBottom: "1px solid #334155",
      }}
    >
      <Toolbar>
        <Typography
          variant="h5"
          fontWeight={700}
        >
          Algo Visualizer
        </Typography>

        <Box sx={{ flexGrow: 1 }} />

        <Typography
          color="text.secondary"
        >
          Sorting Algorithms
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;