// Write a function "numberJoinerWhile" which is given a start number and an end number.
// It should return a string of the numbers joined together by the "_" character.
// Use a "while" loop to do this.
// Examples:
// numberJoinerWhile(1, 10) --> '1_2_3_4_5_6_7_8_9_10'
// numberJoinerWhile(12, 14) --> '12_13_14'

function numberJoinerWhile (startNum, endNum) {
    var justBecause = startNum + ''
    while (startNum < endNum) {
        startNum++;
        justBecause += "_" + startNum
    }
    return justBecause
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "numberJoinerFor" which does the same thing as "numberJoinerWhile",
// except using a "for" loop internally.

function numberJoinerFor (start, end) {
    let thisThing = ''
    for (var i = start; i <= end; i++) {
        thisThing += i + '_' 
    } 

 var len = thisThing.length
 thisThing = thisThing.substring(0, len - 1)
 return thisThing
}
 

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "numberJoinerFancy" which does the same thing as "numberJoinerWhile",
// except it takes an optional third argument specifying the separator between the numbers.
// Use either a "while" or a "for" loop (your preference).
// Examples:
// numberJoinerFancy(1, 10) --> '1_2_3_4_5_6_7_8_9_10'
// numberJoinerFancy(1, 5, '~') --> 1~2~3~4~5
// numberJoinerFancy(3, 6, '***BANANAS***') --> 1***BANANAS***2***BANANAS***3

function numberJoinerFancy (startNum, endNum, seperator) {
    let theString = ''
    for (var i = startNum; i <= endNum; i++) {
       if(seperator = '') {
            theString += i + '_';
       } 
       else if (seperator = '~') {
         theString += i  + seperator;
       }
       else if (seperator = '***BANANAS***') {
            theString += i + seperator;
        }
       else {
            "it ain't happening....haha"
       }
    var len = theString.length
    theString = theString.substring(0, len - 1)
    return theString
    }
}
console.log(numberJoinerFancy(1,10,'~'))

