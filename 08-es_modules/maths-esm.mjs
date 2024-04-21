/*
*   Default export
 */
const add = (a, b) => {
    return a + b;
};
// export default add

export default (a, b) => {
    return a + b;
};

const addition = (a, b) => {
    return a + b;
};

const subtract = (a, b) =>{
    return a - b;
};

// export default {
//     addition,
//     subtract
// }


/*
*   Named export
*/
export const addition2 = (a, b) => {
    return a + b;
};

export const subtract2 = (a, b) =>{
    return a - b;
};
