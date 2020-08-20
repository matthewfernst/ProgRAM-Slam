import React, {useEffect, useState} from "react";
import ReactAudioPlayer from 'react-audio-player';
const startupSequence =
	{
		1: ["Beginning Startup Sequence"],
		2: ["Beginning Startup Sequence."],
		3: ["Beginning Startup Sequence.."],
		4: ["Beginning Startup Sequence..."],
		5: ["Beginning Startup Sequence...", "Activating Computer"],
	};

const BootUp = props =>
{
	const [textArray, setTextArray] = useState(startupSequence['1']);
	const [startup, setStartup] = useState(false)
	useEffect(() =>
	{
		setTimeout(() =>
		{
			setTextArray(startupSequence['2'])
		}, 1000)

		setTimeout(() =>
		{
			setTextArray(startupSequence['3'])
		}, 2000)

		setTimeout(() =>
		{
			setTextArray(startupSequence['4'])
		}, 3000)

		setTimeout(() =>
		{
			setStartup(true)
			setTextArray(startupSequence['5'])
		}, 5000)

		setTimeout(() =>
		{
			props.setBootingUp(false);
		}, 8000)

	}, []);

	return (
		<>
		<div style={{position: 'absolute', top: 10, left: 30}}>
			{textArray.map(textElement =>
			{
				return <p>{textElement}</p>;
			})}
		</div>
			{startup ?
			<ReactAudioPlayer
				src="client/static/sounds/Apple Startup.wav"
				autoPlay = {true}
			/>
			: null }
			</>
	);
};

export default BootUp;
