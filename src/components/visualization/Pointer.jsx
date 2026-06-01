import {Box, Typography} from "@mui/material";

function Pointer({ label }) {
  return (
    <Box
      sx={{
        position: "absolute"
      }}
    >
      ↓ {label}
    </Box>
  );
}
export default Pointer;