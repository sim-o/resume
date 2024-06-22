#!/usr/bin/env node

import { Command } from 'commander';
import { render } from './index';

const program = new Command()
  .version('0.1.0')
  .option('-r, --resume <file>', 'Set resume file', 'resume.yaml')
  .option('-o, --output-file <file>', 'Set output file', 'resume.pdf');

program.parse();
const options = program.opts();
render(options.resume, options.outputFile).then(() => {
  console.log('Completed.');
});
