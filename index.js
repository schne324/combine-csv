#!/usr/bin/env node

const assert = require('assert');
const { program } = require('commander');
const combine = require('./lib/combine');

program
  .option('-i, --input <input>', 'Input files (glob)')
  .option('-o, --output <output>', 'Output file (to be written)')
  .parse(process.argv);

assert.ok(program.input, 'Missing input file (--input)');
assert.ok(program.output, 'Missing output file (--output)');

combine(program.input, program.output);
