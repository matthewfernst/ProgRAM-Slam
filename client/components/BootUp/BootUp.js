import React, {useEffect, useState} from "react";

import {Box, Grid} from "@material-ui/core";

import ReactAudioPlayer from "react-audio-player";

import CSULogo from "../../static/images/CSU-Logo.png";
import AppleStartUp from "../../static/sounds/Apple-Startup.wav";

const BootUp = props =>
{
	const [startup, setStartup] = useState(false)

	useEffect(() =>
	{
		setTimeout(() =>
		{
			setStartup(true)
		}, 5000)

		setTimeout(() =>
		{
			props.setBootingUp(false);
		}, 8000)

	}, []);

	return (
		<>
			<Box p={4}>
				<Grid container direction={"column"} spacing={4}>
					<Grid item>
						<Grid container spacing={4}>
							<Grid item>
								<img src={CSULogo} style={{width: 100, height: 100}}/>
							</Grid>
							<Grid item>
								<Grid container justify={"center"} alignContent={"center"} alignItems={"center"} direction={"column"} style={{height: '100%'}}>
									<Grid>
										Cam Open Source OS
									</Grid>
									<Grid>
										Test
									</Grid>
								</Grid>
							</Grid>
							<Grid item>
								<Grid container justify={"center"} direction={"column"} style={{height: '100%'}}>
									<Grid>
										Cam Open Source OS
									</Grid>
									<Grid>
										Test
									</Grid>
								</Grid>
							</Grid>
						</Grid>
					</Grid>
					<Grid item>
						Text
					</Grid>
					<Grid item>
						<Grid container direction={"column"} style={{paddingLeft: 20}}>
							<Grid item>
								<Box pl={1} pr={1}>
									<Grid container spacing={2}>
										<Grid item>
											User:
										</Grid>
										<Grid item>
											Cam The Ram
										</Grid>
									</Grid>
								</Box>
							</Grid>
							<Grid item>
								<Box pl={1} pr={1}>
									<Grid container spacing={2}>
										<Grid item>
											Device Name:
										</Grid>
										<Grid item>
											Event Name Here
										</Grid>
									</Grid>
								</Box>
							</Grid>
							<Grid item>
								<Box pl={1} pr={1}>
									<Grid container spacing={2}>
										<Grid item>
											Memory Test:
										</Grid>
										<Grid item>
											20Kb
										</Grid>
									</Grid>
								</Box>
							</Grid>
						</Grid>
					</Grid>
					<Grid item>
						<Grid container direction={"column"} spacing={1}>
							<Grid item>
								Detecting Primary Drive (C) . . . . . . SUCCESS
							</Grid>
							<Grid item>
								Detecting Secondary Drive (D) . . . . . . SUCCESS
							</Grid>
						</Grid>
					</Grid>
					<Grid item>
						Initializing OS . . . . . . SUCCESS
					</Grid>
					<Grid item>
						Starting Computer . . .
					</Grid>
				</Grid>
			</Box>
			{startup ?
				<ReactAudioPlayer
					src={AppleStartUp}
					autoPlay = {true}
					controls = {false}
				/>
				: null }

		</>
	);
};

export default BootUp;
