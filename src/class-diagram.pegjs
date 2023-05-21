// Simple Arithmetics Grammar
// ==========================
//
// Accepts expressions like "2 * (3 + 4)" and computes their value.

Start
  = ClassDiagram 

ClassDiagram
  = "@startuml" EOL result:ClassDeclaration EOL "@enduml" {return result}

ClassDeclaration
  = "class " className:IdString " {" EOL classBodyItem:ClassBodyItem* "}"  { return [{type:'class',className,values:classBodyItem}] }

ClassBodyItem
  = DividerDeclaration / ClassProperty / Method

DividerDeclaration
  = "__ " divider:IdString " __" EOL { return {group: divider} }
 
ClassProperty
  = visibility: Visibility  type:DataType " " name:IdString  " : " description:Charactor EOL { return {visibility,name,type,description          }}

Method
  = visibility: Visibility name:IdString "(" ")" EOL { return {visibility,name}}

Visibility
  = result:("+" / "-" / "#") " "? { return result }

DataType
  = IdString 

IdString
 = id:ID  { return id.flat().join('') }
  
ID
  = [a-zA-Z_][a-zA-Z0-9_]*

EOL
  = [\r\n]+
  
Charactor 
  = result:[\u4e00-\u9fa5a-zA-Z0-9]*  { return result.flat().join('')}