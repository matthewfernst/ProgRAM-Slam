import React, {useState} from 'react';

import ReactTerminal, { ReactOutputRenderers,  } from 'react-terminal-component';
import {CommandMapping, defaultCommandMapping, EmulatorState, OutputFactory } from 'javascript-terminal';


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
			'print': {
				'function': (state, opts) => {
					const userInput = opts.join(' ');

					return {
						output: createPaperRecord('A custom renderer', userInput)
					};
				},
				'optDef': {}
			},
			'davemd': {
				'function': (state, opts) => {
					props.setDarkMode(!props.darkMode)
					return {
						output: OutputFactory.makeTextOutput('success')
					};

				},
				'optDef': {}

			},
			'slogan': {
				'function': (state, opts) => {
					return {
						output: OutputFactory.makeTextOutput('    ___       ____        __          _____ _               ______          ___                ______                           __  _ __  _            \n' +
							'   /   |     / __ )__  __/ /____     / ___/(_)___  ___     / ____/___  ____/ (_)___  ____ _   / ____/___  ____ ___  ____  ___  / /_(_) /_(_)___  ____  \n' +
							'  / /| |    / __  / / / / __/ _ \\    \\__ \\/ /_  / / _ \\   / /   / __ \\/ __  / / __ \\/ __ `/  / /   / __ \\/ __ `__ \\/ __ \\/ _ \\/ __/ / __/ / __ \\/ __ \\ \n' +
							' / ___ |   / /_/ / /_/ / /_/  __/   ___/ / / / /_/  __/  / /___/ /_/ / /_/ / / / / / /_/ /  / /___/ /_/ / / / / / / /_/ /  __/ /_/ / /_/ / /_/ / / / / \n' +
							'/_/  |_|  /_____/\\__, /\\__/\\___/   /____/_/ /___/\\___/   \\____/\\____/\\__,_/_/_/ /_/\\__, /   \\____/\\____/_/ /_/ /_/ .___/\\___/\\__/_/\\__/_/\\____/_/ /_(_)\n' +
							'                /____/                                                            /____/                        /_/                                    ')
					};

				},
				'optDef': {}

			}

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
				height: '50vh'
			}}
			outputRenderers={{...ReactOutputRenderers, [PAPER_TYPE]: PaperOutput}}
			emulatorState={customState}
		/>

	);
};

export default Terminal;
