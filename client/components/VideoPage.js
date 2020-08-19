import React, {useEffect} from "react";

import {Grid, Paper} from "@material-ui/core";

const VideoPage = props =>
{
	useEffect(() => {

		const onVideoEnd = (e) =>
		{
			props.setShowVideoPage(false);
		}

		document.getElementById('marketing-video').addEventListener('ended', onVideoEnd,false);
	});

	return (
		<Paper elevation={4} style={{width: '75vw', height: '75vh'}}>
			<Grid
				container justify={"center"} alignItems={"center"} alignContent={"center"}
				style={{height: "100%"}}
			>
				<p id={"marketing-video"}>Insert Video Here</p>
			</Grid>
		</Paper>
	)
};

export default VideoPage;
