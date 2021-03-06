const fs = require('fs-extra');

function loadJSON(path) {
  const raw = fs.readFileSync(path, 'utf8');
  return JSON.parse(raw);
}

function saveJSON(path, data) {
  fs.writeJSONSync(path, data);
}

function isEmpty(obj) {
  for (var prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      return false;
    }
  }
  return JSON.stringify(obj) === JSON.stringify({});
}

function objClone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

function removeANSI(text) {
  const plainText = text.replace(
    /[\u001b\u009b][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-ORZcf-nqry=><]/g, '');
  return plainText;
}


exports.isEmpty = isEmpty;
exports.objClone = objClone;
exports.saveJSON = saveJSON;
exports.loadJSON = loadJSON;
exports.removeANSI = removeANSI;
