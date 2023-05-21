
/**
 * Example Code
 */

/**
let json = [
    {
        "type": "class",
        "className": "operation",
        "values": [
            {
                "group": "props"
            },
            {
                "visibility": "+",
                "type": "test",
                "name": "ddd"
            },
            {
                "group": "methods"
            },
            {
                "name": "getValues"
            },
            {
                "group": "slots"
            },
            {
                "visibility": "+",
                "type": "test",
                "name": "ddd"
            }
        ]
    }
];

let vueComponentCode = generateVueComponent(json);
console.log(vueComponentCode);
 */

/**
 *  generate vue component code from uml json data
 */
function generateVueComponent(umlData) {
    const values = umlData[0].values;
    const propValues = getGroupValues(values, 'props');
    const props = parseProps(propValues);
    const methodValues = getGroupValues(values, 'methods');
    const { functionDeclaration, methodObject } = parseMethods(methodValues);
    return `<template></template>
import { defineComponent } from '@vue/composition-api';
export default defineComponent({
    name: '${umlData[0].className}',
    props: { ${props} 
    },
    setup(){
        ${functionDeclaration}
        return {
            ${methodObject}
        }
    }
});`
}

function getGroupValues(values, group) {

    let groupValues = [];
    let i = 0;
    while (i < values.length) {
        let value = values[i];
        if (value.group === group) {
            i++;
            while (i < values.length && (values[i].visibility || !values[i].group)) {
                groupValues.push(values[i]);
                i++;
            }
        } else {
            i++;
        }
    }
    return groupValues;
}

function parseProps(propValues) {
    let props = '';
    for (let prop of propValues) {
        props += `
        // ${prop.description}
        ${prop.name} : {
            type: ${prop.type},
            default: ${prop.default},
        },`;
    }
    return props;
}

function parseMethods(methodValues) {
    let functionDeclaration = '';
    let methodObject = '';
    for (let { name } of methodValues) {
        functionDeclaration += `function ${name} (){


        };`
        methodObject += `${name},
`
    }
    return { functionDeclaration, methodObject };
}
module.exports = {
    generateVueComponent,
}