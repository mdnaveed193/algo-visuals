import { motion } from "framer-motion";
import { Paper, Typography } from "@mui/material";

function ArrayElement({
    value,
    isComparing,
    isSorted
}) {

    return (

        <Paper
            component={motion.div}
            layout
            transition={{
                layout: {
                    duration: 0.7
                }
            }}

            sx={{
                minWidth: 64,
                px: 2,
                py: 1,
                border: '1px solid rgba(255,255,255,0.06)',
                borderRadius: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',

                bgcolor:
                    isSorted
                        ? "#009e69"
                        : isComparing
                            ? "#F59E0B"
                            : "#3B82F6",

                boxShadow:
                    isComparing
                        ? 10
                        : 2,
            }}
        >

            <Typography fontWeight={700}>
                {value}
            </Typography>

        </Paper>
    );
}

export default ArrayElement;