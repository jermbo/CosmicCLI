#! /usr/bin/env node

const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");

const cwd = process.cwd();
console.log(cwd);
let existingFiles = fs.existsSync(cwd);
