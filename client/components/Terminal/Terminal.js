import React, {useState} from 'react';

import ReactTerminal, { ReactOutputRenderers,  } from 'react-terminal-component';
import {
	CommandMapping,
	defaultCommandMapping,
	EmulatorState,
	OutputFactory,
} from 'javascript-terminal';
import gusVid from '../../static/videos/gus.mp4';
import {aByteSizeCodingCompetition, csuLogo} from "./ASCIIArt";

const PAPER_TYPE = 'paper';

const paperStyles = {
	backgroundColor: 'white',
	color: 'black',
	fontFamily: 'sans-serif',
	padding: '1em',
	margin: '1em 0',
	borderRadius: '0.2em'
};

const PaperOutput = ({ content }) => (
	<div style={paperStyles}>
		<h1>{content.title}</h1>

		{content.body}
	</div>
);

const createPaperRecord = (title, body) => {
	return new OutputFactory.OutputRecord({
		type: PAPER_TYPE,
		content: {
			title,
			body
		}
	});
};

const Terminal = props =>
{
	const customState = EmulatorState.create({
		'commandMapping': CommandMapping.create({
			...defaultCommandMapping,
			'davemd': {
				'function': (state, opts) =>
				{
					props.setDarkMode(!props.darkMode)
					return { output: OutputFactory.makeTextOutput('success') };
				},
				'optDef': {}

			},
			'slogan': {
				'function': (state, opts) =>
				{
					return { output: OutputFactory.makeTextOutput(csuLogo + '\n\n' + aByteSizeCodingCompetition) };
				},
				'optDef': {}

			},
			'markvid': {
				'function': (state, opts) => {

					return {
						output: OutputFactory.makeTextOutput(<video width="100%" height="85%" controls>
							<source src={gusVid} type="video/mp4"/>
						</video>)
					};

				},
				'optDef': {}

			},


		})
	});

	return (
		<ReactTerminal
			theme={{
				background: props.darkMode ? '#141313' : '#fcfcfc',
				promptSymbolColor: props.darkMode ? '#08EC19' : '#0661FF',
				commandColor: props.darkMode ? '#fcfcfc' : '#141313',
				outputColor: props.darkMode ? '#08EC19' : '#141313',
				errorOutputColor: '#ff0606',
				fontSize: '1.1rem',
				spacing: '1%',
				fontFamily: 'monospace',
				width: '100%',
				height: '100vh'
			}}
			outputRenderers={{...ReactOutputRenderers, [PAPER_TYPE]: PaperOutput}}
			emulatorState={customState}
		/>

	);
};

export default Terminal;
