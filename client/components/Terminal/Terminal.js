import React, {useEffect} from 'react';

import {Box} from "@material-ui/core";

import ReactTerminal  from 'react-terminal-component';
import {FileSystem, CommandMapping, defaultCommandMapping, EmulatorState, OutputFactory } from 'javascript-terminal';

import {files} from "./FileSystem";
import {aByteSizeCodingCompetition, csuLogo} from "./ASCIIArt";

import gusVideo from "../../static/videos/gus.mp4"
import CSULogo from "../../static/images/CSU-Logo.png";

function OpenInNewTab(url) {
	var win = window.open(url, '_blank');
	win.focus();
}

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
					return { output: OutputFactory.makeTextOutput(aByteSizeCodingCompetition) };
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

			'alternate': {
				'function': (state, opts) => {

					return {
						output: OutputFactory.makeTextOutput("Let's get Crack-a-Hacking!")
					};

				},
				'optDef': {}
			},

			'discord': {
				'function': (state, opts) => {
						var win = window.open('https://discord.gg/DyTfs2B', '_blank');
						win.focus();
						return { };
				},
				'optDef': {}
			},

			'help': {
				'function': (state, opts) => {
					return {
						output: OutputFactory.makeTextOutput('Here is a list of commands you can try!\n' +
							'' +
							'\'discord\' - opens news tab to the discord for event\n' +
							'\'slogan\' - displays slogan for event\n' +
							'\'markvid\' - displays marketing video for event\n' +
							'\'alternate\' - displays an additional slogan\n' +
							'\'davemd\' - for those light hearted people\n')
					};

				},
				'optDef': {}
			}
		})
	});

	return (
		<Box p={4}>
			<ReactTerminal
				theme={{
					background: props.darkMode ? '#141313' : '#FCFCFC',
					promptSymbolColor: props.darkMode ? '#08EC19' : '#0661FF',
					commandColor: props.darkMode ? '#FCFCFC' : '#141313',
					outputColor: props.darkMode ? '#FCFCFC' : '#141313',
					errorOutputColor: '#ff0606',
					width: '100%',
					height: '92vh'
				}}
				promptSymbol={"cam@ProgRAM-Slam:$"}
				clickToFocus={true}
				emulatorState={customState}
			/>
		</Box>
	);
};

export default Terminal;
