'use strict';

const fs = require('fs');
const settingsFile = 'stylesheets.json';
function priocopyfiles() {
    var files = [];
    let html = '';
    if (fs.existsSync(settingsFile) === false) {
        console.log(settingsFile + ' NOT FOUND!')
        return false;
    }
    const settings = JSON.parse(fs.readFileSync(settingsFile));
    var sourceFolders = settings.folders.reverse();
    for (let file of settings.files) {
        for (let sourceFolder of sourceFolders) {
            if (fs.existsSync(settings.rootSource + sourceFolder + file)) {
                html += "\n<link rel=\"stylesheet\" href='" + sourceFolder + file + "'>";
                break;
            }
        }
    }
    fs.writeFileSync(settings.outputFile, html);
}
priocopyfiles();;
