#!/usr/bin/env node

var path = require('path');
var download = require('download-git-repo')
var program = require('commander')

// var arguments = process.argv.splice(2);

program
    .version(require('./package').version)
    .option('-i, --init', '初始化项目文件夹')
    .parse(process.argv);

/** init */
if (program.init) {
    console.log('下载中')
    download('leued/webpack-tpl', './test', { clone: true }, function(err) {
        console.log('下载完成')
    })
}