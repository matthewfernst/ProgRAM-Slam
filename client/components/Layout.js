import React from 'react';
import ReactTerminal from 'react-terminal-component';

import { ReactOutputRenderers } from 'react-terminal-component';
import {
	CommandMapping, OutputFactory, EmulatorState,
	defaultCommandMapping
} from 'javascript-terminal';

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

const Layout = () => {
		// Add a print command that outputs a PaperRecord
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

		// Add rendering support for the PaperRecord using PaperOutput as the renderer
		return (
			<ReactTerminal
				inputStr='print hello world!'
				outputRenderers={{
					...ReactOutputRenderers,
					[PAPER_TYPE]: PaperOutput
				}}
				emulatorState={customState}/>
		);
	};
export default Layout;