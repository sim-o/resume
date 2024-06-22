import React from 'react';
import ReactPDF from '@react-pdf/renderer';
import fs from 'fs';
import { parse } from 'yaml';
import * as model from './model';
import { Resume } from './pdf/resume';

export const render = async (resumeFile: string, outputFile: string) => {
  const readPromise = new Promise<string>((s, f) => {
    fs.readFile(resumeFile, (err, data) => (err ? f(err) : s(data.toString())));
  });
  const yaml: model.Resume = parse(await readPromise);
  await ReactPDF.renderToFile(<Resume data={yaml} />, outputFile);
};
