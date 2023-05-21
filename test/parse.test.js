const { parseClass } = require('../src/index.js');

describe('test generateVueComponent basic', function () {
    test('test generateVueComponent', function () {
        const input = `@startuml
class operation {
__ props __
+ String test : 中文
__ methods __
+ getValues()
}
@enduml`;
        let result = parseClass(input);
        expect(result).toEqual([
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
        ])
    })
})