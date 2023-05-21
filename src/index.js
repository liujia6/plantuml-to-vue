const peg = require('pegjs');

const { readFileSync } = require('fs');
const { resolve } = require('path');
const { generateVueComponent } = require('./generator');



function parseClass(input){
    const path = resolve(__dirname, './class-diagram.pegjs')
    const grammar = readFileSync(path, 'utf8');
    const parser = peg.generate(grammar);
    return parser.parse(input)
}


function plantUmlToVue(input) {
    if(!input) return '';
    const result = parseClass(input);
    return generateVueComponent(result);
}

module.exports = {
    plantUmlToVue,
    parseClass
}