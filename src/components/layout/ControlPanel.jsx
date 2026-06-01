import { Box, Button, Stack, Typography } from '@mui/material'
import ArrayInput from '../controls/ArrayInput'
import GenerateButton from '../controls/GenerateButton'
import AlgorithmSelector from '../controls/AlgorithmSelector'
import SpeedSelector from '../controls/SpeedSelector'

function ControlPanel({ input, setInput, onApply, onGenerate, onStart, speed, setSpeed, algorithm, setAlgorithm, running, onReset }) {
    return (
        <Box>
            {/* control panel */}

            <Stack direction={'row'} spacing={1} sx={{ mb: 1 }}>
                <ArrayInput value={input} onChange={(e) => setInput(e.target.value)} />
                <AlgorithmSelector algorithm={algorithm} setAlgorithm={setAlgorithm} disabled={running} />
                <SpeedSelector speed={speed} setSpeed={setSpeed} disabled={running} />
                <Button
                    variant="contained"
                    color="primary"
                    sx={{ textTransform: 'none', width: '120px' }}
                    onClick={onStart}
                    disabled={running}
                >
                    <Typography>Start</Typography>
                </Button>
            </Stack>
            <Stack direction={'row'} spacing={1}>
                <GenerateButton onClick={onGenerate} disabled={running} />
                <Button variant="outlined" onClick={onApply} sx={{ textTransform: 'none' }} disabled={running}>Apply Input</Button>
                <Button variant="outlined" onClick={onReset} sx={{ textTransform: 'none' }}>Reset</Button>
            </Stack>
        </Box>
    )
}

export default ControlPanel