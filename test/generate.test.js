const { generateVueComponent } = require('../src/generator.js');
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
                "name": "test",
                "type": "String",
                "description": "中文"
            },
            {
                "group": "methods"
            },
            {
                "visibility": "+",
                "name": "getValues"
            }
        ]
    }
]
describe('test generateVueComponent basic', function () {
    test('test generateVueComponent', function () {
        let result = generateVueComponent(json);
        expect(result).toBe(`<template></template>
import { defineComponent } from '@vue/composition-api';
export default defineComponent({
    name: 'operation',
    props: { 
        // 中文
        test : {
            type: String,
            default: undefined,
        }, 
    },
    setup(){
        function getValues (){


        };
        return {
            getValues,

        }
    }
});`)
    })
})


