import React, {useState} from "react";

import { Container, Grid } from "@material-ui/core";

const BootUp = props =>
{
	const [showVideoPage, setShowVideoPage] = useState(true);

	return (
		<Container>
			<Grid
				container justify={"center"} alignItems={"center"} alignContent={"center"}
				spacing={2} style={{height: "100vh"}}
			>
				<Grid item>
					{showVideoPage ? <VideoPage setShowVideoPage={setShowVideoPage} {...props}/> : <HomePage {...props}/>}
				</Grid>
			</Grid>
		</Container>
	)
};

export default BootUp;
