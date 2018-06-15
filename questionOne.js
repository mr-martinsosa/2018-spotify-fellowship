function sortByStrings(s,t){
    // initialize empty string variable to return later
    let sortedString = ""

    // loop through the second string
    for(let i = 0; i < t.length; i++){
        // loop through first string to match current letter on second string
        for(let j = 0; j < s.length; j++){
            // check if letters match
            if(t[i] === s[j]){
                // append letter to sortedString
                sortedString += t[i] 
            }
        }
    }
    // return our newly sortedString
    return sortedString
}

/* Test cases */
console.log(sortByStrings("weather", "therapyw")) // returns "theeraw"
console.log(sortByStrings("good", "odg")) // returns "oodg"