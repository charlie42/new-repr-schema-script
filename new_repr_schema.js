var path = "./protocols/KSADS_ML_Applet/KSADS_ML_Applet_schema"
const fs = require('fs');
const myJSON = JSON.parse(fs.readFileSync(path, 'utf8')) 

var variableMap = myJSON.variableMap
var visibility = myJSON.ui.visibility

delete(myJSON.variableMap)
delete(myJSON.ui.visibility)

myJSON.ui["addProperties"] = variableMap

myJSON.ui.addProperties.map((property) => {
  property.isVis = visibility[property.variableName]
})

console.dir(myJSON, {depth: null});

var myJSONString = JSON.stringify(myJSON, null, 4);
fs.writeFile(path, myJSONString, 'utf8', function (err,data) {
    if (err) {
      return console.log(err);
    }
    console.log(data);
});