import React, {useState, useEffect} from "react";

import { Container, Grid } from "@material-ui/core";

import VideoPage from "./VideoPage";
import HomePage from "./HomePage"

const Layout = props =>
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

export default Layout;
