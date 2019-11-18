'use strict';

const SRC_DIR = 'src';

const { series } = require('gulp');
const { src, dest } = require('gulp');
const { promisify } = require('util');

const path = require('path');
const fs = require('fs');

const tsc = require('gulp-typescript');
const exists = promisify(fs.exists);
const mkdir = promisify(fs.mkdir);

var tsProject = tsc.createProject('tsconfig.json');

function clean()
{
}

function makeSrcDir()
{
    let fullName = path.join('./', SRC_DIR);

    return exists(fullName)
        .then(found => found ? Promise.resolve() : mkdir(fullName));
}

function compile()
{
    return tsProject
        .src()
        .pipe(tsProject())
        .pipe(dest(SRC_DIR));
}

var build = series(makeSrcDir, compile);

function runTests()
{
}

exports.clean = clean;
exports.build = build;
exports.rebuild = series(clean, build);
//exports.test = series(build, runTests);
exports.default = build;
