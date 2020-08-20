import React, {useEffect, useState} from "react";

import {Box, Grid} from "@material-ui/core";

import ReactAudioPlayer from "react-audio-player";

import CSULogo from "../../static/images/CSU-Logo.png";
import AppleStartUp from "../../static/sounds/Apple-Startup.wav";

const BootUp = props =>
{
	const [state, setState] = useState(0);

	useEffect(() =>
	{
		setTimeout(() => setState(1), 300)
		setTimeout(() => setState(2), 500)
		setTimeout(() => setState(3), 8000)
		setTimeout(() => setState(4), 1200)
		setTimeout(() => setState(5), 1500)
		setTimeout(() => setState(6), 1600)
		setTimeout(() => setState(7), 1700)
		setTimeout(() => setState(8), 1800)
		setTimeout(() => setState(9), 1900)
		setTimeout(() => setState(10), 2100)
		setTimeout(() => setState(11), 2400)
		setTimeout(() => setState(12), 3000)
		setTimeout(() => setState(13), 3500)
		setTimeout(() => setState(14), 4000)
		setTimeout(() => setState(15), 4500)
		setTimeout(() => setState(16), 5000)
		setTimeout(() => setState(17), 5500)
		setTimeout(() => setState(18), 5800)
		setTimeout(() => props.setBootingUp(false), 8000)
	}, []);

	return (
		<>
			<Box p={4}>
				<Grid container direction={"column"} spacing={4}>
					<Grid item>
						<HeaderAndReleaseData {...props} />
					</Grid>
					{ state >= 1 ?
						<Grid item>
							AF6S7V89 - JUC84X
						</Grid> : null }
					{ state >= 2 ?
						<Grid item>
							<SystemInfo state={state} />
						</Grid> : null }
					{ state >= 11 ?
						<Grid item>
							<DriveInfo state={state} />
						</Grid> : null }
					{ state >= 16 ?
						<Grid item>
							<header>
								<> Initializing OS . . . . . .
									{ state >= 17 ? <span style={{color: '#08EC19'}}> SUCCESS </span> : null }
								</>
							</header>
						</Grid> : null }
					{ state >= 18 ?
						<Grid item>
							Starting Computer . . .
						</Grid> : null }
				</Grid>
			</Box>
			{state >= 18 ? <ReactAudioPlayer src={AppleStartUp} autoPlay={true} controls={false}/> : null}
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
						CAM OS (BETA PROGRAM)
					</Grid>
				</Grid>
			</Grid>
			<Grid item>
				<Grid container justify={"center"} direction={"column"} style={{height: '100%'}}>
					<Grid item>
						Released: Aug 20, 2020 (BETA 1.1.12)
					</Grid>
					<Grid item>
						<a href={"https://github.com/mrrosoff/Event-Name-Site"} target="_blank" style={{color: props.darkMode ? '#FCFCFC' : "#141313", fontSize: 22}}>Open Source</a>
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
								ProgRAM Slam
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
								{ props.state === 6 ? '20KB' :
								  props.state === 7 ? '87KB' :
								  props.state === 8 ? '173KB' :
								  props.state === 9 ? '432MB' :
								  props.state === 10 ? '1753KB' :
								  '47534MB'
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
							{ props.state >= 13 ? <span style={{color: '#08EC19'}}> SUCCESS </span> : null }
						</>
					</header>
				</Grid> : null }
			{ props.state >= 14 ?
				<Grid item>
					<header>
						<> Detecting Secondary Drive (D) . . . . . .
							{ props.state >= 15 ?  <span style={ {color: '#08EC19'}}> SUCCESS </span> : null }
						</>
					</header>
				</Grid> : null }
		</Grid>
	);
}
export default BootUp;
