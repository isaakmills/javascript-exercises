const palindromes = function (str) {
    strArray = str.toLowerCase().split("").filter(char => char  !== " " & char !=="," & char !=="." & char !=="!" );
        console.log(strArray.join(""))


    if(strArray.join("") == strArray.reverse().join("")){ 
        //console.log(strArray)
        return true
    } else{
        return false};




    console.log(typeof strArray)
    console.log(strArray.reverse().join())
    console.log(strArray.join())
};

// Do not edit below this line





module.exports = palindromes;


//.join()
/*  
remove spaces
remove  , and . 
remove capitals

*/