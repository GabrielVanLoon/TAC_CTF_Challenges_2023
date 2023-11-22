
import util  from 'util'
import crypto from 'crypto'
import dicewareWords from './words.js';

const dicewareLen = dicewareWords.length

let contador = 0

function buildTree(level, parent) {
    if(level > 0){
        for(let i = 0; i < 4; i++){
            const word = dicewareWords[crypto.randomInt(0, dicewareLen)]
            parent.paths[word] = { paths: {} }
            buildTree(level-1, parent.paths[word])
        }
        // Generate 4 subpaths
    } else {
        if(contador++ == 127)
            parent["flag"] = true
    }
}

let pathTree = { paths: {} }

buildTree(4, pathTree)

console.log("let pathTree = ")
console.log(util.inspect(pathTree, false, null, false /* enable colors */))
// console.log(util.inspect(pathTree, false, null, true /* enable colors */))

// Run to generate a new tree path tree
// node tree.js > chall4.js