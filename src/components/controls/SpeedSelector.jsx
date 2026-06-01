import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import React from 'react'

function SpeedSelector(
    { speed, setSpeed, disabled = false }
) {
    return (
        <Box>
            <FormControl sx={{ minWidth: 120 }}>
                <InputLabel id="speed-select-label">Speed</InputLabel>
                <Select
                    value={speed}
                    onChange={(e) =>
                        setSpeed(e.target.value)
                    }
                    label="Speed"
                    disabled={disabled}

                >
                    <MenuItem value="slow">Slow</MenuItem>
                    <MenuItem value="normal">Normal</MenuItem>
                    <MenuItem value="fast">Fast</MenuItem>
                </Select>
            </FormControl>
        </Box>)
}

export default SpeedSelector