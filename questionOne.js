function sortByStrings(s,t){
    // initialize empty string variable to return later
    let sortedString = ""

    // loop through the first string
    for(let i = 0; i < s.length; i++){
        // loop through second string to match letters
        for(let j = 0; i < t.length; j++){
            // check if letters match
            if(s[i] === t[j]){
                // append letter to sortedString
                sortedString += s[i] 
            }
        }
    }
    // return our newly sortedString
    return sortedString
}

/* Test functions */
console.log(sortByStrings("weather", "therapyw")) // returns "theeraw"
console.log(sortByStrings("good", "odg")) // returns "oodg"