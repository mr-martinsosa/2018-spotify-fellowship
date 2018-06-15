def decode_string(s)
    #initialize an empty variable to store the decoded string
    decoded_string = ""

    #initialize hash to organize numbers to characters better
    hash = {}

    #initialize array to store letters
    letters = []

    #initialize variable to hold current hash key
    current_multiplier = 0

    s.each_char do |letter|
        if letter.to_i > 0 #if letter is greater than 0 it is an integer
            hash.store(letter, letters) #store multiplier with empty array
            current_multiplier = letter #set multiplier with current multiplier
        elsif !(letter == "[" || letter == "]") #parse out anything not a letter
            # p letter
            hash[current_multiplier] = letters.push(letter) #append consecutive letters to array
        else
            letters = [] #empty array once it reaches ], should have no effect if [ 
        end
    end
    reversed_hash = Hash[hash.to_a.reverse] #reverse hash to loop backwards
    reversed_hash.each do |key, array|
        if(array.length > 1)
            array.reverse.each do |char| #reverse array to get original order of chars back 
                decoded_string += char #append chars to decoded_string being built in loop
            end
        else
            decoded_string += array[0] #append first character since array length is 1
        end
        decoded_string = decoded_string.reverse #reverse string order if we were dealing with single element arrays
        decoded_string *= key.to_i 
    end
    decoded_string
end

#Test cases
p decode_string("4[ab]") #"abababab"
p decode_string("2[b3[a]]") #"baaabaaa"