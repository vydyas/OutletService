//import someObject from '../data/output.json';
// if I'm using import its giving error thats why used require just for output
const classifyPoint = require('robust-point-in-polygon');
const data = require('../data/output.json');

let findOutlet = (lat, long) => {
    try {
        let polygons =
            data.features &&
            data.features.filter(e => e.geometry.type === 'Polygon');
        for (let i = 0; i < polygons.length; i++) {
            let isOutlet = classifyPoint(polygons[i].geometry.coordinates[0], [
                long,
                lat
            ]);

            if (isOutlet === -1 || isOutlet === 0) {
                console.log(polygons[i]);
                return {
                    status: 200,
                    outlet: polygons[i].properties.name
                };
            }
        }
        return {
            status: 200,
            outlet: null
        };
    } catch (error) {
        console.log(err);
        return {
            status: 403,
            outlet: null
        };
    }

    return polygons;
};

export const outletService = {
    findOutlet
};
