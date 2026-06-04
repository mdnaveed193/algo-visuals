import { Box, Typography } from "@mui/material";
import ArrayContainer from "./ArrayContainer";

function VisualizationBoard({
    array,
    activeIndices,
    sortedIndices,
    pointerI,
    pointerJ,
    operation,
    comparisons,
    swaps,
    algorithm,
    pointerMin
}) {

    return (
        <Box sx={{ mt: 2 }}>

            {/* Pointer Row */}

            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    gap: 2,
                    mb: 2
                }}
            >
                {array.map((_, index) => (

                    <Box
                        key={index}
                        sx={{
                            width: 64,
                            textAlign: "center",
                            height: 50,
                            
                            display: "flex",
                            flexDirection: "column",

                        }}
                    >
                        <Box sx={{}}>

                            {pointerI === index && (
                                <Typography
                                    color="warning.main"
                                    fontWeight={700}
                                >
                                    ↓ i
                                </Typography>
                            )}

                            {pointerJ === index && (
                                <Typography
                                    color="error.main"
                                    fontWeight={700}
                                >
                                    ↓ j
                                </Typography>
                            )}
                        </Box>
                        <Box sx={{ mt:'auto'}}>
                            {pointerMin === index && (
                                <Typography
                                    color="success.main"
                                    fontWeight={700}
                                >
                                    ↓ min
                                </Typography>

                            )}
                        </Box>
                    </Box>

                ))}
            </Box>

            <ArrayContainer
                items={array}
                activeIndices={activeIndices}
                sortedIndices={sortedIndices}
            />
        </Box>
    );
}

export default VisualizationBoard;