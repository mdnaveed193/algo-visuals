import { Box, TextField } from '@mui/material'
import React from 'react'

function ArrayInput({ value, onChange, placeholder = 'Ex: 2,4,5,7,1' }) {
    return (
        <Box>
            <TextField
                id="array-input"
                label=""
                variant="outlined"
                placeholder={placeholder}
                sx={{ width: '300px' }}
                value={value}
                onChange={onChange}
            />
        </Box>
    )
}

export default ArrayInput