import { Box, Button, Typography } from '@mui/material'
import React from 'react'

function GenerateButton(props) {
  return (
    <Button
      variant="contained"
      sx={{
        bgcolor: 'button.main',
        color: 'button.contrastText',
         textTransform: "none",
        '&:hover': { bgcolor: 'button.dark' },
      }}
      {...props}
    >
        <Typography>Generate Array</Typography>
    </Button>
  )
}

export default GenerateButton