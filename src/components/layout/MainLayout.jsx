import { Box, Stack } from "@mui/material";
import Navbar from "./Navbar";
import CodeSection from "./CodeSection";
import MainSection from "./MainSection";

function MainLayout() {
    return (
        <Box
            sx={{
                minHeight: "100vh",backgroundColor: "background.default"}}
        >
            <Navbar />

            <Stack
                direction="row"
                spacing={2}
                sx={{flex: 1,overflow: "hidden",p: 1,}}
            >
                <Box>
                    <MainSection />
                </Box>

                <Box
                    sx={{width: "50%",minWidth: "350px"}}>
                    <CodeSection />
                </Box>
            </Stack>
        </Box>
    );
}

export default MainLayout;