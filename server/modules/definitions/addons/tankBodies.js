const { skillSet } = require('../facilitators.js');
const { base, statnames, dfltskl, smshskl } = require('../constants.js');
require('./generics.js');
const g = require('../gunvals.js');

// HAHA this is annoying
return console.log("[tankBodies.js] | This addon is disabled by default! Please comment out or remove this line (line 7) to enable the addon.");

// create tank
Class.tankTreads = {
    PARENT: "genericEntity",
    TYPE: "tank",
    COLOR: 17,
    SHAPE: [[-1.5,-1.5],[1.5,-1.5],[1.5,1.5],[-1.5,1.5]], // rectangle but also kind of a square
}
Class.tankBody = {
    PARENT: "genericEntity",
    LABEL: "Body", // we dont need this, but if the body were to have a gun this would be useful
    INDEPENDENT: true,
    FACING_TYPE: "smoothWithMotion",
    MOTION_TYPE: "motor",
    COLOR: "mirror",
    
    SHAPE: [[-1.7,-1],[0,-1.3],[1.7,-1],[1.7,1],[0,1.3],[-1.7,1]], // long hexagon
    CONTROLLERS: ["turretWithMotion", "scaleWithMaster"],
    DECO: [{
            POSITION: [20],
            TYPE: "tankTreads",
        }],
}
// note: make this actually work :)
