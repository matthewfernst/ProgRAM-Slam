import React, {useState} from 'react';

import ReactTerminal, { ReactOutputRenderers } from 'react-terminal-component';
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

const Terminal = () =>
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
			}
		})
	});

	return (
		<ReactTerminal
			outputRenderers={{...ReactOutputRenderers, [PAPER_TYPE]: PaperOutput}}
			emulatorState={customState}
		/>
	);
};

export default Terminal;
