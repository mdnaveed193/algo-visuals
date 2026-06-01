
import { Box } from "@mui/material";
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

					<ArrayElement
						key={item.id}
						value={item.value}

						isComparing={
							activeIndices.includes(index)
						}

						isSorted={
							sortedIndices.includes(index)
						}
					/>

				))}

			</LayoutGroup>
		</Box>
	);
}
export default ArrayContainer
