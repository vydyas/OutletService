import { readFileSync, writeFileSync } from 'fs';
import { DOMParser } from 'xmldom';
import { kml } from './kml';
const path = require('path');

const inputFilePath = path.join(__dirname, '../data/foo.kml');
const outputFilePath = path.join(__dirname, '../data/output.json');

const generateData = () => {
    // node doesn't have xml parsing or a dom. use xmldom
    const fileStream = readFileSync(inputFilePath, 'utf8');
    const kmlString = new DOMParser().parseFromString(fileStream);
    const converted = kml(kmlString);

    try {
        writeFileSync(outputFilePath, JSON.stringify(converted));
        console.log('File written successfully');
    } catch (err) {
        console.error(err);
    }
};

export default generateData;
