import React, {useEffect} from "react";

import {Grid, Paper} from "@material-ui/core";

import gusVid from "../static/videos/gus.mp4"

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
				<Grid
					container
					justify={"center"}
					alignContent={"center"}
					alignItems={"center"}
				>
					<video width="320" height="240" controls id={"marketing-video"}>
						<source src={gusVid}  type="video/mp4"/>
						Your browser does not support the video tag.
					</video>
				</Grid>
			</Grid>
		</Paper>
	)
};

export default VideoPage;
