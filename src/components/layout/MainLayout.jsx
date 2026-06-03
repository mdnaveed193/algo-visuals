import { Box, Stack } from "@mui/material";
import Navbar from "./Navbar";
import CodeSection from "./CodeSection";
import MainSection from "./MainSection";
import { useState } from "react";

function MainLayout() {
    const [algorithm, setAlgorithm] = useState("bubble");

    const [language, setLanguage] = useState("java");

    const [currentLine, setCurrentLine] = useState(null);

    const [currentEvent, setCurrentEvent] = useState(null);
    return (
        <Box
            sx={{
                minHeight: "100vh", backgroundColor: "background.default"
            }}
        >
            <Navbar />

            <Stack
                direction="row"
                spacing={2}
                sx={{ flex: 1, overflow: "hidden", p: 1, }}
            >
                <Box>
                    <MainSection
                        algorithm={algorithm}
                        setAlgorithm={setAlgorithm}
                        currentLine={currentLine}
                        setCurrentLine={setCurrentLine}
                        currentEvent={currentEvent}
                        setCurrentEvent={setCurrentEvent}
                    />
                </Box>

                <Box
                    sx={{ width: "50%", minWidth: "350px" }}>
                    <CodeSection
                        algorithm={algorithm}
                        language={language}
                        setLanguage={setLanguage}
                        currentLine={currentLine}
                        currentEvent={currentEvent}
                    />
                </Box>
            </Stack>
        </Box>
    );
}

export default MainLayout;