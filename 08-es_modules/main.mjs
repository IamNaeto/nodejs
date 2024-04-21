/*
*   Importing default exports
 */
import add from "./maths-esm.mjs"
console.log(add(52, 12))

import maths from "./maths-esm.mjs"
console.log(maths.addition(5,5))
console.log(maths.subtract(56, 35))

/*
*   Importing a named export
 */
import * as math from "./maths-esm.mjs" // 1 way of doing it
console.log(math.addition2(5,5))
console.log(math.subtract2(56, 35))

const {addition2, subtract2} = math //Destructuring
console.log(addition2(5,5))
console.log(subtract2(56, 35))

import { addition2, subtract2 } from "./maths-esm.mjs" //Another way of doing it
console.log(addition2(5,5))
console.log(subtract2(56, 35))