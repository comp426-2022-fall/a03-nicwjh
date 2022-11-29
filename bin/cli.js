#!/usr/bin/env node

import {roll} from "../lib/roll.js"

//const minimist = require('minimist');
import minimist from 'minimist';

const args = minimist(process.argv.slice(2));

var x = args.sides || 6;
var y = args.dice || 2;
var z = args.rolls || 1;

console.log(JSON.stringify(roll(x,y,z)));
