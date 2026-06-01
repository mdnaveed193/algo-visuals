import { Box, FormControl, InputLabel, Menu, MenuItem, Select } from '@mui/material'
import React from 'react'

function AlgorithmSelector({ algorithm,
    setAlgorithm, disabled = false }) {
    return (
        <Box>
            <FormControl sx={{ minWidth: 160 }}>
                <InputLabel id="algorithm-select-label">Algorithm</InputLabel>
                <Select
                    label="Algorithm"
                    value={algorithm}
                    onChange={(e) =>
                        setAlgorithm(e.target.value)
                    }
                    disabled={disabled}
                >
                    <MenuItem value="bubble">Bubble Sort</MenuItem>
                    <MenuItem value="selection">Selection Sort</MenuItem>
                    <MenuItem value="insertion">Insertion Sort</MenuItem>
                </Select>
            </FormControl>
        </Box>
    )
}

export default AlgorithmSelector