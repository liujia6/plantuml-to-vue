const { generateVueComponent } = require('../src/index.js');
describe('test generateVueComponent basic', function () {
    test('test generateVueComponent', function () {
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
        let result = generateVueComponent(json);
        expect(result).toBe(`import { defineComponent } from '@vue/composition-api';
export default defineComponent({
    name: 'operation',
    props: { 
        ddd : {
            type: test,
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