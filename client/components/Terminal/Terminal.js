import React, {useEffect} from 'react';

import ReactTerminal  from 'react-terminal-component';
import {FileSystem, CommandMapping, defaultCommandMapping, EmulatorState, OutputFactory } from 'javascript-terminal';

import {files} from "./FileSystem";
import {aByteSizeCodingCompetition, csuLogo} from "./ASCIIArt";

import gusVideo from "../../static/videos/gus.mp4"

const Terminal = props =>
{
	useEffect(() =>
	{
		for (let form of document.getElementsByTagName("FORM"))
		{
			form.setAttribute("spellcheck", "false")
		}
	});

	const customState = EmulatorState.create({
		'fs': FileSystem.create(files),
		'commandMapping': CommandMapping.create({
			...defaultCommandMapping,
			'exit': {
				'function': (state, opts) =>
				{
					close();
				},
				'optDef': {}
			},
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
							<source src={gusVideo} type="video/mp4"/>
						</video>)
					};

				},
				'optDef': {}
			},

			'help': {
				'function': (state, opts) => {
					return {
						output: OutputFactory.makeTextOutput('Here is a list of commands you can try!\n' +
							'' +
							'\'ls\' - list everything in current directory\n' +
							'\'echo _\' - outputs whatever is passed to the terminal\n' +
							'\'exit\' - exits the terminal\n' +
							'\'slogan\' - displays the csu logo and slogan for event\n' +
							'\'markvid\' - displays marketing video for event\n' +
							'\'davemd\' - for those light hearted people\n')
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
				spacing: '2%',
				width: '100%',
				height: '100vh'
			}}
			promptSymbol={"cam@event-name-here:$"}
			emulatorState={customState}
		/>

	);
};

export default Terminal;
