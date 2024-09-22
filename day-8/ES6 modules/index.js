//  ES6 MODULE = an external file that contains reusable code that can be imported into other javascript files
//  write resusable code for many different apps. can contain variables,classes,  functions .. and more
//  introduced as part of ECMAscripte 2015 update

import {PI, getcirc , getarea , getvolume} from './mathutils.js';

console.log(PI);

const circ = getcirc(52);
const area  = getarea(23);
const volume = getvolume(12);
console.log(circ);
console.log(area);
console.log(volume);