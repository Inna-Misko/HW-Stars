// function getFistPic(){
//     var result =''

//     for(var j = 1; j < 8; j++){    
//         for(var i = 1; i < 8; i++) {
//             result +=' * '
//         }
//         result +='\n'
//     }
//     return result 
// }
// console.log(getFistPic())

// function getSecPic() {
//   var result = '';
// for (var i = 1; i <= 7; i++) {
//     for (var a = 1; a <= 7; a++) { 
//         if (a === 1 || a === 7 || i === 1 || i === 7) {
//             result += '* ';
//         } else {
//             result += '  ';
//         }
//     }
//         result += '\n';
// }
//     return result 
// }
// console.log(getSecPic())


// function getThirdPic() {
//     var result = '';
//     for (var i = 1; i <= 7; i++) {
//         for (var a = 1; a <= 7; a++) {
//             if (i === 1 || a === 1 || (a === 7 + 1 - i)) {
//                 result += '* ';
//             } else {
//                 result += '  ';
//             }
//         }
//          result += '\n';
//     }
//      return result 
// }
// console.log(getThirdPic())


// function getThirdPic() {
//     var result = '';
//     for (var i = 1; i <= 7; i++) {
//         for (var j = 1; j <= 7; j++) {
//             if (j === 1 || i === 7 || (j === i)) {
//                 result += "*";
//             } else {
//                 result += " ";
//             }
//         }
//         result += '\n'
//     }
//     return result
// }
// console.log(getThirdPic())

// function getFourPic() {
//     var result = '';
//     for (var i = 1; i <= 7; i++) {
//         for (var j = 1; j <= 7; j++) {
//             if (j === 1 || i === 7 || (j === i)) {
//                 result += "*";
//             } else {
//                 result += " ";
//             }
//         }
//         result += '\n'
//     }
//     return result
// }
// console.log(getFourPic())

// function getFivePic() {
//     var result = '';
//     for (var i = 1; i <= 7; i++) {
//         for (var j = 1; j <= 7; j++) {
//             if (j === 7 || i === 7 || (j === 7 + 1 - i)) {
//                 result += "*";
//             } else {
//                 result += " ";
//             }
//         }
//         result += '\n'
//     }
//     return result
// }
// console.log(getFivePic())

// function getSixPic() {
//     var result = '';
//     for (var i = 1; i <= 7; i++) {
//         for (var j = 1; j <= 7; j++) {
//             if (j === 7 || i === 1 || (j === i)) {
//                 result += "*";
//             } else {
//                 result += " ";
//             }
//         }
//         result += '\n'
//     }
//     return result
// }
// console.log(getSixPic())

// function getSevenPic() {
//     var result = '';
//     for (var i = 1; i <= 7; i++) {
//         for (var j = 1; j <= 7; j++) {
//             if ( i === j || (j === 7 + 1 - i)) {
//                 result += "*";
//             } else {
//                 result += " ";
//             }
//         }
//         result += '\n'
//     }
//     return result
// }
// console.log(getSevenPic())

// function getEightPic() {
//     var result = '';
//     var middle = 7 / 2;
//     for (var i = 1; i <= 7; i++) {
//         for (var j = 1; j <= 7; j++) {
//             if (i === 1 || ((j === 7 + 1 - i || j === i) && i < middle + 1)) {
//                 result += "*";
//             } else {
//                 result += " ";
//             }
//         }
//         result += '\n'
//     }
//     return result
// }
// console.log(getEightPic())

function getNinePic() {
    var result = '';
    var middle = 7 / 2;
    for (var i = 1; i <= 7; i++) {
        for (var j = 1; j <= 7; j++) {
            if (i === 7 || ((j === 7 + 1 - i || j === i) && i > middle)) {
                result += "*";
            } else {
                result += " ";
            }
        }
        result += '\n'
    }
    return result
}
console.log(getNinePic())