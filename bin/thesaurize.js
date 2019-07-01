#!/usr/bin/env node

const thesaurize = require('../app');

const [,, ...args] = process.argv;

const thesaurized = thesaurize(args.join(' '));

console.log(thesaurized);
