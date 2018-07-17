#!/usr/bin/env node

var path = require('path');
var download = require('download-git-repo')
var program = require('commander')
var p = process.cwd();

// var arguments = process.argv.splice(2);


var program = require('commander');

program
    .command('init [type] [dir]')
    // .option('-r, --recursive', 'Remove recursively')
    .action(function(type, dir) {
        dir = dir || 'rockcode'
        switch (type) {
            case 'es6':
                console.log('下载中')
                download('leued/webpack-tpl', './' + dir, { clone: true }, function(err) {
                    console.log('下载完成')
                })
                break;
            case 'vue-base':
                console.log('下载中')
                download('leued/webpack-tpl-vue-base', './' + dir, { clone: true }, function(err) {
                    console.log(err)
                    console.log('下载完成')
                })
                break;
        }
    })

program.parse(process.argv)



// program
//     .version(require('./package').version)
//     .option('-i, --init', '初始化项目文件夹')
//     .parse(process.argv);

// /** init */
// if (program.init) {
//     console.log('下载中')
//     download('leued/webpack-tpl', './test', { clone: true }, function(err) {
//         console.log('下载完成')
//     })
// }
