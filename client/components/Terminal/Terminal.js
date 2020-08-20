import React from 'react';

import ReactTerminal, { ReactOutputRenderers } from 'react-terminal-component';
import {CommandMapping, defaultCommandMapping, EmulatorState, OutputFactory } from 'javascript-terminal';

import { aByteSizeCodingCompetition } from "./ASCIIArt";

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
					return { output: OutputFactory.makeTextOutput(aByteSizeCodingCompetition) };
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
				height: '100vh'
			}}
			emulatorState={customState}
		/>

	);
};

export default Terminal;
