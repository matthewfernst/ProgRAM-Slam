import React from "react";
/**
 * Combines one or more files to display in the terminal output
 * Usage: cat file1.txt file2.txt
 */
import parseOptions from 'parser/option-parser';
import * as FileOp from 'fs/operations-with-permissions/file-operations';
import * as OutputFactory from 'emulator-output/output-factory';
import { resolvePath } from 'emulator-state/util';

const fileToImageOutput = (fs, filePath) => {
	const {err, file} = FileOp.readFile(fs, filePath);

	if (err) {
		return OutputFactory.makeErrorOutput(err);
	}

	return OutputFactory.makeTextOutput(<img src={file.get('content')} style={{width: "auto", height: 400}}/>);
};

export const optDef = {};

export default (state, commandOptions) => {
	const {argv} = parseOptions(commandOptions, optDef);

	if (argv.length === 0) {
		return {};
	}

	const regex = new RegExp('\.(png|jpe?g)$', 'g');
	const filePaths = argv.map(pathArg => resolvePath(state, pathArg)).filter(item => item.match(regex));

	return {
		outputs: filePaths.map(path => fileToImageOutput(state.getFileSystem(), path))
	};
};
