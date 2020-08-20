import React, {useEffect, useState} from "react";

import {Box, Grid} from "@material-ui/core";

import ReactAudioPlayer from "react-audio-player";

import CSULogo from "../../static/images/CSU-Logo.png";
import AppleStartUp from "../../static/sounds/Apple-Startup.wav";

const successStyle = { color: '#08EC19'}
const BootUp = props =>
{
	const [state, setState] = useState(0);

	useEffect(() =>
	{
		setTimeout(() => setState(1), 300)
		setTimeout(() => setState(2), 500)
		setTimeout(() => setState(3), 1000)
		setTimeout(() => setState(4), 1500)
		setTimeout(() => setState(5), 2000)
		setTimeout(() => setState(6), 2100)
		setTimeout(() => setState(7), 2200)
		setTimeout(() => setState(8), 2300)
		setTimeout(() => setState(9), 2400)
		setTimeout(() => setState(10), 2500)
		setTimeout(() => setState(11), 3200)
		setTimeout(() => setState(12), 4200)
		setTimeout(() => setState(13), 5000)
		setTimeout(() => setState(14), 5200)
		setTimeout(() => setState(15), 5500)
		setTimeout(() => props.setBootingUp(false), 8000)
	}, []);

	return (
		<>
			<Box p={4}>
				<Grid container direction={"column"} spacing={4}>
					<Grid item>
						<HeaderAndReleaseData />
					</Grid>
					{ state >= 1 ?
						<Grid item>
							Text
						</Grid> : null }
					{ state >= 2 ?
						<Grid item>
							<SystemInfo state={state} />
						</Grid> : null }
					{ state >= 11 ?
						<Grid item>
							<DriveInfo state={state} />
						</Grid> : null }
					{ state >= 14 ?
						<Grid item>
							<header>
								<> Initializing OS . . . . . .
									<span style={ successStyle }> SUCCESS </span>
								</>
							</header>
						</Grid> : null }
					{ state >= 15 ?
						<Grid item>
							Starting Computer . . .
						</Grid> : null }
				</Grid>
			</Box>
			{state >= 15 ? <ReactAudioPlayer src={AppleStartUp} autoPlay={true} controls={false}/> : null}
		</>
	);
};

const HeaderAndReleaseData = props =>
{
	return(
		<Grid container spacing={4}>
			<Grid item>
				<img src={CSULogo} style={{width: 100, height: 100}}/>
			</Grid>
			<Grid item>
				<Grid container justify={"center"} alignContent={"center"} alignItems={"center"} direction={"column"} style={{height: '100%'}}>
					<Grid item>
						Cam Open Source OS
					</Grid>
					<Grid item>
						Test
					</Grid>
				</Grid>
			</Grid>
			<Grid item>
				<Grid container justify={"center"} direction={"column"} style={{height: '100%'}}>
					<Grid item>
						Cam Open Source OS
					</Grid>
					<Grid item>
						Test
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	);
}

const SystemInfo = props =>
{
	return(
		<Grid container direction={"column"} style={{paddingLeft: 20}}>
			{ props.state >= 3 ?
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
				</Grid> : null }
			{ props.state >= 4 ?
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
				</Grid> : null }
			{ props.state >= 5 ?
				<Grid item>
					<Box pl={1} pr={1}>
						<Grid container spacing={2}>
							<Grid item>
								Memory Test:
							</Grid>
							<Grid item>
								{ props.state === 6 ? '20Kb' :
								  props.state === 7 ? '87Kb' :
								  props.state === 8 ? '173Kb' :
								  props.state === 9 ? '432Mb' :
								  props.state === 10 ? '1753Kb' :
								  '47534Mb'
								}
							</Grid>
						</Grid>
					</Box>
				</Grid> : null }
		</Grid>
	);
}

const DriveInfo = props =>
{
	return(
		<Grid container direction={"column"} spacing={1}>
			{ props.state >= 12 ?
				<Grid item>
					<header>
						<> Detecting Primary Drive (C) . . . . . .
							<span style={ successStyle }> SUCCESS </span>
						</>
					</header>
				</Grid> : null }
			{ props.state >= 13 ?
				<Grid item>
					<header>
						<> Detecting Secondary Drive (D) . . . . . .
							<span style={ successStyle }> SUCCESS </span>
						</>
					</header>
				</Grid> : null }
		</Grid>
	);
}
export default BootUp;
