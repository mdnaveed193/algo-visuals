
import { Box, Typography } from "@mui/material";
import { AnimatePresence, LayoutGroup } from "framer-motion";
import ArrayElement from "./ArrayElement";

function ArrayContainer({
	items = [],
	activeIndices = [],
	sortedIndices = []
}) {

	return (
		<Box
			sx={{
				display: "flex",
				gap: 2,
				justifyContent: "center"
			}}
		>
			<LayoutGroup>

				{items.map((item, index) => (
					<Box
						key={item.id}
						sx={{
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
							gap: 0.5,
							width: 64,
						}}
						>
							<ArrayElement
								value={item.value}
								isComparing={activeIndices.includes(index)}
								isSorted={sortedIndices.includes(index)}
							/>

							<Typography sx={{ fontSize: 12, mt: 0.5, opacity: 0.9 }}>
								{index}
							</Typography>
						</Box>
				))}

			</LayoutGroup>
		</Box>
	);
}
export default ArrayContainer
